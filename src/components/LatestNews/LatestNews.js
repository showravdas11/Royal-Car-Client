import React from 'react';
import './LatestNews.css'

// https://i.ibb.co/kMNCZhS/driver-bg-dark.jpg
// https://i.ibb.co/vPyJ8R8/latest-news-01.jpg
// https://i.ibb.co/H7tsFwV/latest-news-02.jpg
// https://i.ibb.co/kQynzbF/latest-news-03.jpg

const LatestNews = () => {
    return (
        <div className="latest-section">
            <div className="container">
                <h2 className="mt-5 text-center latest-head">Our Latest News.</h2>

                <div className="row">
                    <div className="col-md-4">
                        <img src="https://i.ibb.co/vPyJ8R8/latest-news-01.jpg" alt="" />
                        <p className="mt-3 latest-head">27 JUNE 2020</p>
                        <p className="mt-3 latest-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt cupiditate excepturi minima nostrum veritatis.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://i.ibb.co/H7tsFwV/latest-news-02.jpg" alt="" />
                        <p className="mt-3 latest-head">6 JUNE 2021</p>
                        <p className="mt-3 latest-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt cupiditate excepturi minima nostrum veritatis.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://i.ibb.co/kQynzbF/latest-news-03.jpg" alt="" />
                        <p className="mt-3 latest-head">29 JUNE 2020</p>
                        <p className="mt-3 latest-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt cupiditate excepturi minima nostrum veritatis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;