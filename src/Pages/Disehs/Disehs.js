import React from 'react';
import { Container } from 'react-bootstrap';

const Disehs = () => {
    return (
        <Container className='my-3'>
            <h2 className='display-5 fw-bold mt-5'>More then 20,000 Dishes <br /> To Order</h2>
            <p className='fw-semibold text-secondary'>Welcome to biggest Network of Food Ordering & Delivery</p>
            <div class="row row-cols-1 row-cols-md-6 g-4 " >
                <div class="col">
                    <div class="card bg-light">
                        <img   src="https://i.ibb.co/HnD2X65/image.png" class="card-img-top p-3  w-auto center" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">SUSHI</h5>
                            
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-light :hover">
                        <img   src="https://i.ibb.co/qj4kZHy/image.png" class="card-img-top p-3  w-auto center" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">PIZZA</h5>
                            
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-light">
                        <img   src="https://i.ibb.co/w0Ddm10/image.png" class="card-img-top p-3  w-auto center" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">BURGERS</h5>
                            
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-light">
                        <img   src="https://i.ibb.co/D14r2xP/image.png" class="card-img-top p-3  w-auto center" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">DESSERTS</h5>
                            
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-light">
                        <img   src="https://i.ibb.co/St8k2Dd/image.png" class="card-img-top p-3  w-auto center" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">SALAD</h5>
                            
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-light">
                        <img   src="https://i.ibb.co/bKD100B/image.png" class="card-img-top p-3  w-auto center" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">PASTA</h5>
                            
                        </div>
                    </div>
                </div>
                
                
            </div>

        </Container>

    );
};

export default Disehs;