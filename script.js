let s = document.getElementById("contents").querySelectorAll("ytd-rich-item-renderer");

//a callback function for when the dom changes
const callback = (mutationsList, observer) => {
    //check if more videos in list AKA user scrolled down far enough to load more http reqs
    if (document.getElementById("contents").querySelectorAll("ytd-rich-item-renderer").length != s.length) {
        //update our nodelist of videos and remove shapiro
        s = document.getElementById("contents").querySelectorAll("ytd-rich-item-renderer");
        removeShapiro();
    }
}


//Our observer properties
const contents = document.getElementById("contents");
const config = { attributes: true, childList: true, subTree: true };

//our observer on the dom that checks when dom is changed; if changed, callback function
const observer = new MutationObserver(callback);
observer.observe(contents, config);



//finds any video with channel name benshapiro and decapitates it
const removeShapiro = () => {

    for (let i = 0; i < s.length; i++) {

        let x = s[i].innerHTML.search("/c/BenShapiro");
        if (x != -1) s[i].innerHTML = "<h1>Ben Shapiro REPELLED</h1>";
    }
}


