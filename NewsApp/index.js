

document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.querySelector('.newslist');
    let news = JSON.parse(localStorage.getItem('news')) || [];

    const handleNavClick = (event, linkName) => {
        event.preventDefault();
    };

    const mapper = (news) => {
        news.forEach((ele) => {
            const title = document.createElement('h3');
            title.textContent = ele.title;

            const image = document.createElement('img');
            image.src = ele.image;
            image.alt = ele.title;

            const description = document.createElement('p');
            description.textContent = ele.description;

            const div = document.createElement('div');
            div.append(title, image, description);

            newsList.append(div);
        });
    };

    mapper(news);
});


document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.querySelector('.newslist');
    let newsDetails = JSON.parse(localStorage.getItem('newsDetails')) || [];

    const handleNavClick = (event, linkName) => {
        event.preventDefault();
    };

    const mapper = (newsDetails) => {
        newsDetails.forEach((ele) => {
            const imgurl = document.createElement('img');
            imgurl.src = ele.imgurl;

            const uname = document.createElement('img');
            uname.textContent = ele.uname;


            const div = document.createElement('div');
            div.append(imgurl, uname);

            newsList.append(div);
        });
    };

    mapper(newsDetails);
});

