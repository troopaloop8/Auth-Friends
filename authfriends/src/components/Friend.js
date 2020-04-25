import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = props => {

  const [friend, setFriend] = useState();

  const bannishFriend = id => {
    axiosWithAuth()
    .delete(`/friends/${id}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <h4>{props.friend.name}</h4>
      <p><strong>Age:</strong> {props.friend.age}</p>
      <p><strong>Email:</strong> {props.friend.email}</p>
      <button onClick={() => {bannishFriend(props.friend.id)}}>Banish Friend</button>
    </div>
  )
}

export default Friend;