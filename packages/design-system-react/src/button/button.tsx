import { type ButtonVariant, button } from "@mono/mono-panda/recipes";
// import { styled } from "@mono/mono-panda/jsx";
import { ReactNode } from "react";

// export const Button = styled("button", {
//   base: {
//     py: "2",
//     px: "4",
//     rounded: "md",
//   },
//   variants: {
//     variant: {
//       primary: {
//         bg: "blue.300",
//         color: "white",
//       },
//       secondary: {
//         bg: "gray.500",
//         color: "white",
//       },
//     },
//   },
// });

// export const Button2 = styled("button", button);

// const A = () => {
//   return <Button2 visual="edgy">aaa</Button2>;
// };
//
type ButtonProps = ButtonVariant & {
  children: ReactNode;
};

export const Button = (props: ButtonProps) => {
  const { children, size, visual, shape } = props;
  return (
    <button type="submit" className={button({ size, visual, shape: "circle" })}>
      {children}
    </button>
  );
};
