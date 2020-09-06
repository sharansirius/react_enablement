import React from 'react'; 
import "./home.scss";
import {Header, Footer} from "../../shared";

const Home = () => {
    let propH = {
        headerDisplayText : "This is header",
        justAnotherPropH : "Prop 2"
    }
    let propF = {
        footerDisplayText : "This is footer",
        justAnotherPropF : "Prop 3"
    }
    return (
        <>
            <Header {...propH}/>
            <h1>Hello World !!!!</h1>
            <Footer {...propF} />
        </>
    );
}

export default Home;