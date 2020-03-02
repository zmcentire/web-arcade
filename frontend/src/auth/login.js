import React, {Component} from 'react';
import {withScore} from '../provider/scoreProvider';

class LoginForm extends Component {
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
        this.props.login(this.state)
            .then(() => this.props.history.push("/score"))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>
                    <input type="text"
                            onChange={this.handleChange}
                            value={this.state.username}
                            name="username"
                            placeholder="username"/>
                    <input
                        onChange={this.handleSubmit}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="password"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default withScore(LoginForm)