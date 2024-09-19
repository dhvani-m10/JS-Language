const getVal = (className,value) => {
    console.log(className);
    let el= document.querySelector(className).value;

    return document.querySelector(className).value
    return el;
};

 const createTag = (tag, value) => {
    let tagName = document.createElement(tag);
    if (tag == "img") {
        tagName.src = value;
    }
    else {
        tagName.innerHTML = value;
    }


    return tagName;
};

export {
    getVal,createTag
}