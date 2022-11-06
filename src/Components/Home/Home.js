import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // const foods = useLoaderData()
    return (
        <div className=''>
            <div className="hero w-full min-h-screen" style={{ backgroundImage: `url("https://retaildesignblog.net/wp-content/uploads/2015/07/Home-Park-Food-Store-by-TRIAD-China-Harbin-China-02.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 md:text-6xl text-white font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/foods'>
                            <button className="btn btn-primary">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;