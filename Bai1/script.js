let A = parseInt(prompt("Nhập số của bạn"))
let B = parseInt(prompt("Nhập số của bạn"))

let flag = true

for (let u = A ; u <= B ; u++) {
    if (u < 2) {
    console.log(u + ": không phải là số nguyên tố")
} else {
    for (let i = 2; i < u-1 ; i++) {
        if (u % i === 0) {
            console.log(u + ": không phải là số nguyên tố");
            break;
        }else {
            console.log(u + ": là số nguyên tố")
        }
    }   
}
}





