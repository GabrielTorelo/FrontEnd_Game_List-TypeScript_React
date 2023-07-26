import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardGameList from "../../components/CardGameList";
import './styles.scss'

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
    return (
        <div className="container">
            <Header />
            <div className="lists">
                <CardGameList id={1} name="Todos os Jogos" />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
