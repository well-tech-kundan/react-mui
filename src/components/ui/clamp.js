// control the min and max value should be in the range

export const clamp = (min, max) => (v) => v <= min ? min : v >= max ? max : v; 