function addLike() {
    var l = document.querySelector('#likes').innerText;
    l = parseInt(l, 10);
    l += 1;
    document.querySelector('#likes').innerText = l
}