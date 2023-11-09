const newsIndex = document.querySelector(".news")
const spinner = document.querySelector(".spinner")
newsIndex.style.display="none"
spinner.style.display="block"


fetch(`https://wild-vest-eel.cyclic.app/api/v1/news`)

.then((response)=>{
    return response.json()
})

.then((data)=>{
    data.data.map((news)=>{
        newsIndex.style.display="grid"
        spinner.style.display="none"
        newsIndex.innerHTML +=`
       
        <div class = "card">
        <img src ="${news.newsimage[0]}/">
        <i class="fa-solid fa-thumbs-up">${news.likes.length}</i>
        <i class="fa-solid fa-thumbs-down">${news.dislikes.length}</i>
        <i class="fa-solid fa-comment" onclick="comments()">${news.comment.length}</i>
        <h4>${news.newsmaintitle}</h4>
        <p class="discription">${news. newstitle}</p>
        <h5>${news.published}</h5>
        <p>${news. newssummary}</p>
        <h5>${news. newsdiscription}</h5>
        <p class ="date">${news.date}</p>
        <a href="./singlenews.html?id=${news._id} " target="_blank">readMore</a>

        `
    })
})
