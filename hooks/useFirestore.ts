import { useUser } from "context/UserContext";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "services/firebase";
import { Dweet, User } from "types";
export default function useFirestore() {
  const user = useUser();

  const collections = {
    dweets: collection(db, "dweets"),
    users: collection(db, "users"),
  };

  const addUser = (user: User) => addDoc(collections.users, user);

  const getUsers = (
    key: "id" | "username",
    operator: "==",
    value: string
  ): Promise<Array<User>> =>
    getDocs(query(collections.users, where(key, operator, value)))
      .then(({ docs }) =>
        docs.map((doc) => {
          const user = doc.data() as User;
          return user;
        })
      )
      .catch((e) => e);

  const addDweet = (message: string) => {
    const dweet: Dweet = {
      message,
      userId: user.data.id,
    };

    return addDoc(collections.dweets, dweet);
  };

  function getDweets(pushDweets: any) {
    function handleDocs(dweet: any) {
      const { message, userId } = dweet.data();

      const q = query(collections.users, where("id", "==", userId));

      const user = getDocs(q).then(
        ({ docs }) => docs.map((doc) => doc.data())[0]
      );

      return user.then((user) => ({
        message,
        nickname: user.nickname,
        timestamp: "date",
        username: user.username,
        avatar: user.avatar,
        userId: user.id,
      }));
    }

    onSnapshot(collections.dweets, ({ docs }) => {
      const embeds = docs.map(handleDocs);

      Promise.all(embeds).then(pushDweets);
    });
  }
  /* () =>
    getDocs(collections.dweets).then(({ docs }) =>
      docs.map((doc) => {
        const data = doc.data() as Dweet;

        return getUsers("id", "==", data.userId).then((users) => {
          const user = users[0];

          
        });
      })
    ); */

  /* {
    function handleSnapshot(snapshot: QuerySnapshot<DocumentData>) {
      function handleDoc(doc: DocumentData) {
        const data = doc.data() as Dweet;

        return getUsers("id", "==", data.userId).then((users) => {
          const user = users[0];

          const embedDweet: DweetEmbed = {
            message: data.message,
            nickname: user.nickname,
            timestamp: "date",
            username: user.username,
            avatar: user.avatar,
            userId: user.id,
          };
        });
      }

      return snapshot.docs.map(handleDoc);
    }

    return getDocs(collections.dweets).then(handleSnapshot);
  }; */

  return {
    addDweet,
    getDweets,
    getUsers,
    addUser,
  };
}
