import React,{useEffect} from 'react';

const Leaders = ({user,score}) => {
  //insert fake data from users??
    useEffect(()=>{
    console.log(user);
    })
  return <div>
      {/* <h1>Nice Job! youre score is {score}</h1> */}
      <h1>Nice Job!</h1>
      {/* {user.map((e)=>{<div>e</div>})} */}

  </div>;
};

export default Leaders;
