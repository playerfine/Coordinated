export type FontSize =
  | 'extraSmall'
  | 'smaller'
  | 'small'
  | 'medium'
  | 'large'
  | 'larger'
  | 'extraLarge';

export type FontWeight = 'bold' | 'regular' | 'light' | 'medium' | 'semiBold' | 'extraBold';

const allFontSizes: Array<string> = [
  '0.5rem',
  '0.625rem',
  '0.75rem',
  '0.87rem',
  '1rem',
  '40px',
  '64px',
];

const allFontWeights: Array<number> = [700, 400, 300, 500, 600, 800];

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
fontWeights.extraBold = allFontWeights[5];

export default { fontSizes, fontWeights };
