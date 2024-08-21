let like = localStorage.getItem("like") || 0 ;
document.getElementById("like").innerHTML = like;

const Like=()=>{
like++;
document.getElementById("like").innerHTML = like;
localStorage.setItem("like",like)
}

document.getElementById('lk').addEventListener("click",Like)

let comment = sessionStorage.getItem("comment") || 0 ;
document.getElementById("comment").innerHTML = comment;

const Comment=()=>{
comment++;
document.getElementById("comment").innerHTML = comment;
sessionStorage.setItem("comment",comment)
}

document.getElementById('cmt').addEventListener("click",Comment)

let follow =localStorage.getItem("Follow") || 0 ;
document.getElementById("Follow").innerHTML = follow;

const PageFollow = () => {
    follow++;
    document.getElementById("Follow").innerHTML = follow;
    localStorage.setItem("follow", follow);
}

document.getElementById('follow').addEventListener("click", PageFollow);

let share = parseInt(sessionStorage.getItem("share")) || 0;
document.getElementById("share").innerHTML = share;

const PostShare = () => {
    share++;
    document.getElementById("share").innerHTML = share;
    sessionStorage.setItem("share", share);
}

document.getElementById('shr').addEventListener("click", PostShare);