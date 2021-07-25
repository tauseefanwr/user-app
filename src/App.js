import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [usersList, setUsersLists] = useState([]);

  const onAddUsersHandler = (uName, uAge) => {
    setUsersLists((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random() }];
    });
  };
  return (
    <>
      <AddUser onAddUser={onAddUsersHandler} />;
      <UsersList users={usersList} />
    </>
  );
}

export default App;
