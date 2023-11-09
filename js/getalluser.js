const token = window.localStorage.getItem("token");
const table=document.querySelector(".tables");
const form = document.querySelector(".updated")
const deleteform=document.querySelector(".delete")
form.style.display="none"

fetch(`https://wild-vest-eel.cyclic.app/api/v1/user`,{
    headers:{
       "kiki-token":token, 
    },
})
.then((response)=>{
    return response.json()
})
.then((data)=>{
    data.data.map((user, index) => {
        table.innerHTML += `
        <tr>
        <td>${index+1}</td>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.role}</td>
        <td>${user.createdate}</td>
        <td><a href="#" id=${user._id} class="updata">update</a></td>
        <td><a href="#" id=${user._id} class="delete">delete</a></td>
        </tr>`;
    })


const updateselect = document.querySelectorAll(".updata")

for(let i=0;i<updateselect.length;i++){

     updateselect[i].onclick=function(){
     form.style.display="block"
    let tr=this.parentElement.parentElement
   
    let td=tr.getElementsByTagName("td")
   
    let id=updateselect[i].getAttribute("id")
    let firstname = document.querySelector('#firstname');
    let lastname = document.querySelector('#lastname');
    let email = document.querySelector('#email');
    firstname.value=td[1].innerHTML;
    lastname.value=td[2].innerHTML;
    email.value=td[3].innerHTML;
    form.addEventListener("submit",(e)=>{
      e.preventDefault()
    const datas={
      firstname:firstname.value,
      lastname:lastname.value,
      email:email.value
    };
    const api=`https://wild-vest-eel.cyclic.app/api/v1/user/${id}`
    const setPostman={
      method:"PATCH",
      headers:{
        "Content-Type": "application/json",
        "kiki-token":token
      },
      body:JSON.stringify((datas))
    };
    fetch(api,setPostman)
    .then((response)=>{
      return response.json()
    })
    .then((datas)=>{
     alert(datas.message)
    })
    .then((err)=>{
      alert(err)
    })
  })

}

  
}


const deleteselect=document.querySelectorAll(".delete")
for(let x=0;x<deleteselect.length;x++){
  deleteselect[x].onclick=function(){
    let tr=this.parentElement.parentElement
    let td=tr.getElementsByTagName("td")
    let id=deleteselect[x].getAttribute("id")
    
    

    let email=document.querySelector(".delete-id");
    email.value=td[3].innerHTML;
    deleteform.addEventListener("submit",(e)=>{
      e.preventDefault();

      const api=`https://wild-vest-eel.cyclic.app/api/v1/user/${id}`
      const setPostman={
        method:"DELETE",
        headers:{
          "Content-Type": "application/json",
        "kiki-token":token
        }
      }
      fetch(api,setPostman)
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        console.log(data.message)
      })
      .catch((err)=>{
        console.log(err)
      })
    })
  }
}

})
