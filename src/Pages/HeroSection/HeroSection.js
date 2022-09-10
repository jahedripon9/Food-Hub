import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const HeroSection = () => {
    return (
        <div>
            <Container>
                <Row >
                    <Col className='text-start' xs={12} md={5}>
                        <h1 className='display-4 fw-bolder text-sm-start my-5'>We Provide <br /> Delivery Within <br /> 30 Min</h1>

                        <p className='text-sm-start text-mute'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a et reiciendis veritatis eum corrupti rerum explicabo minus, nihil magnam suscipit sapiente facere? Praesentium, perferendis.</p>
                        <input type="text" className='rounded-5 p-2 px-4' placeholder='Zip Code' name="Zip Code" id=""></input>
                        <Button className='rounded-5 fw-semibold p-2 px-4'>Search</Button>
                    </Col>
                    <Col xs={12} md={7}>
                    <img height='450px' width='100%'  className='mt-2' src="https://i.ibb.co/JyWd1h6/5227.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;