function login(){
    var usernamenya = $('input#username').val()
    var passwordnya = $('input#password').val()
    console.log(usernamenya)
    console.log(passwordnya)
    $.ajax({
        url: "http://127.0.0.1:5003/loginguru",
        method: "POST",
        
        contentType: 'application/JSON',
        data: JSON.stringify({
            user_name: usernamenya,
            password: passwordnya
        }),
        success: function (response) {
            createCookie("userId", response.id_guru,1)
            alert(response.message)
            window.location.href = 'berandaGuru.html'
        },
        error: function(errornya){
            alert(errornya.responseJSON.message);
            // console.error();
        },
    })
}
function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}