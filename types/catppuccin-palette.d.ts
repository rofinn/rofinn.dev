declare module "@catppuccin/palette" {
  export interface Color {
    hex: string;
    rgb: string;
    hsl: string;
  }

  export interface AlphaColor extends Color {
    alpha: Color;
  }

  export interface Labels<T, U> {
    rosewater: T;
    flamingo: T;
    pink: T;
    mauve: T;
    red: T;
    maroon: T;
    peach: T;
    yellow: T;
    green: T;
    teal: T;
    sky: T;
    sapphire: T;
    blue: T;
    lavender: T;
    text: U;
    subtext1: U;
    subtext0: U;
    overlay2: U;
    overlay1: U;
    overlay0: U;
    surface2: U;
    surface1: U;
    surface0: U;
    base: U;
    mantle: U;
    crust: U;
  }

  export interface Variants<T> {
    latte: T;
    frappe: T;
    macchiato: T;
    mocha: T;
  }

  export const variants: Variants<Labels<Color, AlphaColor>>;
}
