function isPalindrome(text) {
    if (typeof text !== 'string')
    return 'string should not be empty';

    if(text<=1){
        return true;
    }
    if (text[0]!==text[text.length-1]){
        return false;
    }
    else{
        return isPalindrome(text.slice(1,text.length-1))
    }
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("maam"));
console.log(isPalindrome("b"));
console.log(isPalindrome("abcd"));