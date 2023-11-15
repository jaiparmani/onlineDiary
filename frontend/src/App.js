import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Streak from './components/Streak';
import Blogs from './components/Blogs';
import Loader from './components/Loader';
import './App.css'; import 'bootstrap/dist/css/bootstrap.min.css';
import * as Loaders from "react-loader-spinner";
import CutePics from './components/CutePics';
import CutePage from './components/CutePage';



export default function App() {
  const [notLoaded, setNotLoaded] = useState(true);
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
  let result = Object.values(Loaders);
  
  console.log(result);
  const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
    "The Eiffel Tower can be 15 cm taller during the summer, as the heat expands the metal.",
    "Bananas are berries, but strawberries aren't.",
    "The world's largest desert is not the Sahara but Antarctica. A desert is defined by its low precipitation, and Antarctica receives very little rainfall.",
    "The average person will spend six months of their life waiting for red lights to turn green.",
    "A group of flamingos is called a 'flamboyance.'",
    "Octopuses have three hearts: two pump blood to the gills, and one pumps it to the rest of the body.",
    "The dot over the letters 'i' and 'j' is called a tittle.",
    "Wombat poop is cube-shaped, which prevents it from rolling away and helps mark its territory."
  ];
  const getRandomFact = () =>{

  
    return get_random(facts)


  }
  const getRandomLoader = () =>{
    return get_random(loaders)

  }
  const [posts, setPosts] = useState(Posts1);
  const [subjectOptions, setSubjectOptions] = useState([]);
  const loaders = [
    <Loaders.Audio/>,
    <Loaders.BallTriangle/>,
    <Loaders.Bars/>,
    <Loaders.Blocks/>,
    <Loaders.Circles/>,
    <Loaders.CirclesWithBar/>,
    <Loaders.ColorRing/>,
    <Loaders.ColorRing/>,
    <Loaders.Comment/>,
    <Loaders.Discuss/>,
    <Loaders.Dna/>,
    <Loaders.FallingLines/>,
    <Loaders.FidgetSpinner/>,
    <Loaders.Watch/>


  ];
  
  function get_random(list) {
    return list[Math.floor((Math.random() * list.length))];
  }


  const fetchPosts = ()=>{
    fetch(
      "http://127.0.0.1:8000/postList/")
      .then((res) => res.json())
      .then((json) => {
          setPosts(json)
        })
  }
  const fetchEverything = ()=>{
    setNotLoaded(true);
    console.log(posts);
    async function makeRequest() {
      console.log('before');

      await delay(5000);

      console.log('after');
      setNotLoaded(false);
  }
  makeRequest()
    fetchPosts();
    fetchSubjectOptions();
}
  const fetchSubjectOptions = () => {
    fetch(
      "http://127.0.0.1:8000/subjectList/")
      .then((res) => res.json())
      .then((json) => {
        setSubjectOptions(json)
      })
  }
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );


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
      .then(fetchEverything());
  
  }
  useEffect(() => {
    fetchEverything();
    // fetchPosts();
    // fetchSubjectOptions();
    // console.log(posts);
    // async function makeRequest() {
    //   console.log('before');

    //   await delay(1000);

    //   console.log('after');
    //   setNotLoaded(false);

    // }

    // makeRequest();

  }, []);
  
    return (

      <Router>
        <Navbar/>
        { notLoaded && <Loader
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
          fact={getRandomFact()}
          loader={getRandomLoader()}
        />
        }
        <div className="App">
          {!notLoaded && <>
          
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/cutepics' element={< CutePage />}></Route>

            <Route exact path='/about' element={< Navbar />}></Route>
            <Route exact path='/streak' element={< Streak />}></Route>
            <Route exact path='/blogs' element={< Blogs Posts={posts} subjectOptions={subjectOptions} createPost={createPost} />}></Route>
          </Routes>
          </>
          }
        </div>

      </Router>
       
    );
}

