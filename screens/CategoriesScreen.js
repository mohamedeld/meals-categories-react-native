import { FlatList, StyleSheet, Text, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'


const CategoriesScreen = () => {
  return (
    <FlatList data={CATEGORIES} keyExtractor={(item)=> item?.id} 
      renderItem={({item})=> {
        return(
          <CategoryGridTile title={item?.title} color={item?.color}/>
        )
      }}
      />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})