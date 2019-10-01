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

function getMyClass(id){
    $.ajax({
        url: "http://127.0.0.1:5003/myclass/" + id,
        method: "GET",
        success: function (response) {
            for (var i = 0; i < response.myclass.length;i++){
                // console.log(response.myclass[i].class_name)
                var classTampil = `
                <div class="list1">
                    <div class="juduldiv">
                        <span style="color: black; font-family: Verdana,Arial,Helvetica,Georgia; font-size: 20px;"><a href="class.html?id=${response.myclass[i].student_id}">${response.myclass[i].class_name}</a></span>
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

getMyClass(ids)

function getName(id){
    $.ajax({
        url: "http://127.0.0.1:5003/siswa/" + id,
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
