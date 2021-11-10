import React from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';
import Navigation from '../Navigation/Navigation';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;