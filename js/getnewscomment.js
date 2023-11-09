// const newsid=window.location.href.split("?id=")[1];
// const commentonnews=document.querySelector(".comment-container");



// const api=`https://motionless-lime-marlin.cyclic.app/api/v1/news/${newsid}`
// // const setPostman={
// //     method:"GET",
// //     headers:{

// //     }
// // };
// fetch(api)
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     data.data.comment.map((comment)=>{
//         console.log(comment.postedat)

//         commentonnews.innerHTML+=`
//         <h5>hhhhhhh</h5>
//         <h3>${comment.postedat}</h3>
//         `
    //   onenews.innerHTML=` 
    //   <div class="comment-container">
    //   <div class="news-division">
    //   <div class="news">
    //       <div class="all-news">
    //           <div class="menu-icon">
    //           <div class="showcontainer">
    //               </div>
    //               </div>
    //               <div class="comment-container">
    //                <h5</h5>
    //                <h3>${comment.postedat}</h3>
    //               </div>    
    //          </div>                      
    //   </div> `  
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })