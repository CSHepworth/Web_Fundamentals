function addLike(element) {
    var l = document.querySelector(element).innerHTML;
    l = parseInt(l, 10);
    l++;
    document.querySelector(element).innerHTML = l;
}