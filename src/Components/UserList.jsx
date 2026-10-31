import React from 'react';
import UserCard from './UserCard';

function UserList({ users }) {
  if (users.length === 0) {
    return <p className="no-results">No users found.</p>;
  }

  return (
    <div className="user-grid">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          role={user.role}
          email={user.email}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
}

export default UserList;
