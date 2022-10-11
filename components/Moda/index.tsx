import { useEffect } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: React.ReactElement;
}

export default function Modal({ children }: Props) {
  const domNode = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(domNode);

    return () => domNode.remove();
  }, [domNode]);

  return ReactDOM.createPortal(children, domNode);
}
