export const formatMoney = (cents) => {
    return String(cents).replace(/(.)(?=(\d{3})+$)/g, '$1.') + "đ"
}

export const convertNumberCurrenry = (number) => {
    let input = String(number)
    let mystring = input, i = input.length - 1
    for (i = input.length - 1; i >= 0; i--) {
        if (i - 2 > 0)
            mystring = splitValue(mystring, i - 2, i);
        else break
        i -= 2
    }
    return mystring
}

function splitValue(value, first, index) {
    return value.substring(0, first) + "." + value.substring(first, value.length)
}

export function checkEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        return false;
    }
    else {
        return true;
    }
}

export function hoursToFormatTime(hour) {
    var decimalTimeString = "1.6578";
    var decimalTime = parseFloat(decimalTimeString);
    decimalTime = decimalTime * 60 * 60;
    var hours = Math.floor((decimalTime / (60 * 60)));
    decimalTime = decimalTime - (hours * 60 * 60);
    var minutes = Math.floor((decimalTime / 60));
    decimalTime = decimalTime - (minutes * 60);
    var seconds = Math.round(decimalTime);
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return "" + hours + ":" + minutes + ":" + seconds;

}

export const isYoutubeURL = (url) => {
    return url.startsWith('https://youtube.com/');
}

export const getYoutubeVideoId = (url) => {
    let lastSplashIndex = url.lastIndexOf('/');
    //console.log('video id: ', url.substring(lastSplashIndex, url.length));
    return url.substring(lastSplashIndex + 1, url.length);
}

