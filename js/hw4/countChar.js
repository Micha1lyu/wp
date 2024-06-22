function countChar(str) {
    var result = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}

console.log(countChar("aabcedeaac")); 
