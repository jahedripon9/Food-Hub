import React from 'react';
import { Container } from 'react-bootstrap';
import Disehs from '../Disehs/Disehs';
import HeroSection from '../HeroSection/HeroSection';
import Header from '../NavBar/Header';

const Home = () => {
    return (
        <Container>
            <Header />
            <HeroSection />
            <Disehs />
        </Container>
    );
};

export default Home;