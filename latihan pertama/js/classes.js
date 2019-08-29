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
                        <span style="color: black; font-family: Verdana,Arial,Helvetica,Georgia; font-size: 20px;"><a href="page1.html">Makers Academy</a></span>
                    </div>
                    <p>Andri Pramana</p>
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
            alert('Sudah Komplet Gan')
        }
    })
}
getClasses()