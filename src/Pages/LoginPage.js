import React,{ Component } from 'react';
import {View, 
    Text, 
    TextInput, 
    ImageBackground,
     Dimensions, 
     Image,
     TouchableOpacity
    
    } from 'react-native';
import { Actions } from 'react-native-router-flux';


const { width, height } = Dimensions.get('window');
export default class LoginPage extends Component {
    render() {
        return(
            <ImageBackground 
            source={require('../img/loginBackground.png')}
            style={{ width,
                     height,
                     alignItems: 'center',
                     justifyContent: 'flex-start' }}
            >
        
                <View style={{margin:1,justifyContent:'flex-start', alignItems:'center'}}>
              <View style={{marginTop:100}}>
                <Image source={require('../img/logo.png')} />
                </View>
               
                <View style={styles.sublok}>
                <View style={{ height:height*0.054,
             width:width*0.64,flexDirection:'row',

             
             }}>
                <Image style={{marginTop:10}} source={require('../img/usericon.png')} />
                <TextInput style={{height:height*0.054, width:width*0.64,margin:5,marginLeft:10}}
                placeholder="Username"
                
                />
                </View>
                </View>
                <View style={styles.sublok2}>
                <View style={{ height:height*0.054,
             width:width*0.64,flexDirection:'row',

             
             }}>
                <Image style={{marginTop:10}} source={require('../img/passwordicon.png')} />
                <TextInput  secureTextEntry
                style={{height:height*0.054, width:width*0.64,margin:5,marginLeft:10}}
                placeholder="Password"
                
                />
                </View>
</View>
<TouchableOpacity onPress={()=> Actions.Search() }>
<View style={styles.sublok3}> 

<Text style={{textAlign:'center',color:'white',fontWeight:'200'}}> LOGIN </Text>

</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=> Actions.Search() }>
<View style={styles.sublok4}> 

<Text style={{textAlign:'center',color:'white',fontWeight:'200'}}> REGISTER </Text>

</View>
</TouchableOpacity>
                </View>
                  
         
           </ImageBackground>
        );
    }
    
}
const styles = {
    sublok:{
        
            height:height*0.064,
             width:width*0.74,
             backgroundColor:'white',
             borderRadius:10,
             borderWidth:0.5,
             borderColor:'#909090',
             marginTop:60,
             justifyContent:'center',
             alignItems:'center'
       
    },
    sublok2:{
        
        height:height*0.064,
        width:width*0.74,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth:0.5,
        borderColor:'#909090',
        marginTop:40,
        justifyContent:'center',
        alignItems:'center'
   
},
sublok3:{
        
    height:height*0.064,
    width:width*0.74,
    backgroundColor:'#4BCFFA',
    borderRadius:10,
    borderWidth:0.5,
    borderColor:'#FFFFFF',
    marginTop:40,
    justifyContent:'center',
    alignItems:'center'

},
sublok4:{
        
    height:height*0.064,
    width:width*0.74,
    backgroundColor:'#808E9B',
    borderRadius:10,
    borderWidth:0.5,
    borderColor:'#FFFFFF',
    marginTop:30,
    justifyContent:'center',
    alignItems:'center'

}
}