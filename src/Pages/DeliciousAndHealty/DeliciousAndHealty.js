import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const DeliciousAndHealty = () => {
    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <img width='100%' src="https://i.ibb.co/k6YnM3w/image.png" alt="" />
                </Col>
                <Col sm={6}>
                    <div className='text-start'>
                        <h1 className='display-4 fw-bold my-5'>Delicious and Healty food for your body</h1>
                        <p className='fs-6 text-secondary'>Our company is engaged in the delivery of healthy and tasty food around the city. Spcial cooking and delivery technologies allow youw you buy fresh and healty food.</p>
                        {/* .. */}
                        <div class="row">
                            <div class="col-sm-6 my-2">
                                <div class="card  border-0">
                                    <div class="card-body">
                                        <h5 class="card-title fs-6">
                                            <svg width="15%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                                <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
                                            </svg>
                                            Order a nutritionist Consultation</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 my-2">
                                <div class="card border-0">
                                    <div class="card-body">
                                        <h5 class="card-title fs-6">
                                            <svg width="15%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
                                            </svg>

                                            Order helthy food express delivery</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 my-2">
                                <div class="card  border-0">
                                    <div class="card-body">
                                        <h5 class="card-title fs-6">
                                            <svg width="15%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
                                            </svg>
                                            Tariff plans on an ongoing basis </h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 my-2">
                                <div class="card  border-0">
                                    <div class="card-body">
                                        <h5 class="card-title fs-6">
                                            <svg width="15%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
                                            </svg>
                                            Offers for special clients</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Button className='fw-bold'>CHOOSE A DIET</Button> <Button className='bg-white text-dark fw-bold'>WHAT'S NEWS?</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DeliciousAndHealty;