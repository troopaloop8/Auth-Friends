import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend.js';

const FriendsList = props => {

    const [friendsList, setFriendsList] = useState([]);
    const [currentFriends, setCurrentFriends] = useState([]);
    const [newFriend, setNewFriend] = useState([]);
    
    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res);
            setFriendsList(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [currentFriends])

    const addFriend = friend => {
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', friend)
        .then(res => {
            console.log(res);
            setCurrentFriends(res.data);
        })
        .catch(err => {
            console.log(err)
        });
    }

    const handleChange = e => {
        setNewFriend(
            {...newFriend,
            [e.target.name]: e.target.value
            }
        )
    }

    return (
        <div>
            <h3>Add a Friend</h3>
            <form>
                <input type='text' name='name' value={newFriend.name} onChange={handleChange} placeholder="name" />
                <input type='text' name='age' value={newFriend.age} onChange={handleChange} placeholder="age" />
                <input type='text' name='email' value={newFriend.email} onChange={handleChange} placeholder="email" />
                <input type='submit' value='New Fren' onClick={(e) => {
                    e.preventDefault(); 
                    addFriend(newFriend)
                }} />
            </form>
            <div>
                {friendsList.map((friend, index) => {
                    return <Friend friend={friend} key={index} />
                })}
            </div>
        </div>
    )

}

export default FriendsList