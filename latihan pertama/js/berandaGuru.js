function getClass(id){
    $.ajax({
        url: "http://127.0.0.1:5003/kelasguru/" + id,
        method: "GET",
        success: function (response) {
            for (var i = 0; i < response.kelas.length;i++){
                console.log(response.kelas[i].class_name)
                var classTampil = `
                <div class="list1">
                    <div class="juduldiv">
                        <span style="color: black; font-family: Verdana,Arial,Helvetica,Georgia; font-size: 20px;"><a href="classguru.html?id=${response.kelas[i].id_kelas}">${response.kelas[i].class_name}</a></span>
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
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
ids = getCookie('userId')
console.log(ids)
getClass(ids)

function registerKelas(){
    var classnamenya = $('input#class_name').val()
    console.log(classnamenya)
    $.ajax({
        url: "http://127.0.0.1:5003/registerkelas",
        method: "POST",
        
        contentType: 'application/JSON',
        data: JSON.stringify({
            class_name: classnamenya,
            teacher: parseInt(ids)
        }),
        success: function (response) {
            window.location.href = 'berandaGuru.html'
        },
        error: function(errornya){
            alert("isi dengan benar")
        },
    })
}

function getName(id){
    $.ajax({
        url: "http://127.0.0.1:5003/guru/" + id,
        method: "GET",
        success: function (response) {
                var namaTampil = `
                        <p>${response.full_name}</p>`
                $('.namanya').append(namaTampil)
        },
        error: function(errornya){
            console.log(errornya)
        },
        complete: function(){
            // alert('Selamat datang di kelasroom')
        }
    })
}
getName(ids)


function openside() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeside() {
    document.getElementById("mySidebar").style.width = "0";
  }
