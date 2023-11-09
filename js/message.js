const token = window.localStorage.getItem("token");
let message=document.querySelector(".message")


message.addEventListener("submit", (e)=>{

    e.preventDefault();

  let email=document.querySelector("#email").value;
  let message=document.querySelector("#message").value;

  const data={
    email,
    message,
  };

  const api=`https://motionless-lime-marlin.cyclic.app/api/v1/message`
    const setPostman ={
        headers:{
            "kiki-token":token, 
        },

        method:"POST",

        body:JSON.stringify(data)
  };

  fetch(api,setPostman)

  .then((response)=>{
      return response.json();
  })

  .then((data)=>{
      alert(data.message)
  })
  .catch((err)=>{
      alert(err)
  })
})