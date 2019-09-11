// console.log("helocju")

// var greet = "selamat datang ";
// var name = "ANDRI PRAMANA";

// var greeting = greet + name;
// console.log(greeting);
// alert(greeting);

// var angka = 24;

// if (angka == 10){
//     alert("angka sekarang: "+ angka);
// } else if(angka > 10) {
//     alert("angka sekarang lebih dari 10, "+ angka);
// } else{
//     alert(angka);
// }

var kendaraan = ["mobil", "motor"]

kendaraan.push("becak");
console.log(kendaraan);

for (var i = 0; i < kendaraan.length; i++){
    console.log(kendaraan[i])
}

var dict = {
    number: 2
}
//cara akses dicrionary / object
dict.number;
dict["number"];

console.log(dict.number);
console.log(dict["number"]);

dict.kelas = "makers";
dict["alamat"] = "jl kyai Gede"

console.log(dict)

var biodata = {
    kantor: [
        {
            nama: "pram1",
            alamat: "bandung",
            telepon: [1213143123,0000000],
            game: {
                mobile: "PUBG",
                PC: "dota 2",
                PS: ["winning", "CTR"]
            }
        },
        {
            nama: "pram",
            alamat: "smd" 
        }
    ],
    rumah: [
        {
            nama: "robbby",
            alamat: "cimaho",
            telepon: [9482949234,11111111111]
        },
        {
            nama : "hirzi",
            alamat : "dago"
        }
    ]
}

console.log(biodata.kantor[0].game.PS[1])

var xhr = new XMLHttpRequest();

// function getUser() {
//     xhr.open("get","http://localhost:2424/users/1");
//     xhr.send();
//     xhr.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status < 400) {
//             respon = JSON.parse(this.response);
//             console.log(respon)
//         } else if (this.readyState == 4){
//             rasponse = JSON.parse(this.response);
//             console.log(respon)
//         }
//     }
// }
// getUser()

// function getClass() {
//     xhr.open("get","http://localhost:2424/class/1");
//     xhr.send();
//     xhr.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status < 400) {
//             respon = JSON.parse(this.response);
//             console.log(respon)
//         } else if (this.readyState == 4){
//             rasponse = JSON.parse(this.response);
//             console.log(respon)
//         }
//     }
// }
// getClass()

// function getAllUsers() {
//     xhr.open("get","http://localhost:2424/users/");
//     xhr.send();
//     xhr.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status < 400) {
//             respon = JSON.parse(this.response);
//             console.log(respon)
//         } else if (this.readyState == 4){
//             rasponse = JSON.parse(this.response);
//             console.log(respon)
//         }
//     }
// }
// getAllUsers()

// function login(){
//     xhr.open("POST", "http://127.0.0.1:2424/login");
//     xhr.setRequestHeader("content-Type", "application/json");
//     xhr.send(JSON.stringify({
//         "username":"guru2",
//         "password":'aaa'
//     }))
//         xhr.onreadystatechange = function(){
//             if (this.readyState == 4 && this.status < 400) {
//                 respon = JSON.parse(this.response);
//                 console.log(respon)
//         } else if (this.readyState == 4){
//             rasponse = JSON.parse(this.response);
//             console.log(respon)
//         }
//     }
// }
// login()

// function createClass(){
//     xhr.open("POST", "http://127.0.0.1:2424/class");
//     xhr.setRequestHeader("content-Type", "application/json");
//     xhr.send(JSON.stringify({
//         "classname":"fotografi",
//         "classid":21,
//         "teachers":13
//     }))
//         xhr.onreadystatechange = function(){
//             if (this.readyState == 4 && this.status < 400) {
//                 respon = JSON.parse(this.response);
//                 console.log(respon)
//         } else if (this.readyState == 4){
//             rasponse = JSON.parse(this.response);
//             console.log(respon)
//         }
//     }
// }
// createClass()

function getClasses(){
    $.ajax({
        url: "http://127.0.0.1:2424/classes",
        method: "GET",
        success: function (response) {
            console.log(response)
            for (var i = 0; i < response.length;i++){
                var classTampil = `
                <div class="list1">
                    <div class="juduldiv">
                        <span style="color: black; font-family: Verdana,Arial,Helvetica,Georgia; font-size: 20px;"><a href="class.html?id=${response[i].classid}">${response[i].classname}</a></span>
                    </div>
                    <br>
                    <div>
                        <img src="../asset/images.jpg" alt=""height="100px">
                    </div>
                </div>`
                $('.container').append(classTampil)
            }

        },
        error: function(errornya){
            console.log(errornya)
        },
        complete: function(){
            // alert('Selamat datang di kelasroom')
        }
    })
}
getClasses()
function openside() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeside() {
    document.getElementById("mySidebar").style.width = "0";
  }