function addLike(element) {
    var like = document.querySelector(element);
    like.innerHTML = parseInt(like.innerHTML, 10) + 1;
}