const token = window.localStorage.getItem("token");
const news = document.querySelector(".news");

news.addEventListener("submit", (e) => {
  e.preventDefault();

  const newsmaintitle = document.querySelector("#newsmaintitle").value;
  const newstitle = document.querySelector("#newstitle").value;
  const published = document.querySelector("#published").value;
  const newssummary = document.querySelector("#newssummary").value;
  const newsdiscription = document.querySelector("#newsdiscription").value;
  const newsimage = document.querySelector("#newsimage").value;
  const publishername = document.querySelector("#publishername").value;
  const image = [newsimage];

  const datas = {
    newsmaintitle,
    newstitle,
    published,
    newssummary,
    newsdiscription,
    newsimage: image,
    publishername,
    category:"653779cdf0c988fc9254d168"
  };
  console.log(datas);
  const api = `https://motionless-lime-marlin.cyclic.app/api/v1/news`;
  const setpostman = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "kiki-token": token,
    },
    body: JSON.stringify(datas),
  };
  fetch(`https://motionless-lime-marlin.cyclic.app/api/v1/news`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "kiki-token": token,
    },
    body: JSON.stringify(datas),
  })
    .then((response) => {
console.log(response)
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
});
