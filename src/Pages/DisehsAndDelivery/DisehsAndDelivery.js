import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const DisehsAndDelivery = () => {
    return (
        <div>
            <Container className='my-3'>
                <h2 className='display-5 fw-bold mt-5'>Popular dishes with delivery</h2>
                <p className='fw-semibold text-secondary'>The most delicioius and healthy dishes from our chefs. You can order this meal separately or as part of a meal plan.</p>

                {/* Product Card  */}

                <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
                    <div class="col">
                        <div class="card">
                            <img src="https://i.ibb.co/7gQYKML/image.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Three-Meat Special Lasagna</h5>
                                <span className=''><span class="display-3">$25</span> <Button> Order now</Button></span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.ibb.co/L1YpBkx/image.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Three-Meat Special Lasagna</h5>
                                <span className=''><span class="display-3">$25</span> <Button> Order now</Button></span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.ibb.co/LnG51z8/image.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Three-Meat Special Lasagna</h5>
                                <span className=''><span class="display-3">$25</span> <Button> Order now</Button></span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.ibb.co/FXB6csj/image.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Veggie Tagliatelle Bolognese</h5>
                                <span className=''><span class="display-3">$20</span> <Button> Order now</Button></span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.ibb.co/FXB6csj/image.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Veggie Tagliatelle Bolognese</h5>
                                <span className=''><span class="display-3">$20</span> <Button> Order now</Button></span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.ibb.co/FXB6csj/image.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Veggie Tagliatelle Bolognese</h5>
                                <span className=''><span class="display-3">$20</span> <Button> Order now</Button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DisehsAndDelivery;