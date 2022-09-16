import React from 'react';
import { Container } from 'react-bootstrap';
import Disehs from '../Disehs/Disehs';
import HowtoOrder from '../Disehs/HowtoOrder/HowtoOrder';
import HeroSection from '../HeroSection/HeroSection';
import Header from '../NavBar/Header';

const Home = () => {
    return (
        <Container>
            <Header />
            <HeroSection />
            <Disehs />
            <HowtoOrder />
        </Container>
    );
};

export default Home;