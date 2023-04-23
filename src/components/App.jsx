import clsx from "clsx";

// Button.js
export const Button = ({ variant, children }) => {
  // Базові стилі кнопки з кількома варіантами відображення
  return <button className={clsx("button", variant)}>{children}</button>;
};

// LoginButton.js
export const LoginButton = () => {
  // Унікальна логіка кнопки логіна
  return <Button variant="primary">Login</Button>;
};

// FollowButton.js
export const FollowButton = () => {
  // Унікальна логіка кнопки підписки
  return <Button variant="secondary">Follow</Button>;
};