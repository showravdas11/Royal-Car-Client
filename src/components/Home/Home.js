import React from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';
import LatestNews from '../LatestNews/LatestNews';
import Navigation from '../Navigation/Navigation';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>

            <TopBanner></TopBanner>
            <HomeProducts></HomeProducts>
            <LatestNews></LatestNews>
            <ReviewDetail></ReviewDetail>
        </div>
    );
};

export default Home;