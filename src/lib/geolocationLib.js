const isInAmsterdam = position =>
  Math.abs(52.366017 - position.latitude) < 0.2 &&
  Math.abs(4.893490 - position.longitude) < 0.2;

const amsterdamRegion = {
  latitude: 52.366017,
  longitude: 4.893490,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export { isInAmsterdam, amsterdamRegion };
