
type Breakpoints = {
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  }
}

const breakpoints: Breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  }
}

console.log(breakpoints.values.xxl)


export default breakpoints
