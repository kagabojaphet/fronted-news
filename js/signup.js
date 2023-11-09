let signup =document.querySelector('.signup')

signup.addEventListener("submit", (e)=>{

    e.preventDefault();

    let firstname = document.querySelector('#firstname').value;
    let lastname = document.querySelector('#lastname').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let confirmpassword = document.querySelector('#confirmPassword').value;

    const data={
        firstname,
        lastname,
        email,
        password,
        confirmpassword,
    };
  
    const api = `https://motionless-lime-marlin.cyclic.app/api/v1/user`

    const setPostman ={
        method:'POST',

        headers:{
            "Content-Type":"application/json"
        },

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

const password=document.querySelector("#password");
const eyestoggle=document.querySelector("#eyestoggle");

eyestoggle.addEventListener("click",function(){
    if(password.type=="password"){
        password.type="text";

        eyestoggle.className="fas fa-eye";
    }
    else{
        password.type="password";
        eyestoggle.className ="fas fa-eye-slash";
    }


});
