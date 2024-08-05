function solution(spell, dic) {
    for(const str of dic){
        const spells = [...spell];
        const strs = [...str];
        str.split('').forEach( v => {
            const spellIndex = spells.findIndex(j => j === v);
            const strIndex = strs.findIndex(j => j === v);
            
            if(spellIndex !== -1){
                spells.splice(spellIndex, 1);    
            }
            if(strIndex !== -1){
                strs.splice(strIndex, 1);
            }
        });
        if(spells.length === 0 && strs.length === 0) return 1;
    }
    
    return 2;
}

/**
function solution(spell, dic) {
    const sortedSpell = spell.sort().join('');
    
    return dic.some(word => 
        word.length === spell.length && 
        [...word].sort().join('') === sortedSpell
    ) ? 1 : 2;
}
*/