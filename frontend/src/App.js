import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Streak from './components/Streak';
import Blogs from './components/Blogs';
import './App.css'; import 'bootstrap/dist/css/bootstrap.min.css';




export default function App() {
  
  let Posts1 = [
    {
      title: "title",
      text: "text",
      timestamp: "timestamp"
    },
    {
      title: "title",
      text: "text",
      timestamp: "timestamp"
    },
    {
      title: "title",
      text: "text",
      timestamp: "timestamp"
    }
  ]
  const [posts, setPosts] = useState(Posts1);
  const [subjectOptions, setSubjectOptions] = useState([]);
  const fetchPosts = ()=>{
    fetch(
      "http://127.0.0.1:8000/postList/")
      .then((res) => res.json())
      .then((json) => {
          setPosts(json)
        })
  }
  const fetchSubjectOptions = () => {
    fetch(
      "http://127.0.0.1:8000/subjectList/")
      .then((res) => res.json())
      .then((json) => {
        setSubjectOptions(json)
      })
  }
  const createPost = (subject, text) =>{
    console.log("Inserting", {subject, text})
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "subject": subject,
        "text": text,
      })
    };
    fetch('http://127.0.0.1:8000/create_blog/', requestOptions)
      .then(response => response.json())
      .then(fetchPosts());
  }
  useEffect(() => {
    fetchPosts();
    fetchSubjectOptions();
    console.log(posts);
    // setTimeout(() => {
    //   fetchPosts();
    //   console.log(posts);
    // }, 1000);
  }, []);
  
    return (

      <Router>
        <Navbar/>
        <div className="App">
          
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< Navbar />}></Route>
            <Route exact path='/streak' element={< Streak />}></Route>
            <Route exact path='/blogs' element={< Blogs Posts={posts} subjectOptions={subjectOptions} createPost={createPost} />}></Route>
          </Routes>
        </div>
      </Router>
    );
}

