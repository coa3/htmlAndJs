function fff() {
    let args = [78, 56, -232, 12, 8];
    let min = '';
    let a = args[0];
    for (let i = 0; i < args.length; i++) {
        if (args[i] < a) {
            min = args[i];
        }

    }
    console.log(min);
    return min;
}
fff();

//document.querySelector('.b').onclick = spinWords();