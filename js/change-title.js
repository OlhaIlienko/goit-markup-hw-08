let siteTitle = document.title;
let changeTitle;

window.addEventListener('blur', () => {
    let flag = true;
    changeTitle = setInterval(() => {
        document.title = flag ? "Please, don't go" : "Come back!";
        flag = !flag;
    }, 1500)
})

window.addEventListener('focus', () => {
    document.title = siteTitle;
    clearInterval(changeTitle);
})