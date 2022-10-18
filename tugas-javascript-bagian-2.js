//soal 1
function cetakFunction() {
    console.log("Hallo Nama saya Andika!");
}

cetakFunction(); 

//soal 2
function cetakFunction(angka1,angka2) {
    let output = angka1+angka2
    return output
}
console.log (cetakFunction(20,7))

//soal 3
function Hello = () => {

    return "Hello"
    
    }
    
//soal 4
let arrayDaftarPeserta = {
    nama: "John Doe", 
    jenis_kelamin: "laki-laki", 
    judul: "baca buku" , 
    tahun: 1992}

    console.log(objDaftarPeserta)

//soal 5
var buah = [{nama: "Nanas", warna: "Kuning", adaBijinya: "false", harga:9000}, 
            {nama: "Jeruk", warna: "Oranye", adaBijinya: "true", harga:8000},
            {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: "true", harga:10000},
            {nama: "Pisang", warna: "Kuning", adaBijinya: "false", harga:5000}]
var arrayBuahFilter = buah.filter(function(item){
                return item.adaBijinya != "true";
             })
             
console.log(arrayBuahFilter)

//soal 6
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
 
 

 const {name, brand, year} = phone

 
 
 // kode di bawah ini jangan dirubah atau dihapus
 console.log(name, brand, year) 

//soal 7
let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172
}

let objOutput = {}

// kode diatas ini jangan di rubah atau di hapus sama sekali


  let objOutput = {...dataBukuTambahan,...buku}

// kode di bawah ini jangan dirubah atau dihapus
console.log(objOutput) 

//soal 8
let mobil = {
    merk : "bmw",
    color: "red",
    year : 2002
    }
    
const functionObject = (merk) => {
    return merk      
}
console.log(mobil)