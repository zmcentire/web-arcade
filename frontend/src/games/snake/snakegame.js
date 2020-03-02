import React from 'react';
import ReactDOM from 'react-dom'
import canvas from './snakecanvas'

import './Snake-JavaScript/img/ground.png'
import './Snake-JavaScript/img/food.png'

class SnakeGame extends React.Component{
    constructor(props) {
        super();
        
        this.snake = React.createRef();

    }

    componentDidMount(){
        const cvs = this.refs.snake
        const ctx = cvs.getContext("2d")

        const box = 32

        const ground = new Image();
        ground.src = "img/ground.png";

        const foodImg = new Image();
        foodImg.src = "img/food.png";

        let food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }

        let score = 0;

        let snake = [];

        snake[0] = {
            x : 9 * box,
            y : 10 * box
        };

        let d;

        document.addEventListener("keydown", direction);

        function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
    }
}

        function draw(){

            ground.onload = () => {
                ctx.drawImage(ground,0,0);
            }

            for(let i = 0; i < snake.length; i++){
                ctx.fillStyle = (i == 0)? "green" : "white";
                ctx.fillRect(snake[i].x,snake[i].y,box,box);

                ctx.strokeStyle = "red";
                ctx.strokeRect(snake[i].x,snake[i].y,box,box);
            }

            foodImg.onload =() => {
                ctx.drawImage(foodImg, food.x, food.y);
            }

            // old head position
            let snakeX = snake[0].x;
            let snakeY = snake[0].y;

            // which direction
            if(d == "LEFT") snakeX -= box;
            if(d == "UP") snakeY -= box;
            if(d == "RIGHT") snakeX += box;
            if(d == "DOWN") snakeY += box;

            // if the snake eats the food
            if(snakeX == food.x && snake.Y == food.y){
                score++;
                food = {
                    x : Math.floor(Math.random()*17+1) * box,
                    y : Math.floor(Math.random()*15+3) * box
                }

            }else{
                // remove the tail
                snake.pop();
            }

            // add new Head

            let newHead = {
                x : snakeX,
                y : snakeY
            }

            function collision(head,array){
                for(let i = 0; i < array.length; i++){
                    if(head.x == array[i].x && head.y == array[i].y){
                        return true;
                    }
                }
                return false;
            }

            // game over

            if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead, snake)){
                clearInterval(game);
            }

            snake.unshift(newHead);

            ctx.fillStyle = "white";
            ctx.font = "45px Changa one";
            ctx.fillText(score, 2*box,1.6*box);
        }

        let game = setInterval(draw, 100);
    }


    // handleKeydown = event => {
    //     let key = event.keyCode;
    //     if(key == 37 && d != 'RIGHT'){
    //         d = "LEFT";
    //     }else if(key == 38 && d != "DOWN"){
    //         d = "UP";
    //     }else if(key == 39 && d != "LEFT"){
    //         d = "RIGHT";
    //     }else if(key == 40 && d != "UP"){
    //         d = "DOWN";
    //     }
    // }

    // handleCollision = (head, array) => {
    //     for(let i = 0; i < array.length; i++){
    //         if(head.x == array[i].x && head.y == array[i].y){
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    render(){
        
        // const cvs = React.cloneElement('canvas', { id: 'snake'})
        // console.log(cvs)
        // const ctx = cvs.context

        // const box = 32
        

        // // create the food

        // let food = {
        //     x : Math.floor(Math.random()*17+1) * box,
        //     y : Math.floor(Math.random()*15+3) * box
        // }

        // // create the score 

        // let score = 0;

        // function draw(){

        //     this.context.drawImage(ground,0,0);

        //     for(let i = 0; i < snake.length; i++){
        //         ctx.fillStyle = (i == 0)? "green" : "white";
        //         ctx.fillRect(snake[i].x,snake[i].y,box,box);

        //         ctx.strokeStyle = "red";
        //         ctx.strokeRect(snake[i].x,snake[i].y,box,box);
        //     }

        //     ctx.drawImage(foodImg, food.x, food.y);

        //     // old head position
        //     let snakeX = snake[0].x;
        //     let snakeY = snake[0].y;

        //     // which direction
        //     if(d == "LEFT") snakeX -= box;
        //     if(d == "UP") snakeY -= box;
        //     if(d == "RIGHT") snakeX += box;
        //     if(d == "DOWN") snakeY += box;

        //     // if the snake eats the food
        //     if(snakeX == food.x && snake.Y == food.y){
        //         score++;
        //         eat.play();
        //         food = {
        //             x : Math.floor(Math.random()*17+1) * box,
        //             y : Math.floor(Math.random()*15+3) * box
        //         }

        //     }else{
        //         // remove the tail
        //         snake.pop();
        //     }

        //     // add new Head

        //     let newHead = {
        //         x : snakeX,
        //         y : snakeY
        //     }

        //     function collision(head,array){
        //         for(let i = 0; i < array.length; i++){
        //             if(head.x == array[i].x && head.y == array[i].y){
        //                 return true;
        //             }
        //         }
        //         return false;
        //     }

        //     // game over

        //     if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead, snake)){
        //         clearInterval(game);
        //         dead.play();
        //     }

        //     snake.unshift(newHead);

        //     ctx.fillStyle = "white";
        //     ctx.font = "45px Changa one";
        //     ctx.fillText(score, 2*box,1.6*box);
        // }

        // let game = setInterval(draw, 100);

        return(
            <div>
                <canvas ref="snake" width={608} height={608}></canvas>
                <img src="./Snake-JavaScript/img/ground.png" className="hidden"/>
            </div>
        )

    }
}

export default SnakeGame