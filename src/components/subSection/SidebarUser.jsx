import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function SidebarUser() {
  const [posts, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idOnclick, setIdOnCLick] = useState(1)

  const handleOnclick = () => {
    setIdOnCLick(id);
  }
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idOnclick}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => {
        console.log(err) 
      })
  },[idOnclick]) 

   
  return (
    <div className='details-body'>
      <div className="content body-content">
          <div className='up-block'>
            <h1 className='title'>Games</h1>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={handleOnclick}>Find the Id</button>
            

            <li className='alert alert-primary'>{posts.title}</li>
          </div>
      </div>
    </div>
  )
}
