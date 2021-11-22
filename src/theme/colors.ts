export type Color = "white" | "regular" | "dark" | "light" | "purple";

let colors = {
  white: "rgba(255, 255, 255, 1)",
  regular: "rgba(255, 255, 255, 0.7)",
  dark: "rgba(255, 255, 255, 0.87)",
  light: "rgba(255, 255, 255, 0.31)",
  purple: "#642AB5",
};

export default { ...colors };
