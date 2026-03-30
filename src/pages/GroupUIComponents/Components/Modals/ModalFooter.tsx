import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ModalFooter = ({ children }: Props) => {
  return (
    <div className="flex flex-wrap justify-end gap-3 px-5 py-4 border-t">
      {children}
    </div>
  );
};

export default ModalFooter;