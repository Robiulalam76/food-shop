import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';


const Foods = () => {
    const [foods, setFoods] = useState([])
    const [count, setCount] = useState()
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(9);

    const pages = Math.ceil(count / size)

    useEffect(() => {
        fetch(`http://localhost:5000/foods?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.foods)
                setCount(data.count)
            })
    }, [page, size])

    return (
        <div className='mt-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12 mx-auto'>
                {
                    foods.map(food => <FoodCard
                        key={food._id}
                        food={food}
                    ></FoodCard>)
                }
            </div>

            <div className='flex justify-center'>
                <div className="btn-group text-white">
                    <button onClick={() => setPage(page - 1)} className="btn" disabled={page === 0}>«</button>
                    <button className="btn">Page {page}</button>
                    <button onClick={() => setPage(page + 1)} className="btn" disabled={pages === page}>»</button>
                </div>
            </div>

        </div>
    );
};

export default Foods;