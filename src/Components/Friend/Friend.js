import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, username } = props.friend;
    const navigate = useNavigate();
    const showDetails = () => {
        const path = `/friends/${id}`;
        navigate(path);
    }

    return (
        <div className='p-6 border-solid border-2 m-6 text-center border-violet-700 rounded-lg' >
            <h1>Name:{name}</h1>
            <button onClick={showDetails} className='py-2 px-4 border-2 border-gray-600 text-white rounded-lg bg-lime-700'>{username}</button>


        </div>
    );
};

export default Friend;