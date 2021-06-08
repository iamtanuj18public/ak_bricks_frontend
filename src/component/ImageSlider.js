import React from 'react';
import {Carousel} from "react-bootstrap";
import CAR1 from "../assets/CAR1.jpg"
import CAR2 from "../assets/CAR2.jpg"
import CAR3 from "../assets/CAR3.jpg"
import CAR4 from "../assets/CAR4.jpg"
import CAR5 from "../assets/CAR5.jpg"
import CAR6 from "../assets/CAR6.jpg"
import CAR7 from "../assets/CAR7.jpg"
import CAR8 from "../assets/CAR8.jpg"
import CAR9 from "../assets/CAR9.jpg"
import CAR10 from "../assets/CAR10.jpg"

export default function ImageSlider(props) {
 
   
    return (
        <Carousel style={{height:"100%"}} >
                        <Carousel.Item interval={1000}>
                <img
                className="img-fluid w-100"
                src={CAR1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>AK Bricks</h3>
                <p>Gallery</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className=" img-fluid w-100"
                src={CAR2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>AK Bricks</h3>
                <p>Gallery</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={CAR3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>AK Bricks</h3>
                <p>Gallery</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                <img
                className="img-fluid w-100"
                src={CAR4}
                alt="Forth slide"
                />
                <Carousel.Caption>
                <h3>AK Bricks</h3>
                <p>Gallery</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="img-fluid w-100"
                src={CAR5}
                alt="Fifth slide"
                />
                <Carousel.Caption>
                <h3>AK Bricks</h3>
                <p>Gallery</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="img-fluid w-100"
                src={CAR6}
                alt="Sixth slide"
                />
                <Carousel.Caption>
                <h3>AK Bricks</h3>
                <p>Gallery</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="img-fluid w-100"
                src={CAR7}
                alt="Seventh slide"
                />
                <Carousel.Caption>
                <h3>AK Bricks</h3>
                <p>Gallery</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="img-fluid w-100"
                src={CAR8}
                alt="Eight slide"
                />
                <Carousel.Caption>
                <h3>AK Bricks</h3>
                <p>Gallery</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="img-fluid w-100"
                src={CAR9}
                alt="Ninth slide"
                />
                <Carousel.Caption>
                <h3>AK Bricks</h3>
                <p>Gallery</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="img-fluid w-100"
                src={CAR10}
                alt="Tenth slide"
                />
                <Carousel.Caption>
                <h3>AK Bricks</h3>
                <p>Gallery</p>
                </Carousel.Caption>
            </Carousel.Item>
           
                    
        
       
        
      </Carousel>
    )
}
