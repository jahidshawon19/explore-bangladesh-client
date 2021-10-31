import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import LoadDestination from '../LoadDestination/LoadDestination'
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <LoadDestination></LoadDestination>
            <About></About>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;