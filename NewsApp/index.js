
// document.getElementById('username').innerHTML = localStorage.getItem('username');
document.getElementById('image').src = localStorage.getItem('img');

// document.addEventListener('DOMContentLoaded', () => {
//     const newsList = document.querySelector('.newslist');
//     let news = JSON.parse(localStorage.getItem('news')) || [];

//     const handleNavClick = (event, linkName) => {
//         event.preventDefault();
//     };

//     const mapper = (news) => {
//         news.forEach((ele) => {
//             const title = document.createElement('h3');
//             title.textContent = ele.title;

//             const image = document.createElement('img');
//             image.src = ele.image;
//             image.alt = ele.title;

//             const description = document.createElement('p');
//             description.textContent = ele.description;

//             const div = document.createElement('div');
//             div.append(title, image, description);

//             newsList.append(div);
//         });
//     };

//     mapper(news);
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const newsList = document.querySelector('.newslist');
//     let newsDetails = JSON.parse(localStorage.getItem('newsDetails')) || [];

//     const handleNavClick = (event, linkName) => {
//         event.preventDefault();
//     };

//     const mapper = (newsDetails) => {
//         newsDetails.forEach((ele) => {
//             const imgurl = document.createElement('img');
//             imgurl.src = ele.imgurl;

//             const uname = document.createElement('img');
//             uname.textContent = ele.uname;


//             const div = document.createElement('div');
//             div.append(imgurl, uname);

//             newsList.append(div);
//         });
//     };

//     mapper(newsDetails);
// });

// let signUpData = JSON.parse(localStorage.getItem('signUp')) || [];
// let newsData = JSON.parse(localStorage.getItem('newsData')) || [];

// const displaySignUp = (signUpData) => {

//     const userDataDiv = document.getElementById('userData');
//     userDataDiv.innerHTML = "";

//     signUpData.forEach((user) => {
//         let img = document.createElement("img");
//         img.src = user.img;

//         let uname = document.createElement("h2");
//         uname.textContent = user.uname;

//         let div = document.createElement("div");
//         div.append(img, uname);

//         userDataDiv.append(div);
//     });
// };

const displayNews = (add) => {

    const newsDataDiv = document.getElementById('newsData');
    newsDataDiv.innerHTML = "";

    add.map((ele, index) => {
        let title = document.createElement("h3");
        title.textContent = ele.title;

        let img = document.createElement("img");
        img.src = ele.image;

        let description = document.createElement("p");
        description.textContent = ele.description;

        // let deleteBtn = document.createElement("button");
        // deleteBtn.textContent = "Delete";
        // deleteBtn.onclick = () => {
        //     add.splice(index, 1);
        //     localStorage.setItem('add', JSON.stringify(add));
        //     displayNews(add);
        // };

        let div = document.createElement("div");
        div.append(title, img, description);

        newsDataDiv.append(div);
    });
};

// displaySignUp(signUpData);
displayNews(add);

