import React from "react";
import { IColorSchemeContextModel } from "../../../domain/models/colorSchemeModel";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardGameList from "../../components/CardGameList";
import './styles.scss'

const Home: React.FC<IColorSchemeContextModel> = ({ mode, dispatch }) => {
    return (
        <div className="container">
            <Header mode={mode} dispatch={dispatch} />
            <div className="lists">
                <CardGameList id={1} name="Todos os Jogos" />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
