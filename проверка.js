let n = 123456789;

function f19() {
    let r = n + '';
    let m = Array.from(r);
    console.log(m);

    let out = [];
    for (let i = 0; i < m.length; i++) {
        out.push(+m[i]);
    }
    console.log(out);

    console.log(out.sort((a, b) => b - a))
    let x = +out.join("");
    console.log(x)

    //console.log(out.replace(/[,]/g, ''));
}

//r = r.split(' ').join('')

// n.sort(a, b)
//console.log(a + b);

/*if (n < 0 && n % (Math.sqrt(n)) !== 0) console.log(false);  
(n < 0 && n % (Math.sqrt(n)) !== 0) ? console.log(false): (n == 0 || n % (Math.sqrt(n)) == 0) ? console.log(true)
    /*else if (n == 0 || n % (Math.sqrt(n)) == 0) console.log(true); */


//else if () { // n % (Math.sqrt(n)) == 0 ? return true;
//console.log(true);

//} //else { console.log(false); } 

//return x == w ? x * w : 2 * (x + w) //если x равно w то  x*w иначе 2*(x + w)

/*    let x = n.length; // 3
    console.log('length:' + x)
    let z = Math.floor(x / 2); // 3/2=1.5 okrug 1 
    console.log('округл:' + z) //1

    if (x == 1) {
        console.log(n[z]);
    } else if (x % 2 != 0) {
        console.log(n[z]);
    } else {
        console.log(n[z - 1] + n[z]);
    }
}


    let x = n.split(' ');
    console.log(x)

    console.log(`${Math.max(...x)} ${Math.min(...x)}`)
console.log(n.replace(/\b/g, ''));
 
     let h = n.replace(/ /g, '');
     let c = [h]
     console.log(h)
     console.log(c)
     let b = c + '';
     let m = Array.from(b)
     console.log(m);
     let v = [];
     v.join('')
         /*
             for (let i = 0; i < m.length; i++) {
                 v.push(c[i]);
                 console.log(v);

         */
//let x = [n];
//x.join('')
//console.log(x);

/*let m = Array.from(n)
console.log(m);
let max = m[0];
let min = m[0];
for (let i = 0; i < m.length; i++) {
    if (m[i] < min) {
        min = m[i];
        console.log(min);

    } else if (m[i] > max) {
        max = m[i];
        console.log(max);

    }
}*/
// console.log(+out);
//return max + min;




document.querySelector('.b').onclick = f19;