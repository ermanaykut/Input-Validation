import { Dimensions, StyleSheet, } from 'react-native'
import { colors } from '../../utils/colors'

const styles = StyleSheet.create({

    container:{
        position:'absolute',
        zIndex:10,
        backgroundColor: colors.lightgrey,
        opacity:0.5,
        justifyContent:'center',
        flex:1,
    },

    loader:{
       height:70,
       backgroundColor: colors.white,
       marginHorizontal:50,
       borderRadius:5,
       flexDirection:'row',
       alignItems:'center',
       paddingHorizontal:20,
    },

    loadertext:{
        marginRight:10,
        fontSize:16,


    },



})

export default styles;