function getClass(id){
    $.ajax({
        url: 'http://localhost:2424/class/' + id,
        method: 'GET',
        success: function (response) {
            console.log(response)
            var classTampil = `
            <div class="list1">
                    <div class="juduldiv">
                        <a onclick="">${response.data.classname}</a>
                    </div>
                </div>`
            $('.container').append(classTampil)
            for(i= 0 ; i < response.data.classwork.length;i++){
                var questionTampil = `
                <div class="classworker">
                <a>Tugas</a> <br>
                <span>
                <b>Kerjakan soal</b>: ${response.data.classwork[i].question}
                </span> <br>
                <textarea id="${response.data.classwork[i].classworkid}" class="komeng" type="text" placeholder="Tulis jawabanmu di sini . . ."></textarea> <br>
                <input type="submit" class="tombol_login" value="Submit Jawabanmu" onclick="assignClassWork( ${response.data.classwork[i].classworkid})"> 
            </div>
                `
            $('.PR').append(questionTampil)
            console.log(questionTampil)
            }
        },
        error: function(errornya){
            alert(JSON.parse(errornya.responseText))
        }
    });
}

var url_string = window.location.href
var url = new URL(url_string);
var id = Number(url.searchParams.get("id"));
getClass(id)
// ---------------------kirim Tugas-----------------
function assignClassWork(id){
    var answernya = $('textarea#' + id).val()

    console.log(answernya)
    kuki=getCookie("userId")
    $.ajax({
        url: "http://127.0.0.1:2424/assignclasswork/" + id ,
        method: "POST",
        
        contentType: 'application/JSON',
        data: JSON.stringify({
            "userId":parseInt (kuki),
	        "answers":answernya
        }),
        success: function (response) {
            alert(response.message)
        },
        error: function(errornya){
            alert("isi dengan benar")
        },
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
function openside() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeside() {
    document.getElementById("mySidebar").style.width = "0";
  }