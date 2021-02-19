

/* 
const keys = document.querySelectorAll('.key')


const array_keys = [...keys]

const tags = array_keys.map(item => (
    item.attributes.id.nodeValue
))
 */

/* document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  console.log('keydown event\n\n' + 'key: ' + keyName);
}) */


const makeSound = ({ key }) => {
    console.log(key);
    switch (key) {
        case 'a':/* C */
            const c = document.querySelector('#C')
            c.src = "../statics/28.mp3"
            /* if(c.parentElement){
                c.parentElement.style = hover
            } */
            break;
        case 'w':/* C# */
            document.querySelector('#Csharp').src = "../statics/29.mp3"
            break;
        case 's':/* D */
            document.querySelector('#D').src = "../statics/30.mp3"
            break;
        case 'e':/* D# */
            document.querySelector('#Dsharp').src = "../statics/31.mp3"
            break;
        case 'd':/* E */
            document.querySelector('#E').src = "../statics/32.mp3"
            break;
        case 'f':/* F */
            document.querySelector('#F').src = "../statics/33.mp3"
            break;
        case 't':/* F# */
            document.querySelector('#Fsharp').src = "../statics/34.mp3"
            break;
        case 'g':/* G */
            document.querySelector('#G').src = "../statics/35.mp3"
            break;
        case 'y':/* G# */
            document.querySelector('#Gsharp').src = "../statics/36.mp3"
            break;
        case 'h':/* A */
            document.querySelector('#A').src = "../statics/37.mp3"
            break;
        case 'u':/* A# */
            document.querySelector('#Asharp').src = "../statics/38.mp3"
            break;
        case 'j':/* B */
            document.querySelector('#B').src = "../statics/39.mp3"
            break;
        case 'k':/*B# */
            document.querySelector('#B').src = "../statics/40.mp3"
            break;
        case 'l':/* C */
            document.querySelector('#CC').src = "../statics/41.mp3"
            break;
        case 'p':/* C# */
            document.querySelector('#Csharpsharpe').src = "../statics/42.mp3"
            break;

    }
}

document.addEventListener('keydown', makeSound)