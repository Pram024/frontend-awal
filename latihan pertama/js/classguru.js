function getClassguru(id){
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
            // for(i= 0 ; i < response.data.classwork.length;i++){
            //     var questionTampil = `
            //     <div class="classworker">
            //     <a>Tugas</a> <br>
            //     <span>
            //     <b>Kerjakan soal</b>: ${response.data.classwork[i].question}
            //     </span> <br>
            //     <textarea id="${response.data.classwork[i].classworkid}" class="komeng" type="text" placeholder="Tulis jawabanmu di sini . . ."></textarea> <br>
            //     <input type="submit" class="tombol_login" value="Submit Jawabanmu" onclick="assignClassWork( ${response.data.classwork[i].classworkid})"> 
            // </div>
            //     `
            // $('.PR').append(questionTampil)
            // console.log(questionTampil)
            // }
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
getClassguru(id)
// ---------------------kirim Tugas-----------------
// function assignClassWork(id){
//     var answernya = $('textarea#' + id).val()

//     console.log(answernya)
//     kuki=getCookie("userId")
//     $.ajax({
//         url: "http://127.0.0.1:2424/assignclasswork/" + id ,
//         method: "POST",
        
//         contentType: 'application/JSON',
//         data: JSON.stringify({
//             "userId":parseInt (kuki),
// 	        "answers":answernya
//         }),
//         success: function (response) {
//             alert(response.message)
//         },
//         error: function(errornya){
//             alert("isi dengan benar")
//         },
//     })
//     $('textarea#' + id).empty()
// }
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

function registerTugas(){
    var questionnya = $('input#question').val()
    var answernya = $('input#answer').val()
    console.log(questionnya)
    $.ajax({
        url: "http://127.0.0.1:5003/registertugas",
        method: "POST",
        
        contentType: 'application/JSON',
        data: JSON.stringify({
            kelas_id: parseInt(id),
            question: questionnya,
            answer_teacher: answernya
        }),
        success: function (response) {
            alert("Soal telah dibuat")
            window.close()
            window.location.href = 'classguru.html?'+'id='+id
            
        },
        error: function(errornya){
            alert("buat soal gagal")
            window.location.href = 'berandaGuru.html'

        },
    })
}

function getMurid(id){
    $.ajax({
        url: "http://127.0.0.1:5003/kelasjoin/" + id,
        method: "GET",
        success: function (response) {
            for (var i = 0; i < response.myclass.length;i++){
                console.log(response)
                var namaTampil = `
                        <ul>
                        <li>${response.myclass[i].full_name}</li>
                        </ul>`
                $('.listnama2').append(namaTampil)
            }
        },
        error: function(errornya){
            console.log(errornya)
        },
        complete: function(){
            // console.log(errornya)
        }
    })
}
getMurid(id)

function getSoal(id){
    $.ajax({
        url: "http://127.0.0.1:5003/mysoal/" + id,
        method: "GET",
        success: function (response) {
            for (var i = 0; i < response.mysoal.length;i++){
                var classTampil = `
                <div class="tugasguru">
                        <div><i class="fa fa-question-circle" aria-hidden="true"></i></div>
                        <div class="soalguru"><b>Soal:</b> ${response.mysoal[i].question}</div>
                        <div class="answernya"><b>Jawaban:</b> ${response.mysoal[i].answer_teacher}</div>
                    </div>`
                $('.soalnyaguru').append(classTampil)
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
getSoal(id)
function openside() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeside() {
    document.getElementById("mySidebar").style.width = "0";
  }