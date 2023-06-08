$(document).ready(function(){
    var api_key = "y35KhSr7XMEekKAYyBXuMVYLAFKp2T3I45Opbradn3O2MXKHiARHOLFD"

    $("#mySearch").submit(function(event){
        event.preventDefault()
        var search = $("#mySearch").val()
        imagesearch()
    })
    function imagesearch(){
        $.ajax({
            method: 'GET',
            beforeSend: function (xhr){
            xhr.setRequestHeader ("Authorization", api_key);
            },
            URL:"https://api.pexels.com/v1/search?query="+search+"&per_page=20&page=1",  
            success: function (data){
                console.log(data)
            }
        })
    }
});