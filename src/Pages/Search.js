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
import RNGooglePlaces from 'react-native-google-places';

const { width, height } = Dimensions.get('window');
export default class Search extends Component {
    
    state = {
        flightNumber:'',
        AirportAdress:'Airport Addres',
        yourLongLat: [],
    }
    openSearchModal() {
        RNGooglePlaces.openAutocompleteModal()
        .then((place) => {
            console.log(place);
            this.setState({ AirportAdress: place.name,
                yourLongLat: [place.latitude, place.longitude]
            })
            
       
        })
        .catch(error => console.log(error.message)); 
      }
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
                <Image style={{marginTop:5} } source={require('../img/flightnumber.png')} />
                <TextInput style={{height:height*0.054, width:width*0.64,margin:5,marginLeft:10}}
                placeholder="Flight Number"
                value={this.state.flightNumber}
                onChangeText={(text)=>{
              this.setState({flightNumber:text})

                }}

                
                />
                </View>
              
                </View>
               
                <View style={styles.sublok2}>
                <TouchableOpacity onPress={()=>this.openSearchModal()}>
                <View style={{ height:height*0.054,
             width:width*0.64,flexDirection:'row',

             
             }}>
                <Image style={{marginTop:5}} source={require('../img/adress.png')} />
              <Text style={{height:height*0.054, width:width*0.64,marginTop:10,marginLeft:10}}> {this.state.AirportAdress}</Text>
                </View>
                    </TouchableOpacity>
</View>
<TouchableOpacity onPress={()=> Actions.Result({ 
                data: {
                    yourLongLat: this.state.yourLongLat,
                    flightNumber: this.state.flightNumber,
                    AirportAdress: this.state.AirportAdress
                }
            }) }>
<View style={styles.sublok3}> 

<Text style={{textAlign:'center',color:'white',fontWeight:'200'}}> SEND </Text>

</View>
</TouchableOpacity>

                </View>
                  
         <View style={{marginTop:90,height:height*0.079,width:width*1,backgroundColor:'#FFFFFF',justifyContent:'space-between',flexDirection:'row'}}>
         <Image style={{margin:20}} source={require('../img/searchi.png')} />
         <TouchableOpacity onPress={()=>Actions.Planner()}>
         <Image style={{margin:20}} source={require('../img/sendi.png')} />
         </TouchableOpacity>
         <TouchableOpacity>
         <Image style={{margin:20}} source={require('../img/timei.png')} />
         </TouchableOpacity>
         <TouchableOpacity>
         <Image style={{margin:20}} source={require('../img/profilei.png')} />
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