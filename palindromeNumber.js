const palindromeAngka = (num)=>{
    
    let angka = num;
    for (i=0; i < 10; i--){
    
        arr = [];
        arr = [...String(angka)];

        if(arr[0] === arr[arr.length-1]){
            return `${angka}`
        } else {
            angka = angka + 1
        }
    }

}

console.time(`Countdown Time`)
console.log(palindromeAngka(180))
console.timeEnd(`Countdown Time`)