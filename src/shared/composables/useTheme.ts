// export type Color = (options?: {
//   lighten?: number,
//   darken?: number,
//   alpha?: number
// }) => string

export class Color {
  constructor(
    public h: number,
    public s: number,
    public l: number,
    public a: number = 1,
  ) {

  }

  invert() {
    return new Color(
      (this.h + 180) % 360, this.s, this.l, this.a
    );
  }

  darken(percent: number) {
    return new Color(
      this.h, this.s, this.l - this.l * percent, this.a
    )
  }

  lighten(percent: number) {
    return new Color(
      this.h, this.s, this.l + (100 - this.l) * percent, this.a
    )
  }

  desaturate(percent: number) {
    return new Color(
      this.h, this.s - this.s * percent, this.l, this.a
    )
  }

  alpha(value: number) {
    return new Color(this.h, this.s, this.l, value)
  }

  get hsl(): string {
    return `hsl(${this.h} ${this.s}% ${this.l}% / ${this.a})`
  }
}

export type Theme = { [key: string]: Color }

const THEME: Theme = {}

export function useThemeManager() {

  function registerColor(name: string, h: number, s: number, l: number) {
    THEME[name] = new Color(h, s, l)
  }

  return { registerColor }
}


export function useTheme() {
  return THEME
}
