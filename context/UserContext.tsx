import { LoadingPage } from "components";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "services/firebase";
import { LoggedState, User } from "types";

interface UserContext {
  user: {
    data: User;
    state: LoggedState;
    protectedContent: (type: LoggedState, reactNode: ReactNode) => ReactNode;
  };
  props: {
    children: React.ReactNode;
  };
}

const initialUser: User = {
  avatar: "",
  id: "",
  nickname: "",
  username: "",
};

const userContext = createContext<UserContext["user"]>({
  data: initialUser,
  state: "UNKNOWN",
  protectedContent: () => <></>,
});

export const useUser = () => {
  const context = useContext(userContext);
  return context;
};

export function UserProvider({ children }: UserContext["props"]) {
  const route = useRouter();

  const [data, setData] = useState<UserContext["user"]["data"]>(initialUser);
  const [state, setState] = useState<UserContext["user"]["state"]>("UNKNOWN");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setData({
          username: user.displayName!,
          avatar: user.photoURL!,
          nickname: user.displayName!,
          id: user.uid,
        });
        setState("LOGGED_IN");
      } else {
        setData(initialUser);
        setState("LOGGED_OUT");
      }
    });
  }, []);

  const protectedContent: UserContext["user"]["protectedContent"] = (
    type,
    reactNode
  ) => {
    if (type === "LOGGED_IN" && state === "LOGGED_OUT") {
      route.replace("/login");
    }

    if (type === "LOGGED_OUT" && state === "LOGGED_IN") {
      route.replace("/");
    }

    return state === "UNKNOWN" || type !== state ? <LoadingPage /> : reactNode;
  };

  return (
    <userContext.Provider value={{ data, state, protectedContent }}>
      {children}
    </userContext.Provider>
  );
}
