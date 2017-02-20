import { AlertIOS } from 'react-native';

const isInAmsterdam = position =>
  Math.abs(52.366017 - position.latitude) < 0.2 &&
  Math.abs(4.893490 - position.longitude) < 0.2;

const amsterdamRegion = {
  latitude: 52.366017,
  longitude: 4.893490,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

const checkPosition = (position, setRegion) => {
  if (!isInAmsterdam(position)) {
    setRegion(amsterdamRegion);

    AlertIOS.alert(
      'This app shows only stores located in Amsterdam',
      'We noticed that you are too far away, so we\'ll show you Amsterdam area and hope to see you around here soon :-)'
    );
    
  } else {
    setRegion({
      ...position,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05
    });
  }
};

export { isInAmsterdam, amsterdamRegion, checkPosition };
