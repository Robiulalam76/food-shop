import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({ food }) => {
    const { idMeal, strInstructions, strMealThumb, strMeal } = food
    // console.log(food)
    return (
        <div className='w-[95%] mx-auto'>
            <div className="card h-full w-full shadow-xl bg-[#2A303C]">
                <figure><img className='h-44 w-full' src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">
                        {strMeal}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='text-gray-300'>{strInstructions ? strInstructions.slice(0, 120) + '...' : 'No Data Found'}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/food-details/${idMeal}`} className='btn btn-primary'>Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;