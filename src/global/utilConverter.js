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