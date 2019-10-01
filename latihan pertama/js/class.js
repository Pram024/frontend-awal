function getClass(id){
    $.ajax({
        url: 'http://localhost:5003/kelas/' + id,
        method: 'GET',
        success: function (response) {
            console.log(response)
            var classTampil = `
            <div class="list1">
                    <div class="juduldiv">
                        <a onclick="">${response.class_name}</a>
                    </div>
                </div>`
            $('.container').append(classTampil)
        },
        error: function(errornya){
            console.log(errornya)
            alert(JSON.parse(errornya.responseText))
        }
    });
}

var url_string = window.location.href
var url = new URL(url_string);
var id = Number(url.searchParams.get("id"));
getClass(id)

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

function masukKelas(){
    $.ajax({
        url: "http://127.0.0.1:5003/masukkelas",
        method: "POST",
        contentType: 'application/JSON',
        data: JSON.stringify({
            student_id: parseInt(ids),
            class_id: parseInt(id)
        }),
        success: function (response) {
            alert("anda masuk kelas")
            window.close()
            window.location.href = 'class.html?'+'id='+id
        },
        error: function(errornya){
            alert("masuk kelas gagal")
        },
    })
}
function getSoalnyah(id){
    $.ajax({
        url: "http://127.0.0.1:5003/mysoal/" + id,
        method: "GET",
        success: function (response) {
            for (var i = 0; i < response.mysoal.length;i++){
                var classTampil = `
                <div class="soalnyah">
                    <b>${response.mysoal[i].question}</b>
                    <div class="jawabanyah">
                        <input type="text" id="answer${response.mysoal[i].id_tugas}" class="form_login" placeholder="masukan jawabanmu di sini">
                        <input type="submit" class="tombol_register" value="Submit" onclick="registerJawaban(${response.mysoal[i].id_tugas})">
                    </div>
                </div>`

                $('.kumpulansoal').append(classTampil)
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
getSoalnyah(id)

function registerJawaban(idtugas){
    var answerjwb = $('input#answer'+idtugas).val()
    $.ajax({
        url: "http://127.0.0.1:5003/registerjawaban",
        method: "POST",
        
        contentType: 'application/JSON',
        data: JSON.stringify({
            answer: answerjwb,
            student_id:parseInt(ids),
            // score:scorenya,
            classwork_id: parseInt(idtugas)
        }),
        success: function (response) {
            alert("Jawaban telah tersubmit")
            window.close()
            window.location.href = 'class.html?'+'id='+id
        },
        error: function(errornya){
            alert("submit gagal")
        },
    })
}

// function scoreMurid(id){
//     $.ajax({
//         url: "http://127.0.0.1:5003/tugas/"+ id,
//         method: "GET",
           
//         success: function (response) {
//             console.log(response)
//             var jawabnya = response.answer_teacher
//             return jawabnya
//         },
//         error: function(errornya){
//             alert("submit gagal")
//         },
//     })
// }
   
function getCekKelas(){
    $.ajax({
        url: "http://127.0.0.1:5003/allmasukkelas",
        method: "GET",
        success: function (response) {
            var x = document.getElementsByClassName("kumpulansoal")
            for (var i = 0; i < response.masukkelas.length;i++){
                if (ids == response.masukkelas[i].student_id && id == response.masukkelas[i].class_id){
                    for (var j = 0; j < 101; j++){
                    x[j].style.visibility='visible';
                    }}
        }},
        error: function(errornya){
            console.log(errornya)
        },
    })
}
getCekKelas()

function studentScore(id){
    $.ajax({
        url: "http://127.0.0.1:5003/scorenya/"+ids,
        method: "GET",
        success: function(response){
            var x = 0;
            for (var i=0;i<response.scorenya.length;i++){
                if (response.scorenya[i].student_id==ids && response.scorenya[i].id_kelas==id){
                    x = x + parseInt(response.scorenya[i].score);
                    console.log(x)
                    
                }
            }
            var scoreku = `<div class="scoreku"><b>My Score : ${x}</b></div>`;
            $('.score').append(scoreku);
            console.log(x)
            },
        error:function(errornya){
            alert("Error");
        }
    })
}
studentScore(id)


function refreshPage(){
    window.location.reload();
}
function openside() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeside() {
    document.getElementById("mySidebar").style.width = "0";
  }