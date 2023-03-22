



$(document).ready(function () {
    let id = $("input").val();
    $("form").submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: `https://api.aladhan.com/v1/calendar/2017/4?latitude=40.4093&longitude=49.8671&method=${id}`,
            method: "get",
            success: function (data) {
                console.log("birincde");
                console.log(data);
              
            }



        })
    })

    let id2 = $("#input").val();
    $("form").submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: `http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=${id2}`,
            method: "get",
            success: function (data) {
                console.log("yeni");
                data.data.forEach(element => {
                    let array = Object.entries(element.timings)
                    console.log(array);
                });
            }
        })



    })
})


















