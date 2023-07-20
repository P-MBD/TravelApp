import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        margin:32,
    },
    mainImage:{
        width:'100%',
        height:height/2,
        flexDirection:'column',
        justifyContent:'space-between',
    },
    header:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    icon:{
        width: 36,
        height: 36,
        margin:16,
    },
    footer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'rgba(256, 256, 256, 0.35)',
        margin:16,
        paddingHorizontal:8,
    },
    miniImage:{
        width: 40,
        height: 40,
        margin:8,
        borderRadius:10,
        backgroundColor:'rgba(256, 256, 256, 0.35)',
    },
    moreImages:{
        color:'#fff',
        fontWeight: 'bold',
        fontSize:20,
         top:12,
         left: 10,
    },
    moreImagesContainer:{
        position:'absolute',
        backgroundColor:'rgb(0,0,0,0.38)',
        width:40,
        height:40,
        top:8,
        left: 4,
        justifyContent:'center',
        alignItems:'center'
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:40,
    },
    title:{
        color:'#000',
    },
    city:{
        fontSize:20,
        color:'#000',
        fontWeight:'400',
    },
    price:{
        color:'#000',
    }


});

export default styles;