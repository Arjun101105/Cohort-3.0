const style = {width:200,backgroundColor:"white", broderRaduis:10, borderColor: "gray", borderWidth: 1, padding:20, margin:10}

export function PostComponent({username,subtitle,time,description,image}){

    return <div style={style}>
    <div style={{display:"flex"}}>
  
      <img src={image} alt="" style={{
        width: 60,
        height:60,
        borderRaduis:60
      }}
      />
      <div style={{marginLeft:10}}>
        <b>{username}</b>

        <div>{subtitle}</div>
       {(time !== undefined)? <div>
        <img src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="  style={{width:20,height:20}} />
        {time}
        </div>:null}
      </div>
  
    </div>
    <div>
    {description}
    </div>
    </div>
  }