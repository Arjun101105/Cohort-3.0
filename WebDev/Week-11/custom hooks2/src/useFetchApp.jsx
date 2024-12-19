import { set } from 'mongoose';
import { useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch';

function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost)

  return <div>
    <button onClick={()=> setCurrentPost(1)}>1</button>
    <button onClick={()=> setCurrentPost(2)}>2</button>
    <button onClick={()=> setCurrentPost(3)}>3</button>
    <button onClick={()=> setCurrentPost(4)}>4</button>
    <br/>
    {JSON.stringify(finalData.title)}
  </div>
}

export default App
