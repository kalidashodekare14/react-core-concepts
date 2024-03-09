import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';

export default function Friends() {

    const [friend, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, [])

    return (
        <div className='box'>
            <h3>Friends: {friend.length}</h3>
            {
                friend.map(fnd =><Friend friend={fnd}></Friend>)
            }
        </div>
    )
}

/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. set loaded data to the state 
 */