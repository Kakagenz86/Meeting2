const nama = "KakaGenz";
let usia = 18

function generateBiodata() {
    if (usia == 36) { //false
        // INI ADALAH KONDISI PERTAMA
        console.log(`anda remaja`);
    } else {
        // INI ADALAH JIKA KONDISI TIDAK TERPENUHI
        console.log(`anda tidak remaja`);
    }
}

console.log(nama);
console.log(usia);

generateBiodata();

