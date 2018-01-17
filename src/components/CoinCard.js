import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from './../Utils/CoinIcons';

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {
  return (
    <View style={container}>
      <Image
        style={image}
        source={ {uri: images[symbol]} }
      />
      <View>
        <View style={[row, row1]}>
          <Text style={bold}>{symbol}</Text>
          <Text style={separator}>|</Text>
          <Text>{coin_name}</Text>
          <Text style={[price, bold]}>{price_usd} $</Text>
        </View>
        <View style={row}>
          <Text>24h: <Text style={percent_change_24h < 0 ? changeMinus : changePlus}>{percent_change_24h}%</Text></Text>
          <Text style={price}>7d: <Text style={percent_change_7d < 0 ? changeMinus : changePlus}>{percent_change_7d}%</Text></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    borderStyle: 'solid',
    padding: 20
  },
  row: {
    marginLeft: 'auto',
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    width: '90%'
  },
  row1: {
    marginBottom: 20
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 15
  },
  separator: {
    marginRight: 10,
    marginLeft: 10
  },
  price: {
    marginLeft: 'auto',
    marginRight: 20
  },
  bold: {
    fontWeight: 'bold'
  },
  changeMinus: {
    fontWeight: 'bold',
    color: '#ff471a'
  },
  changePlus: {
    fontWeight: 'bold',
    color: '#00b300'
  }
});

const { container, row, row1, image, separator, price, changeMinus, changePlus, bold } = styles;

export default CoinCard;
