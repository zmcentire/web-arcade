import React, {Component} from 'react';
import Axios from 'axios';
const {Provider, Consumer} = React.createContext()

class ScoreProvider extends Component {
    constructor(props){
        super(props);

        this.state = {
            score: "",
            user: {},
            token: "",
        }
    }

    getScore = () => {
        Axios.get('http://localhost:8080/score').then(res => {
            this.setState({
                score: res.data
            })
        })
    }

    createScore = (newScore) => {
        Axios.post("http://localhost:8080/score").then(res => {
            this.setState(prev => {
                return {
                    score: [...prev.score, res.data]
                }
            })
        })
    }

    signup = (userInfo) => {
        return Axios.post("/auth/signup", userInfo)
        .then(response => {
            const {user, token} = response.data
            this.setState({
                user,
                token
            });
            return response
        })
    }

    render() {
        return (
            <Provider value = {{
                ...this.state,
                getScore: this.getScore,
                createScore: this.createScore,
                signup: this.signup,
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default ScoreProvider

export function withScore (Comp){
    return props => <Consumer>
                        {value => <Comp {...value}{...Comp}/>}
                    </Consumer>
}