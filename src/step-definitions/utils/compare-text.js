function compareText(firstText, secondText, compareOpt) {
    switch(compareOpt) {
        case 'contain':
            return expect(firstText).toContain(secondText);
        case "not contain":
            return expect(firstText).not.toContain(secondText);
        case "be eqaul":
            return expect(firstText).toEqual(secondText);
        case "not be eqaul":
            return expect(firstText).not.toEqual(secondText);
    }
}

module.exports = compareText