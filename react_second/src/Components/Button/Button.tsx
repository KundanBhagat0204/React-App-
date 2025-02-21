/**
 * The Button component is a TypeScript React component that renders a button with specified color and
 * onClick event handler.
 * @param {Props}  - The `Button` component takes the following props:
 * @returns The `Button` component is being returned. It is a functional component that renders a
 * button element with the specified children, onClick event handler, and optional color prop. The
 * color prop defaults to "primary" if not provided.
 */
import styles from "./Button.module.css";
interface Props {
  children: string;
  color?: "primary" | "secondary" | "dark";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
