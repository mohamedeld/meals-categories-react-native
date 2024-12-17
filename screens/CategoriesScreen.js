import { FlatList, StyleSheet, Text, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = () => {
  return (
    <>
      {CATEGORIES?.map(item=>{
        return (
          <CategoryGridTile key={item?.id} title={item?.title} color={item?.color}/>
        )
      })}
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  
})