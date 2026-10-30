App jsx
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import './App.css';

const initialUsers = [
  { id: 1, name: 'Amina Yohannes', role: 'Frontend Developer', email: 'amina@example.com', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Kaleb Bekele', role: 'UI/UX Designer', email: 'kaleb@example.com', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: 3, name: 'Sara Tadesse', role: 'Full Stack Engineer', email: 'sara@example.com', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 4, name: 'Dawit Alemu', role: 'Data Scientist', email: 'dawit@example.com', avatar: 'https://i.pravatar.cc/150?img=8' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = initialUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header>
        <h1>User Directory</h1>
        <p>Explore team members and roles</p>
      </header>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
