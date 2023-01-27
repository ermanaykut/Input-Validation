import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({

    container:{
        marginBottom: 20,
    },
    label:{
        marginVertical: 5,
        marginHorizontal:5,
        color: colors.grey
        
    },
    inputContainer: ([error, isFocused]) => ({
        height:55,
        backgroundColor: colors.lightgrey,
        flexDirection:'row',
        marginHorizontal:5,
        borderWidth:0.5,
        alignItems:'center',
        borderRadius:5,
        borderColor: error ? colors.red : isFocused ? colors.blue : colors.grey

    }),
    image:{
        marginLeft:5,
        marginRight:45,
        width:25,
        height:25,

    },
    image2:{
        marginLeft:5,
        marginRight:10,
        width:30,
        height:30,

    },
    inputText:{
        fontSize:15,
        color: colors.dodgerblue,
        marginLeft:10,
        flex:1,

    },
    errorText:{

        color: colors.red,
        fontSize:12,
        marginTop:7,
        marginLeft:5,

    },


})

export default styles;