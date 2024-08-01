const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

function solution(letter) {
    const map = new Map();
    const letters = letter.split(' ');
    
    let result = '';
    
    for(const [key, value] of Object.entries(morse)){
        map.set(key, value)
    }
    
    for(let i = 0; i < letters.length; i++){
        result += map.get(letters[i]);    
    }
    
    return result;
}