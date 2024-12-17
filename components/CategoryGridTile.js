import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'

const CategoryGridTile = ({title,color}) => {
  return (
    <View style={styles.girdItem}>
      <Pressable android_ripple={{color:'#ccc'}}
       style={({pressed})=> pressed ? [styles.buttonRipple,styles.button]: styles.button}>
        <View style={[styles.innerContainer,{backgroundColor:color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  girdItem:{
    flex:1,
    margin:16,
    height:150,
    borderRadius:15,
    elevation:4,
    backgroundColor:'white',
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.25,
    shadowRadius:8,
    overflow:Platform.OS==="android" && 'hidden'
  },
  button:{
    flex:1,
  },
  buttonRipple:{
    opacity:0.5
  },
  innerContainer:{
    flex:1,
    padding:16,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontWeight:'bold',
    fontSize:18
  }
})