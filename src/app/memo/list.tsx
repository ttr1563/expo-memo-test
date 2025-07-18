import React from 'react'
import {View, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'

const Index = (): React.JSX.Element => {
  return (
    <View style={styles.container}>

      <Header />

      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>

      <CircleButton>
        <Feather name="plus" size={40} color="#FFFFFF" />
      </CircleButton>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
})

export default Index