import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ModalBody = ({ children }: Props) => {
  return <div className="px-5 py-5">{children}</div>;
};

export default ModalBody;