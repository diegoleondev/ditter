import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut as signout,
  UserCredential,
} from "firebase/auth";
import { auth } from "services/firebase";
import { User } from "types";
import useFirestore from "./useFirestore";

const provider = new GoogleAuthProvider();

export default function useAuth() {
  const firebase = useFirestore();

  function createUser(result: UserCredential | null) {
    if (!result) return;

    const { uid, displayName, photoURL } = result.user;

    //firebase.getUser();
    const user: User = {
      id: uid!,
      username: displayName!,
      nickname: displayName!,
      avatar: photoURL!,
    };

    firebase.addUser(user);
  }

  const signInWithGoogle = () => {
    if (navigator.userAgent.match(/os|andorid/i)) {
      signInWithRedirect(auth, provider);

      return getRedirectResult(auth).then(createUser);
    } else return signInWithPopup(auth, provider).then(createUser);
  };

  const signOut = () => signout(auth);

  return { signInWithGoogle, signOut };
}
