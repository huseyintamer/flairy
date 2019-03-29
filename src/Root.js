import React, { Component } from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import Menu from './Pages/Menu';
import LoginPage from './Pages/LoginPage';
import Search from './Pages/Search';
import Result from './Pages/Result';
import Planner from './Pages/Planner';
export default class Root extends Component {   

    render() {
        return(
         
               <Router>
                  
                   <Drawer
                   key='Menu'
                   contentComponent= {Menu}
                   drawerImage={require('./img/menu.png')}
                   >

                     <Scene
                   key='Root'
                   > 
                 <Scene
                       key='LoginPage'
                       component={LoginPage}
                       navTransparent
                       initial
                       />
                         <Scene
                       key='Search'
                       component={Search}
                       navTransparent
                      
                       />
                                 <Scene
                       key='Result'
                       component={Result}
                       navTransparent
                    
                       />
                          <Scene
                       key='Planner'
                       component={Planner}
                       navTransparent
                  
                       />
                      
                       </Scene>

                       

                    </Drawer>
               </Router>
              
        );
    }
}

