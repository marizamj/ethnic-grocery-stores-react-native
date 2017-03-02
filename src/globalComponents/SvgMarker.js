import React, { Component } from 'react';
import { View, Animated, Easing } from 'react-native';
import Svg, { Circle, Polygon } from 'react-native-svg';

class SvgMarker extends Component {
  render() {
    const { baseColor, additionalColor, scale } = this.props;

    return <View style={{ bottom: 75 * scale }}>
      <Svg height={150 * scale} width={100 * scale}>
        <Circle cx="50" cy="50" r="30" strokeWidth="35" scale={scale}
          stroke={baseColor} fill='transparent' />

        <Polygon points="10,75 90,75 50,150" fill={baseColor} scale={scale} />

        <Circle cx="50" cy="50" r="21"
        stroke={additionalColor} strokeWidth="15" fill="transparent" scale={scale} />
      </Svg>
    </View>
  }

}

class AnimatedUserLocation extends Component {
  animatedValue = new Animated.Value(0);

  componentDidMount() {
    this.animate()
  }

  animate = () => {
    this.animatedValue.setValue(0);

    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        delay: 2200,
        duration: 800,
        easing: Easing.quad
      }
    ).start(() => this.animate());
  }

  render() {
    const { baseColor, additionalColor, rotate } = this.props;

    const scale = this.animatedValue.interpolate({
      inputRange: [ 0, 0.5, 1 ],
      outputRange: [ 1, 1.5, 1 ]
    });

    return <Animated.View style={{ bottom: 15, transform: [{ scale }] }}>
      <Svg height="30" width="30">
      {
        rotate >= 0 ?
          <Polygon points="7,10 23,10 15,0" fill={baseColor} rotate={rotate} origin="15, 15" />
          : null
      }
        <Circle cx="15" cy="15" r="10" fill={additionalColor} />
        <Circle cx="15" cy="15" r="5" fill={baseColor} />
      </Svg>
    </Animated.View>
  }
}

export { SvgMarker, AnimatedUserLocation };
