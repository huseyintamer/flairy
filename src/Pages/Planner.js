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
export default class Search extends Component {
    
   
    render() {
        return(
            <View 
          
            style={{ width,
                     height,
                     alignItems: 'center',
                     justifyContent: 'flex-start' }}  >
                     <View style={{justifyContent:'center',alignItems:'center',width:width*1,height:height*0.09,backgroundColor:'#FFFFFF',borderWidth:0.5,borderColor:'#909090'}}>
                        <Text style={{color:'#4BCFFA',fontWeight:'400',fontSize:15}}>FLIGHT PLANS</Text>
                     </View>
                     <View style={{alignItems:'center',justifyContent:'center',width:width*1,height:height*0.26,backgroundColor:'#4BCFFA'}}>
                     <Text style={{color:'#FFFFFF',fontWeight:'400',fontSize:15}}>Tomorrow</Text>
                     <View style={{justifyContent:'center',alignItems:'center',marginTop:15,borderRadius:20,width:width*0.93,height:height*0.14,backgroundColor:'#FFFFFF'}}>
                     <Image style={{marginTop:10,marginRight:15}} source={require('../img/group1.png')} />
                    </View>
                     </View>
                     <View style={{alignItems:'center',justifyContent:'center',width:width*1,height:height*0.26}}>
                     <Text style={{color:'#808E9B',fontWeight:'400',fontSize:15}}>12.04.2019</Text>
                     <View style={{justifyContent:'center',alignItems:'center',marginTop:15,borderRadius:20,width:width*0.93,height:height*0.14,backgroundColor:'#FFFFFF'}}>
                     <Image style={{marginTop:10,marginRight:15}} source={require('../img/group2.png')} />
                    </View>
                     </View>
                     <View style={{alignItems:'center',justifyContent:'center',width:width*1,height:height*0.26}}>
                     <Text style={{color:'#808E9B',fontWeight:'400',fontSize:15}}>25.09.2019</Text>
                     <View style={{justifyContent:'center',alignItems:'center',marginTop:15,borderRadius:20,width:width*0.93,height:height*0.14,backgroundColor:'#FFFFFF'}}>
                     <Image style={{marginTop:10,marginRight:15}} source={require('../img/group3.png')} />
                     
                     </View>
          
                    </View>
                    
        
                    <View style={{marginTop:15,height:height*0.079,width:width*1,backgroundColor:'#FFFFFF',justifyContent:'space-between',flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>Actions.Search()}>
         <Image style={{margin:20}} source={require('../img/searchni.png')} />
         </TouchableOpacity>
         <TouchableOpacity>
         <Image style={{margin:20}} source={require('../img/sendni.png')} />
         </TouchableOpacity>
         <TouchableOpacity>
         <Image style={{margin:20}} source={require('../img/timei.png')} />
         </TouchableOpacity>
         <TouchableOpacity>
         <Image style={{margin:20}} source={require('../img/profilei.png')} />
         </TouchableOpacity>
         </View>
           </View>
           
        );
    }
    
}
