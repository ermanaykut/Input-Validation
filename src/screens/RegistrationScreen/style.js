import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor: colors.babypink
    },
    contentContainer:{
        paddingTop:50,
        paddingHorizontal:20,
    },
    text:{
        fontSize:40,
        fontWeight:'bold',
        color: colors.white,
        marginHorizontal:5,
        shadowOpacity:0.7,
        shadowColor:colors.grey,
        alignSelf:'center'

    },
    text2:{
        fontSize:18,
        fontStyle:'italic',
        marginVertical:10,
        color: colors.grey,
        marginHorizontal:5,


    },
    inputContainer:{
        marginVertical:20,
    },

    buttonStyle:{
        marginTop:20,

    },
    text3:{
        color: colors.dodgerblue,
        textAlign:'center',
        fontSize:16,
        fontWeight:'500',
        marginTop:5,

    },
    text4:{
        color: colors.dodgerblue,
        fontWeight:'bold',

    },
  


})

export default styles;