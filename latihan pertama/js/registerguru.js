function register(){
    var usernamenya = $('input#user_name').val()
    var passwordnya = $('input#password').val()
    var fullnamenya = $('input#full_name').val()
    var emailnya = $('input#email').val()
    var alamatnya = $('input#alamat').val()
    var no_tlpnya = $('input#no_tlp').val()

    console.log(usernamenya)
    console.log(passwordnya)
    console.log(fullnamenya)
    console.log(emailnya)
    console.log(alamatnya)
    console.log(no_tlpnya)
    
    $.ajax({
        url: "http://127.0.0.1:5003/registerguru",
        method: "POST",
        
        contentType: 'application/JSON',
        data: JSON.stringify({
            user_name: usernamenya,
            password: passwordnya,
            full_name: fullnamenya,
            email: emailnya,
            alamat: alamatnya,
            no_tlp: no_tlpnya
        }),
        success: function (response) {
            alert("Register Sebagai Guru Berhasil. Silahkan Login")
            window.location.href = 'loginGuru.html'
        },
        error: function(errornya){
            alert("isi dengan benar")
        },
    })
}