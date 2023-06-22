//Soru 1

// let not=prompt("Notunuzu giriniz.")

// function notYazdır(not){
//     if(not>0 && not<=50){
//          alert("ortalama ile geçtiniz")
//     }
//     else if(not>51 && not<=70){
//          alert("İyi ile geçtiniz")
//     }
//     else if(not>71 && not<=80){
//         alert("Pekiyi ile geçtiniz")
//     }
//     else if(not>= 90 && not<=100){
//         alert("Çok iyi ")
//     }
//     return `Aldığınız not : ${not}`
// }
// let sonuc =alert (notYazdır(not))

//Soru 2
// let user = {
//     name:"",
//     password:1234
// }
// function change(name){
//     user.name = "engin"
//     console.log(user.name)
// }
// change(name)

//Soru 3 
// let cumle ="Benim adım Engin Öztürk"

// function array(cumle){
//     let array =cumle.split(" ")
//     return array
// }
// console.log(array(cumle))

//Soru 4
// let user = [
//     {ad:"engin",yetki:"user",status:true},
//     {ad:"enes",yetki:"admin",status:true},
//     {ad:"melisa",yetki:"user",status:false}
// ]

// let isim =prompt("Lütfen bir isim giriniz.")
// function arrayİçinde(isim){
//     for(let i=0 ;i<user.length;i++){
//         if(isim == user[i].ad){
//             console.log(isim)
//         }   
//     }
//     return isim
        
// }
// let icinde=arrayİçinde(isim)
// function change(isim){
//     for(let i=0;i<user.length;i++){
//         if(isim == user[i].ad && user[i].yetki !="admin" ){
//             user.status=true
//         }
//     }
// }

// Soru 5
// let user = [
//         {ad:"engin",password:1023,gunlukHak:3},
//         {ad:"enes",password:12345,gunlukHak:3},
// ]

// function Login(){
//     let isim =prompt("Lütfen isminizi giriniz")
//     for (let i=0;i<user.length;i++){
//         if(user[i].ad===isim){
//             let sifre=prompt("Lütfen sifrenizi giriniz")
//             if(user[i].password==sifre){
//                 alert("Başarılı giriş yaptınız")
//                 break;
//             }else{
//                 if(user[i].password != sifre){
//                     user[i].gunlukHak =user[i].gunlukHak -1;
//                     alert("Hakkınız"+gunlukHak)
//                 }
//                 if(user[i].gunlukHak==0){
//                     alert("Hesabınız bloke oldu")
//                     return Login()
//                 }else{
//                     Login()
//                 }
               
//             }
//         }else{alert("Adınız Yanlış")}
//         return Login()
//     }
// }
// Login()
