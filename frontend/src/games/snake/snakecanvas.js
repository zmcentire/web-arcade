import React, {Component} from 'react';

export default class canvas extends Component{
    constructor(props) {
        super(props);
        this.snake = React.createRef();
        this.focusSnake = this.focusSnake.bind(this);
    }

    focusSnake() {
        this.snake.current.focus();
    }

    render(){
        return(
            <div>
                <canvas id="snake" ref={this.snake} width="608" height="608"></canvas>
            </div>
        )
    }
}