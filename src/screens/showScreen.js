  
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView,Animated,Button} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {showAll} from '../../store/actions/actions';
import 'react-native-gesture-handler';
import {pcReducer} from '../../store/reducers/pcReducer';

class showScreen extends Component {
constructor(){
  super()
  this.animated= new Animated.Value(0);
}

animate(){
  this.animated.setValue(0);
  Animated.timing(this.animated,{
    toValue:1,
    dutation:5000,
    useNativeDriver: true,
  }).start();
}
  componentDidMount() {
    this.props.showAll();
  }
  render() {
    const opacity = this.animated.interpolate({
      inputRange:[0,1],
      outputRange:[0,1]
    });
    const translateX = this.animated.interpolate({
      inputRange:[0,1],
      outputRange:[-500,1]
    });
    const {pcs} = this.props;
    const transform = [{translateX}];
    return (
      <View style={styles.container}>
        <Text style={[styles.title]}>Computers List</Text>
        <Animated.ScrollView style={[styles.pcsContainer,{transform,opacity}]}>
          {pcs.pcs.map((pc, index) => (
            <View style={styles.pcs} key={index}>
              <Text style={styles.make}>
                {pc.make} {pc.model}
              </Text>
            </View>
          ))}
        </Animated.ScrollView>
        <Button title = "Show list" onPress={()=> this.animate()}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pcsContainer: {
    borderTopWidth: 3,
    borderTopColor: '#ddd',
    flex: 1,
  },
  pcs: {
    padding: 20,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  make: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  model: {
    fontSize: 14,
    color: '#999',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    pcs: state.pcs,
  };
};
export default connect(mapStateToProps, {showAll})(showScreen);