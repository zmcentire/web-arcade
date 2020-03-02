import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import {Switch, Route} from 'react-router-dom';

import Profile from './pages/profile';
// import FlappyBird from './gamepages/flappybird'
import SpaceInvaders from './gamepages/spaceinvaders';
import Snake from './gamepages/snake';



const App = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route  exact path="/" component={Home}/>
                <Route  exact path="/profile" component={Profile}/>
                {/* <Route exact path="/flappybird" component={FlappyBird}/> */}
                <Route  exact path="/spaceinvaders" component={SpaceInvaders}/>
                <Route  exact path="/snake" component={Snake}/>
            </Switch>
        </div>
    )
}

export default App 