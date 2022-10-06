import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Home = () => {
    const foodsObj = useLoaderData()
    const foods = foodsObj.meals
    return (
        <div className='w-[95%] mt-[85px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12'>
                {
                    foods.map(food => <Food
                        key={food.idMeal}
                        food={food}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default Home;