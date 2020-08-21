import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const employees = [
    {name:'Reza Shah' , position:'Project Manager'},
    {name:'Nayan Kante' , position:'Assistant Engineer'},
    {name:'Rupu Barua' , position:'IT Executive'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Posts></Posts>
        <Employee employee={employees[0]}></Employee>
        <Employee employee={employees[1]}></Employee>
        {
          employees.map(employee => <Employee employee = {employee}></Employee> )
        }
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () =>{
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleDecrease = () =>{
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Posts(){
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => setPosts(data));
  })
  return(
     <div>
       <h3>Posts Load From Server:{posts.length} </h3>
       {
         posts.map(post => <p>Post Title: {post.title}</p>)
       }
     </div>
  )
}

function Employee(props){
  let employeeStyle = {
    width: '300px',
    height: '250px',
    border: '2px solid green',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px'
  }
  
  // console.log(props);
  return (
      <div style = {employeeStyle}>
        <h3>Name: {props.employee.name}</h3>
        <p>Position: {props.employee.position}</p>
        <button>More Info</button>
      </div>

  )
}

export default App;
