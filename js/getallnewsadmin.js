const token=window.localStorage.getItem("token");
const table=document.querySelector(".tables");
const form=document.querySelector(".news")

fetch(`https://wild-vest-eel.cyclic.app/api/v1/news`,{
    headers:{
        "kiki-token":token,
    }
})
.then((response)=>{
    return response.json()
})
.then((data)=>{
    data.data.map((data,index)=>{
        table.innerHTML+=`
        <tr>
        <td>${index+1}</td>
        <td>${data._id}</td>
        <td>${data.newsmaintitle}</td>
        <td>${data.newstitle}</td>
        <td>${data.published}</td>
        <td>${data.newssummary}</td>
        <td>${data.newsdiscription}</td>
        <td><img src="${data.newsimage}"></td>
        <td>${data.date}</td>
        <td>${data.publishername}</td>
        <td>${data.category._id}</td>
        <td>${data.category.categoryname}</td>
        <td>${data.likes}</td>
        <td>${data.dislikes}</td>
        <td>${data.comment.map((commnt)=>{
           return commnt.comment
        })}</td>
        <td><a href="#" class="updatebutton" id=${data._id}>update</a></td>
        <td><a href="">delete/a></td>
        </tr>`
    })
    const newsbutton=document.querySelectorAll(".updatebutton");

    
       for(let i=0;i<newsbutton.length;i++){
        newsbutton[i].onclick=function(){
            const tr=this.parentElement.parentElement   
            const td=tr.getElementsByTagName("td")
            const id=newsbutton[i].getAttribute("id")

            const newsmaintitle=document.querySelector("#newsmaintitle");
            const newstitle=document.querySelector("#newstitle");
            const newssummary=document.querySelector("#newssummary");
            const newsdiscription=document.querySelector("#newsdiscription");
            const publishername=document.querySelector("#publishername");

            newsmaintitle.value=td[4].innerHTML;
            newstitle.value=td[3].innerHTML;
            newssummary.value=td[5].innerHTML;
            newsdiscription.value=td[6].innerHTML;
            publishername.value=td[9].innerHTML
            
            form.addEventListener("submit",(e)=>{
            e.preventDefault()
            const datas={
                newsmaintitle:newsmaintitle.value,
                newstitle:newstitle.value,
                newssummary:newssummary.value,
                newsdiscription:newsdiscription.value,
                publishername:publishername.value,

            }
            const api=`https://wild-vest-eel.cyclic.app/api/v1/news/${id}`
            const setPostman={
                method:"PATCH",
                headers:{
                    "Content-Type": "application/json",
                    "kiki-token":token
                  },
                  body:JSON.stringify((datas))
            }
            fetch(api,setPostman)
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                console.log("byakunze")
            })
            .catch((err)=>{
                console.log(err)
            })

            })
        }
    }
})