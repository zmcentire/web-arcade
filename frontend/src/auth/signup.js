import React, {Component} from 'react';
import {withScore} from '../provider/scoreProvider'

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => this.props.history.push("/score"))
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>
                    <input type="text" 
                            name="username"
                            placeholder="Username"
                            value={this.state.username}/>
                    <input
                        onChange={this.handleSubmit}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="Password"/>
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }
}

export default withScore(Signup)