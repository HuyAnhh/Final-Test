let A = Number(prompt("Nhập số thứ nhất"))
let B = Number(prompt("Nhập số thứ hai"))


for (let i = A ; i < B ; i++) {
    if (Math.sqrt(i) % 1 == 0) {
        console.log(i + " là số chính phương")
    }
}

