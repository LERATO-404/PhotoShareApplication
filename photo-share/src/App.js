import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [data, setData] = 
  React.useState(null);

  React.useEffect(() =>{
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="app">
      
      <div className="app__header"> 
        <img
          className="app__headerImage"
          src="https://images.unsplash.com/photo-1569775309692-fd5e62248d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt=""
          />
          
      </div>

      <h1>Helloo</h1>

      <Post username="lavas" caption="WOW" imageUrl="https://images.unsplash.com/photo-1637227049386-ce9ba314060c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      <Post />
      <Post />
      
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
