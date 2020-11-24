import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {showAll, editPc} from '../../store/actions/actions';
import 'react-native-gesture-handler';

class editScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      make: '',
      model: '',
    };
  }
 /* handleSubmit = (id) => {
    this.props.editPc(this.state.make, this.state.model,id);
    this.setState({make: '', model: ''});
    console.log(id);
  };*/
  makeChange(make) {
    this.setState({make});
  }
  modelChange(model) {
    this.setState({model});
  }
  componentDidMount() {
    this.props.showAll();
  }
  render() {
    const {pcs} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Edit PC</Text>
        <ScrollView style={styles.pcsContainer}>
          {pcs.pcs.map((pc, index) => (
            <View style={styles.pcs} key={index}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.make}>
                  {pc.make} {pc.model}
                </Text>
              </View>
              <View style={styles.editButton}>
                <TouchableOpacity onPress={() => this.props.editPc(this.state.make, this.state.model,pc.id)}>
                  <View style={styles.addButtonContainer}>
                    <Text style={styles.addButton}>EDIT</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={this.state.make}
            placeholder="Make"
            onChangeText={(text) => this.makeChange(text)}
          />
          <TextInput
            style={styles.input}
            value={this.state.model}
            placeholder="Model"
            onChangeText={(text) => this.modelChange(text)}
          />
        </View>
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
  },
  pcs: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  make: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  model: {
    fontSize: 22,
    color: '#999',
    fontWeight: 'bold',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  editButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  addButton: {
    fontSize: 24,
    lineHeight: 24,
  },
  addButtonContainer: {
    width: 100,
    height: 50,
    backgroundColor: 'tomato',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
const mapStateToProps = (state) => {
  return {
    pcs: state.pcs,
  };
};
export default connect(mapStateToProps, {showAll, editPc})(editScreen);