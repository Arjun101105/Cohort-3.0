import { useState } from "react"
import { PostComponent } from "./post"

// the POST COMPONENT CARDS here will be RE-USABLE when we start using PROPS ... 

function App() {

  const [post, setPost] = useState([])
  
  const postComponent = post.map(post=><PostComponent
  username = {post.username}
  image={post.image}
  description={post.description}
  subtitle={post.subtitle}
  time={post.time}
  />)

  function AddPost(){
    setPost([...post, {
      username : "Arjun Nair",
      description : "best SDE in town",
      image: "https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas=",
      subtitle: "12000 followers",
      time:"12m ago"
    }])
  }


return <div style={{ backgroundColor:"#dfe6e9", height: "100vh" }}>
  <button onClick={AddPost}>Add Post</button>
  <div style={{display:"flex", justifyContent:"center"}}>
    <div>
    <div>{postComponent}</div>
    </div>
</div>
</div>
}



// assignment => (1) try coding the profile card.
//               (2) use conditional rendering for "PROMOTED" - POST COMPONENT Cards == use PROPS before conditional rendering ******** DONE **********
function ProfileCard(){
  return <div>

  </div>
}

export default App