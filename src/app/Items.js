import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import {w} from '../../constants';
import {ITEM} from '../routes';

export default class Items extends Component {
  renderItem = (item) => (
      <View key={item.id} style={styles.container2}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(ITEM, item)}>
          <View style={styles.sub}>
            <Image style={styles.cover} source={{uri: item.image}} />
          </View>
          <Text style={styles.h12}>{item.title}</Text>
        </TouchableOpacity>
      </View>
  );



  render() {
    const {data} = this.props.navigation.state.params;
    const {h1, container} = styles;
    return (
        <View style={{backgroundColor: '#fff'}}>
          <View style={styles.logoContainer}>
            <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://i.ibb.co/xG1HrcJ/logo.png'
                }}
            />
          </View>
          <ScrollView>
            <View style={container}>
              <View style={styles.container3}>{data.map((item) => this.renderItem(item))}</View>
            </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 40
  },
  logoContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  container3: {
    paddingTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    paddingBottom: 50,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    backgroundColor: '#cbd63330'
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    paddingTop: 20,
    textAlign: 'center',
    marginBottom: 30,
  },
  h2: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 20,
    padding: 15,
    color: 'grey',
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },

  h12: {
    alignSelf: 'center',
    textAlign: 'center',
    width: w / 2.4,
    fontSize: 18,
    fontFamily: 'AvenirNext-DemiBold',
    paddingTop: 10,
  },
  cover: {
    width: w / 2.4,
    height: w / 4.8,
    borderRadius: 10,
  },
  container2: {
    width: w / 2.4,
    paddingVertical: 10,
  },
  sub: {
    shadowRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
    elevation: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
