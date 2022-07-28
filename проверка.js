let x = '1234';

function f19() {
    let ar = [...x];
    console.log(ar);
    for (let i = 0; i < ar.length; i++) {
        if (typeof(ar[i]) === 'number' && ar.length == 4) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    }
}
document.querySelector('.b').onclick = f19;