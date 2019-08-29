function register(){
    var userIdnya = $('input#userId').val()
    var usernamenya = $('input#username').val()
    var fullnamenya = $('input#fullname').val()
    var passwordnya = $('input#password').val()
    var emailnya = $('input#email').val()

    console.log(userIdnya)
    console.log(usernamenya)
    console.log(fullnamenya)
    console.log(passwordnya)
    console.log(emailnya)
    
    $.ajax({
        url: "http://127.0.0.1:2424/register",
        method: "POST",
        
        contentType: 'application/JSON',
        data: JSON.stringify({
            userId: userIdnya,
            username: usernamenya,
            fullName: fullnamenya,
            password: passwordnya,
            email: emailnya
        }),
        success: function (response) {
            alert(response.message)
            window.location.href = '../index.html'
        },
        error: function(errornya){
            alert("isi dengan benar")
        },
    })
}