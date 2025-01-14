import { ScrollView, StyleSheet, Text, View, ImageSourcePropType, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.image} source={imageUrl}></Image>
    </View>
  );
};

const App: React.FC = () => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    const diceImages = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    setDiceImage(diceImages[randomIndex]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Dice imageUrl={diceImage}></Dice>
        <TouchableOpacity onPress={rollDice}>
          <Text style={styles.button}>Roll Dice</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    fontSize: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 30,
    color: '#F2A365',
    borderColor: '#30475E',
    borderWidth: 5,
    borderRadius: 3,
    fontWeight: 'bold',
  },
});

export default App;