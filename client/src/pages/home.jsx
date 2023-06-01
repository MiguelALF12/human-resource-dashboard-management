import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from "../components/header";
import BodyInfo from "../components/bodyInfo";
import Footer from "../components/footer";

import '../styles/index.css'

import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Home(props) {
    let location = useLocation();
    console.log(location.pathname);

    return (
        <Container fluid id="homeContainer">
            <Header session={props.haveUser} />
            {location.pathname.includes('myAplications') || location.pathname.includes('profile') ?
                <Outlet /> : <BodyInfo />}
            <Footer />
        </Container>
    );
}

export default Home;
