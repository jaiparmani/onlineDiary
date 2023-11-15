import { Button } from 'bootstrap';
import React from 'react'
import { useState, useEffect } from 'react';

export default function CutePics() {
    const [img, setImg] = useState();
    const url = "https://random.dog/woof.json";
    const [dogImg2, setDogImg2] = useState(null);


    const fetchImage = async () => {
        fetch('https://random.dog/woof.json')
            .then(response => response.json())
            .then(data => {
                console.log(data.url); // The URL of a random dog image
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        const fetchURL = async () => {
            const res = await fetch(url);
            return url;
        }
        const imageUrl = await fetch(url);
        const res = await fetch(imageUrl.url);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log(imageUrl)
        setImg(imageObjectURL);
    };
    const fetchNow = async ()=>{
        const url = "https://random.dog/woof.json";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setDogImg2(json.url);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }
    useEffect(() => {
        fetchNow()
    }, []);

  return (
      <div>           <button value="MORE" onClick={() => fetchNow()}>MORE</button>
         <img src={dogImg2} size="20%"/>
</div>
  )
}
