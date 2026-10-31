import React, { useState } from 'react';

function UserCard({ name, role, email, avatar }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="user-card">
      <img src={avatar} alt={name} className="avatar" />
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="email">{email}</p>
      
      <button className="like-btn" onClick={() => setLikes(likes + 1)}>
        Likes: {likes}
      </button>
    </div>
  );
}

export default UserCard;
