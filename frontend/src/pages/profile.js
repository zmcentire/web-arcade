import React, { Component } from 'react';
import {withScore} from '../provider/scoreProvider'

class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount(){
        this.props.getScore()
    }

    render(){
        return(
            <div></div>
        )
    }
}


export default withScore(Profile)