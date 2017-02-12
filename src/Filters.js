import React, { Component } from 'react';
import { PickerIOS, StyleSheet, View, Text } from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';

export default class Filters extends Component {
  state = {
    selectedFilter: this.props.filter
  };

  handleValueChange = value => {
    this.setState({ selectedFilter: value });
  }

  render() {
    const styles = StyleSheet.create(this.props.styles);

     return <View>
        <View style={styles.filtersHeader}>
          <Text style={styles.filtersHeaderBtn}
            onPress={ () => this.props.onCloseFilter() }>Cancel</Text>
          <Text style={styles.filtersHeaderBtn}
            onPress={ () =>
              this.props.onChangeFilter(this.state.selectedFilter)
            }>Done</Text>
        </View>
        
        <BlurView blurType="light">
          <PickerIOS selectedValue={this.state.selectedFilter}
            onValueChange={this.handleValueChange}>
            <PickerIOS.Item label='All stores' value='All stores'
               style={styles.filtersPickerItem} />
          {
            this.props.storeTypes.map(type =>
              <PickerIOS.Item key={type.id} label={type.name}
                value={type.name} itemStyle={styles.filtersPickerItem} />)
          }
          </PickerIOS>
        </BlurView>
     </View>
  }
}
