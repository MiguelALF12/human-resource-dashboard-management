import Header from "../../components/header"
import Footer from "../../components/footer"
import AnalystBodyInfo from "./bodyInfo";

const AnalystHome = () => {
    return (
        <>
            <Header session={true} />
            <AnalystBodyInfo />
            <Footer />
        </>
    )
}

export default AnalystHome;