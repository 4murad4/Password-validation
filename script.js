let input = document.querySelector('input');
let li = document.querySelectorAll('li');
let imgEye = document.querySelector('.img-eye');
let imgCheck = document.querySelectorAll('img');
let texts = [];
let symbols = '!@#$_~%^&*/|()<>,./?;{}[]';
let lowerLetter = 0,
    upperLetter = 0,
    digit = 0,
    symbol = 0;

input.addEventListener('keydown', (e) => {
    let txt = e.key;
    let lastTxt = texts[texts.length - 1];
   
    if (txt == 'CapsLock' || txt == 'Shift' || txt == 'Control' || txt == 'Alt' || txt == ' ' || txt == 'Enter') {
        console.log('Failed all of parameters!');
    } else {
            if (txt != 'Backspace') {
                texts.push(txt);
            } else {
                texts.splice(texts.length - 1, 1);

                if (texts.length < 8) {    
                    li[0].classList.remove('li');
                    imgCheck[0].src = '';
                    imgCheck[0].classList.remove('img-check');
                } if ((lastTxt >= '0' && lastTxt <= '9')) {
                    digit -= 1;
                } else if (lastTxt >= 'a' && lastTxt <= 'z') {
                    lowerLetter -= 1;
                } else if (lastTxt >= 'A' && lastTxt <= 'Z') {
                    if (lastTxt != 'Backspace') {
                        upperLetter -= 1;
                    }
                } 
    
                for (let i of symbols) {
                    if (i == lastTxt) {
                        symbol -= 1;
                    }
                }
            }

            if (texts.length >= 8) {    
                li[0].classList.add('li');
                imgCheck[0].src = 'check.webp';
                imgCheck[0].classList.add('img-check');
            } if ((txt >= '0' && txt <= '9')) {
                li[1].classList.add('li');
                imgCheck[1].src = 'check.webp';
                imgCheck[1].classList.add('img-check');
                digit += 1;
            } else if (txt >= 'a' && txt <= 'z') {
                li[2].classList.add('li');
                imgCheck[2].src = 'check.webp';
                imgCheck[2].classList.add('img-check');
                lowerLetter += 1;
            } else if (txt >= 'A' && txt <= 'Z') {
                if (txt != 'Backspace') {
                    li[3].classList.add('li');
                    imgCheck[3].src = 'check.webp';
                    imgCheck[3].classList.add('img-check');
                    upperLetter += 1;
                }
            } 

            for (let i of symbols) {
                if (i == txt) {
                    li[4].classList.add('li');
                    imgCheck[4].src = 'check.webp';
                    imgCheck[4].classList.add('img-check');
                    symbol += 1;
                }
            }
        }

    if (digit == 0) {
        li[1].classList.remove('li');
        imgCheck[1].src = '';
        imgCheck[1].classList.remove('img-check');
    } if (lowerLetter == 0) {
        li[2].classList.remove('li');
        imgCheck[2].src = '';
        imgCheck[2].classList.remove('img-check');
    } if (upperLetter == 0) {
        li[3].classList.remove('li');
        imgCheck[3].src = '';
        imgCheck[3].classList.remove('img-check');
    } if (symbol == 0) {
        li[4].classList.remove('li');
        imgCheck[4].src = '';
        imgCheck[4].classList.remove('img-check');
    } 
});

let eye = true;

imgEye.addEventListener('click', (e) => {
    if (eye) {
        e.target.style.backgroundImage = 'url(eye_hidden.png)';
        input.type = 'password';
        eye = false;
    } else {
        e.target.style.backgroundImage = 'url(eye.png)';
        input.type = 'type';
        eye = true;
    }
})












