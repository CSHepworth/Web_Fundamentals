function removeCookies(element) {
    document.getElementById(element).remove();
}

function changeDegrees(element) {
    console.log(element.value);
    var arr = document.getElementsByClassName('temperature');
    for (var i = 0; i < arr.length; i++) {
        if (element.value == "C") {
            arr[i].innerHTML = Math.round((parseInt(arr[i].innerHTML) - 32) * (5 / 9));
        }
        if (element.value == "F") {
            arr[i].innerHTML = Math.round(32 + (parseInt(arr[i].innerHTML) * (9 / 5)));
        }
    }
}
