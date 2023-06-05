import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from "../components/header";
import BodyInfo from "../components/bodyInfo";
import Footer from "../components/footer";

import '../styles/index.css'

import { Outlet, useLocation, useLoaderData } from 'react-router-dom';

import { getAplicant } from '../api/aplicantes';


export const userLoader = async ({ params }) => {
    if (typeof (params.id) !== "undefined") {
        const user = await getAplicant(params.id);
        return { user }
    }
}


function Home(props) {
    let location = useLocation();
    const user = useLoaderData();
    return (
        <Container fluid id="homeContainer">
            <Header session={props.haveUser} user={user} />
            {location.pathname.includes('myAplications') || location.pathname.includes('profile') ?
                <Outlet /> : <BodyInfo />}
            <Footer />
        </Container>
    );
}

export default Home;
