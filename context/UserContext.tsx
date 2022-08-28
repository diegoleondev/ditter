import { LoadingPage } from "components";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "services/firebase";
import { LoggedState } from "types";

interface UserContext {
  user: {
    data: User | null | string;
    state: LoggedState;
    protectedContent: (type: LoggedState, reactNode: ReactNode) => ReactNode;
  };
  props: {
    children: React.ReactNode;
  };
}

const userContext = createContext<UserContext["user"]>({
  data: null,
  state: "UNKNOWN",
  protectedContent: () => <></>,
});

export const useUser = () => {
  const context = useContext(userContext);
  return context;
};

export function UserProvider({ children }: UserContext["props"]) {
  const route = useRouter();

  const [data, setData] = useState<UserContext["user"]["data"]>(null);
  const [state, setState] = useState<UserContext["user"]["state"]>("UNKNOWN");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setData(user);
        setState("LOGGED_IN");
      } else {
        setData(null);
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
