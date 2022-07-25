/* Soal */
/* Buat loop yang mencetak angka 1-100, 
JIKA kelipatan 3 maka outputnya "Fizz" , 
JIKA kelipatan 5 outputnya "Buzz" 
dan JIKA kelipatan 3 dan 5 keluarkan 'FizzBuzz' */

/* Solusi */
for (let i = 1; i <= 100; i++) {
    let temp = "";
    if (i % 3 === 0)
        temp += "Fizz"
    if(i % 5 === 0)
        temp += "Buzz"
    if(temp === "")
        temp = i;
    console.log(temp);
}