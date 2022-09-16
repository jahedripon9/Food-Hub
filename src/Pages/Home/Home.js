import React from 'react';
import { Container } from 'react-bootstrap';
import Disehs from '../Disehs/Disehs';
import HowtoOrder from '../HowtoOrder/HowtoOrder';
import HeroSection from '../HeroSection/HeroSection';
import Header from '../NavBar/Header';
import DisehsAndDelivery from '../DisehsAndDelivery/DisehsAndDelivery';

const Home = () => {
    return (
        <Container>
            <Header />
            <HeroSection />
            <Disehs />
            <HowtoOrder />
            <DisehsAndDelivery />
        </Container>
    );
};

export default Home;