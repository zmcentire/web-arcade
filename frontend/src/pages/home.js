import React from 'react';
import {Card, CardImg, CardTitle, CardText, CardImgOverlay, CardDeck} from 'reactstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <CardDeck>
                <MDBCard style = {{ width: "22rem" }}>
                    <MDBCardImage classname = "img-fluid" src="https://psmag.com/.image/t_share/MTI3NTgyMjIwOTYwNjM1MzU4/flappy-bird.jpg" waves />
                    <MDBCardBody>
                        <MDBCardTitle>FlappyBird</MDBCardTitle>
                        <MDBBtn href = 'http://127.0.0.1:5502/frontend/src/games/flappybird/Original-Flappy-bird-JavaScript/index.html'>Play</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard style = {{ width: "22rem"}}>
                    <MDBCardImage classname = "img-fluid" src="https://tse2.mm.bing.net/th?id=OIP.0inhZbp_Pjj6xQlacQI_mgHaEU&pid=Api&P=0&w=278&h=163" waves />
                    <MDBCardBody>
                        <MDBCardTitle>Snake</MDBCardTitle>
                        <MDBBtn href = '/snake'>Play</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard style = {{width: "22rem"}}>
                    <MDBCardImage className = "img-fluid" src="https://cdn1us.denofgeek.com/sites/denofgeekus/files/2018/08/space-invaders.png" waves />
                    <MDBCardTitle>Space Invaders</MDBCardTitle>
                    <MDBBtn href = 'http://127.0.0.1:5502/frontend/src/games/spaceinvaders/spaceinvaders/index.html'>Play</MDBBtn>
                </MDBCard>
            </CardDeck>
        </div>
    )
}

export default Home