import React from 'react';

class snake extends React.Component{
    render(){

        const box = 32

        // create the snake

        let snake = [];

        snake[0] = {
            x : 9 * box,
            y : 10 * box
        };

        let d;

        return(
            <div>
                {snake}
            </div>
        )
    }
}

export default snake


export let d;