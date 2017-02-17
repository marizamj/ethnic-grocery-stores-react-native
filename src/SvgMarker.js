import React, { Component } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Polygon } from 'react-native-svg';

export default class SvgMarker extends Component {
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
