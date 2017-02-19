const isInAmsterdam = position =>
  Math.abs(52.366017 - position.latitude) < 0.2 &&
  Math.abs(4.893490 - position.longitude) < 0.2;

export { isInAmsterdam };
