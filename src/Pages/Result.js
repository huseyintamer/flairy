import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const { width, height } = Dimensions.get('window');

export default class Result extends Component {
    
    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          
    }
    componentWillMount() {
        console.log(this.props.data);

        const { yourLongLat } = this.props.data;


        this.setState({
            region: {
                latitude: yourLongLat[0],
                longitude: yourLongLat[1],
                latitudeDelta: 1,
                longitudeDelta: 1,
            }
         
        })
        
    }
    
    
    render() {
        const { yourLongLat } = this.props.data;

    const origin = {latitude: yourLongLat[0], longitude: yourLongLat[1]};

    const destination = {latitude: yourLongLat[0], longitude: yourLongLat[1]};

    const GOOGLE_MAPS_APIKEY = 'AIzaSyAkz2_WcvzWeZ1BS5g_VPl4lU7f-YjHkDk';

        return(
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }} >
            <MapView
            style={{ ...StyleSheet.absoluteFillObject }}
            region={this.state.region}
            showsUserLocation
            >
            <Marker 
            coordinate={origin}
            />
            <Marker 
            coordinate={destination} />

            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={6}
                strokeColor="#05B3FD"
            />
            </MapView>

           

        </View>
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