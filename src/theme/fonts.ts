export type FontSize =
  | "extraSmall"
  | "smaller"
  | "small"
  | "medium"
  | "large"
  | "larger"
  | "extraLarge";

export type FontWeight = "bold" | "regular" | "light" | "medium" | "semiBold";

const allFontSizes: Array<string> = [
  "10px",
  "12px",
  "14px",
  "16px",
  "24px",
  "40px",
  "64px",
];

const allFontWeights: Array<number> = [700, 400, 300, 500, 600];

type FontAttr = FontSize | FontWeight;

type MappedFontAttr<B, A> = {
  [K in B as FontAttr]?: A;
};

let fontSizes: MappedFontAttr<FontSize, string> = {};
fontSizes.extraSmall = allFontSizes[0];
fontSizes.smaller = allFontSizes[1];
fontSizes.small = allFontSizes[2];
fontSizes.medium = allFontSizes[3];
fontSizes.large = allFontSizes[4];
fontSizes.larger = allFontSizes[5];
fontSizes.extraLarge = allFontSizes[6];

let fontWeights: MappedFontAttr<FontWeight, number> = {};
fontWeights.bold = allFontWeights[0];
fontWeights.regular = allFontWeights[1];
fontWeights.light = allFontWeights[2];
fontWeights.medium = allFontWeights[3];
fontWeights.semiBold = allFontWeights[4];

export default { fontSizes, fontWeights };
