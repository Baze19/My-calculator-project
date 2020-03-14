

let initialnumber
let currentsign = ''
function show(numbers) {
    if (initialnumber) {
        initialnumber = `${initialnumber}${numbers}`
    }
    else (initialnumber = numbers)
    document.querySelector('.screen').innerHTML = initialnumber
}


function clearnumbers() {

    initialnumber = ''
    document.querySelector('.screen').innerHTML = ''
}

function addnums(signs) {
    if (initialnumber && currentsign !== signs) {
        initialnumber = `${initialnumber} ${signs} `
        document.querySelector('.screen').innerHTML = initialnumber
        currentsign = signs
    }
}

function equal() {
    const numberArrays = initialnumber.split(' ')
    const firstnum = numberArrays[0]
    const sign = numberArrays[1]
    const secondNum = numberArrays[2]

    let result = ''


    switch (sign) {
        case '+':
            result = parseInt(firstnum) + parseInt(secondNum);
            break;
        case '-':
            result = parseInt(firstnum) - parseInt(secondNum);
            break;
        case '/':
            result = parseInt(firstnum) / parseInt(secondNum);
            break;
        case 'x':
            result = parseInt(firstnum) * parseInt(secondNum)


    }
    document.querySelector('.screen').innerHTML = `${initialnumber} = ${result}`
}
