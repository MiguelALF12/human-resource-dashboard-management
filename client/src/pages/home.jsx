import Container from 'react-bootstrap/Container';
import Header from "../components/header";
import BodyInfo from "../components/bodyInfo";
import Footer from "../components/footer";

import '../styles/index.css'

function Home() {
    return (
        <Container fluid id="homeContainer">
            <Header session={false} />
            <BodyInfo />
            <Footer />
        </Container>
    );
}

export default Home;
