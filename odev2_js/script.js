
//SORU 1
let limit = 30;
let yas1 = 25;
let yas2 =40;
if(yas1 <=limit ){
    console.log("hata");
    
}

//SORU 2
let sayi = 5;
if(sayi == 0 ){
    console.log("sayı: "+ 0)
}else if(sayi <= 0){console.log("sayı: "+"negatiftir.")}
else{
    console.log("sayı: " +"pozitiftir.")
}

//SORU 3
let sayi1 = 10;
let sayi2 =20;

let islem = "topla";
if(islem =="topla"){
    console.log(sayi1 + sayi2);
}
else if(islem =="carp"){
    console.log(sayi1*sayi2)
}
else if(islem =="bol"){
    console.log(sayi1/sayi2);
}



//SORU 4
let vize = 40;
let final =75;
let ortalama = vize*0.4 + final*0.6;
if(ortalama > 60){
    console.log("Geçti")
}
else{
    console.log("Kaldı")
}

//SORU 5 
let username = prompt("isminizi giriniz.");
let user_lastname ;
if(username.length>3){
    user_lastname = prompt("soyadınızı giriniz.")
}
else if(username == null){
    alert("islem iptal edildi.")
}
//SORU 6
let cuzdan =100;
let alinacakOlan = {
    urunadi:"telefon",
    fiyat:50
}
let istenen = prompt("ne almak istersiniz");

if(istenen == alinacakOlan.urunadi && cuzdan>alinacakOlan.fiyat){
    console.log(`ürün satın alındı.Bakiyeniz: ${cuzdan-alinacakOlan.fiyat}`)
}
else{
    console.log("Böyle bir ürün mevcut değildir.")
}
// SORU 7
let user = {
    ad:"",
    soyad:"",
    yas:""
}
let ad = prompt("isminizi giriniz.");
let soyad =prompt("soyisminizi giriniz")
let age =prompt("yasınızı giriniz")
if(ad){
    user.ad = ad
}
else{
    user.ad ="belirtilmedi"
}
if(soyad){
    user.soyad = soyad
}
else{
    user.soyad ="belirtilmedi"
}
if(age){
    user.yas = age
}
else{
    user.yas ="belirtilmedi"
}

console.log(`${user.ad} ${user.soyad} ${user.yas}`)