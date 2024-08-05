function solution(polynomial) {
    const terms = polynomial.split('+').map(term => term.trim());
    let xCoeff = 0;
    let constant = 0;

    terms.forEach(term => {
        if (term.includes('x')) {
            const coeff = term.replace('x', '') || '1';
            xCoeff += parseInt(coeff);
        } else {
            constant += parseInt(term);
        }
    });

    let result = [];
    if (xCoeff !== 0) {
        result.push(xCoeff === 1 ? 'x' : `${xCoeff}x`);
    }
    if (constant !== 0) {
        result.push(constant.toString());
    }

    return result.join(' + ') || '0';
}