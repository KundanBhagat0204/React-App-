/**
 * The `Alert` component in TypeScript React displays an alert message with a close button that
 * triggers the `onClose` function when clicked.
 * @param {Props}  - The code snippet provided defines a React component called `Alert`. It takes two
 * props:
 * @returns The `Alert` component is being returned, which is a React functional component that
 * displays an alert message with a close button. The component takes two props: `children` for the
 * content of the alert message and `onClose` for the function to be called when the close button is
 * clicked. The component renders the alert message along with a close button that triggers the
 * `onClose` function when clicked
 */
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
