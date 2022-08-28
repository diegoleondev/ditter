import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut as signout,
} from "firebase/auth";
import { auth } from "services/firebase";

const provider = new GoogleAuthProvider();

export default function useAuth() {
  const signInWithGoogle = () => {
    if (navigator.userAgent.match(/os|andorid/i)) {
      signInWithRedirect(auth, provider);

      return getRedirectResult(auth);
    } else return signInWithPopup(auth, provider);
  };

  const signOut = () => signout(auth);

  return { signInWithGoogle, signOut };
}
