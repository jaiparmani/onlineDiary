import React from 'react'
import Post from "./Post";
import AddPost from "./AddPost";
export default function Blogs({ Posts, subjectOptions, createPost }) {
 const getSubject = (el) =>{
    var n = subjectOptions.length;
    for(var i =0 ; i<= n - 1; i++)
    {
        var curSubject = subjectOptions[i];
        if(curSubject.id == el)
            return curSubject.subject;
    }
    return el;

 }
    return (
    <>
            <AddPost subjectOptions={subjectOptions} createPost={createPost }/>

   {
    Posts.map((el)=>{
        return <Post
        title={ getSubject(el.subject)}
        text={el.text}
        timestamp={el.timestamp}
        />
        })
    }
    </>
  )
}
    