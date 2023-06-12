// SORU1
let kullanici = {
    username :"Engin",
    password :"012345"
}
let username=prompt("Kullanıcı Adınızı Giriniz.")
let password =prompt("Şifrenizi Giriniz.")

if(kullanici.username==username && kullanici.password==password){
    alert("Başarılı giriş yapıldı.")
}else if(kullanici.username==username || kullanici.password==!password){
    alert("Şifrenizi tekrar deneyiniz!")
}
else if(kullanici.username==!username || kullanici.password==password){
    alert("Kullanıcı adınızı tekrar deneyiniz!")
}
else{
    alert("Hatalı giriş yaptınız")
}

// Soru 2
let yas = 37
if(yas>=5 && yas<=14){
    console.log("Çocuk Grubu")
}else if(yas>=15 && yas<=25){
    console.log("Genç Grubu")
}
else if(yas>=25 && yas<=45){
    console.log("Yetişkin Grubu")
}
else if(yas>=45 && yas<=60){
    console.log("Orta Yaş Grubu")
}
else{
    console.log("Yaşlılar Grubu")
}

// Soru 3
let deg = prompt("Hava derecesini giriniz.")
if (deg<0){
    alert("Hava: "+"Soğuk")
}
else if(deg>0 && deg<20){
    alert("Hava: "+"Normal Sıcaklıkta")
}
else{
    alert("Hava: "+"Sıcak")
}
 
// Soru 4
let user ={
    ad:"Engin",
    hak:5,
    yasakli:true
}

let ad =prompt("Lütfen adınızı giriniz")
let hak =prompt("Bir sayı giriniz.")
if(user.ad== ad && user.hak > 1){
    alert("Erişim sağlandı")
}else if(user.ad== ad || user.yasakli == !true){
    alert("Erişim sağlandı")
}
else if(user.ad==ad && user.hak <1){
    alert("Erişim sağlanamaz: "+"Hak 1 den büyüktür.")
}
else if(user.ad != ad && user.hak >1){
    alert("Erişim sağlanamaz: "+"İsminizi yanlış girdiniz.")
}

// Soru 5


// Soru 6
let ürün = {
    ad:"Ali",
    ücret:50 ,
    müsteriTürü:"öğrenci"
}

if(ürün.müsteriTürü=="öğrenci"){
    ürün.ücret = ürün.ücret*0.5;
    console.log(ürün.ücret)
}