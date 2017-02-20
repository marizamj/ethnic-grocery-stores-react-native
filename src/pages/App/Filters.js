import React, { Component } from 'react';
import { PickerIOS, View, Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'react-native-blur';
import getStyles from '../../styles/styles';

export default class Filters extends Component {
  state = {
    selectedFilter: this.props.filter
  };

  handleValueChange = value => {
    this.setState({ selectedFilter: value });
  }

  render() {
    const { currentTheme } = this.props;
    const styles = getStyles(currentTheme);

     return <View>
        <View style={styles.filtersHeader}>
          <TouchableOpacity onPress={ () => this.props.onCloseFilter() }>
            <Text style={styles.filtersHeaderBtn}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => this.props.onChangeFilter(this.state.selectedFilter) }>
            <Text style={styles.filtersHeaderBtn}>Done</Text>
          </TouchableOpacity>
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
