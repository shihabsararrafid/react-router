import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div >
            <h1 className='text-3xl text-center text-red-300 font-semibold'>
                This is the friends site .
            </h1>
            <div className='grid grid-cols-3 '>
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>

        </div>
    );
};

export default Friends;