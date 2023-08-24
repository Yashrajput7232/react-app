
import './App.css';
import React from 'react';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
function App() {
  const contacts=
    [
       {
          id:1,
          name:"yash",
          email:"yash@gmail.com"
       },
       {
          id:2,
          name :"rancho",
          email:"rancho@gmail.com"
       }
    ]
  return (
    <div className="ui container">
     <h1>my 2nd App</h1>
     <Header/>
     <AddContact/>
     <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
