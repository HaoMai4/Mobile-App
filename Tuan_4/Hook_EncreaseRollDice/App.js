import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1

export default function App() {
  const [diceRolls, setDiceRolls] = useState([])

  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => {
          if (diceRolls.length === 
            0) {
            setDiceRolls([randomDiceRoll()])
          } else {
            const lastRoll = diceRolls[diceRolls.length - 1]
            setDiceRolls([...diceRolls, lastRoll + 1])
          }
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  )
}