import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        backgroundColor: colors.lemon,
        justifyContent:'center',
        paddingHorizontal:10,
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        color: colors.dodgerblue
    },
    text2:{
        color: colors.purple
    },
    button:{
        marginTop:30,
        paddingHorizontal:30,
    }


})

export default styles;