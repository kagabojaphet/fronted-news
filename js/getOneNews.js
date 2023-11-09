const onenews=document.querySelector(".news-container");
const idParams = window.location.href.split("?id=")[1];
const category = document.querySelector(".category")

fetch(`https://wild-vest-eel.cyclic.app/api/v1/news/${idParams}`)

.then((response)=>{
    return response.json();
})
.then((data)=>{
    data.data.comment.map((x)=>{
console.log(x.comment)
    })
    onenews.innerHTML =`
   
   
    <div class="news-division">
    <div class="news">
    <div class="all-news">
    <img src="${data.data.newsimage[0]}">
    <div class="menu-icon">
    <i class="fa-solid fa-thumbs-up" onclick="like()">${data.data.likes.length}</i>
    <i class="fa-solid fa-thumbs-down" onclick="dislike()">${data.data.dislikes.length}</i>
    <i class="fa-solid fa-comment" onclick="comments()">${data.data.comment.length}</i>
    </div>
    <h1>${data.data.newsmaintitle}</h1>
    <h3>${data.data.newstitle}</h3>
    <h4>${data.data.newssummary}</h4>
   
    <div class="showcontainer">
    <form action="" class="formComment">
    <input type="text" class="input-field" placeholder="comment.......">
    <a href="#" class="comment" onclick="comments()">send</a>
</form>
    </div>
    </div>
    <div class="comment-container">
    <div class="comment-reapet">
    <h3>${data.data.comment.map((com)=>{
        return com.comment
    })}</h3>
  
    <h4>${data.data.comment.map((com)=>{
        return com.postedat
    })}</h4>
    </div>
    </div> 
    </div>
    </div>
    </div>`

    
})
    function comments(){
        const token=window.localStorage.getItem("token")
        const Params = window.location.href.split("?id=")[1];
        const comment=document.querySelector(".input-field").value;
        const data={
            comment,
        }
        const api=`https://wild-vest-eel.cyclic.app/api/v1/comment/${Params}`
        const setPostman={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "kiki-token":token
            },
            body:JSON.stringify(data)
        };
        fetch(api,setPostman)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            alert(data.message)
        })
        .catch((err)=>{
            alert(err)
        })
    }


// function comments(){
//     let show=document.querySelector(".showcontainer");
//     show.style.display="block"
// }
// function closecomment(){
//     let show=document.querySelector(".showcontainer");
//     show.style.display="block";
// }
