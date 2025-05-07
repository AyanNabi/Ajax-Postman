
$(document).ready(function () {

    $(document).on({
        ajaxStart: function () {
            $(".dot-spinner").removeClass("d-none");
            $(".container").addClass("d-none");
        },
        ajaxStop: function () {
            $(".dot-spinner").addClass("d-none");
            $(".container").removeClass("d-none");
            $("#locationSpan").text($("#location").val().toUpperCase());
            $("#myData").removeClass("d-none");
        }
    });
    
    $("form").submit(function (e) {

        e.preventDefault();

        var date1 = new Date($('#date').val());
        let day = date1.getDate();
        let month = date1.getMonth() + 1;
        let year = date1.getFullYear();

        let location = ($("#location").val()).toLowerCase();


        $.ajax({
            method: 'GET',
            url: `https://api.api-ninjas.com/v1/city?name=${location} `,
            headers: { 'X-Api-Key': 'TuyFrdQlR5RsiT4sRomH60fzCPqzpxjEq0UfHFyw' },
            contentType: 'application/json',
            success: function (result) {

                $.ajax({
                    url: `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${(result[0].latitude)}&longitude=${(result[0].longitude)}&method=2`,
                    method: "get",
                    success: function (whole) {

                        whole.data.forEach(element => {
                            let dataDay = ((element.date.gregorian.date).split("-"))[0];
                            let dataMonth = ((element.date.gregorian.date).split("-"))[1];
                            let dataYear = ((element.date.gregorian.date).split("-"))[2];

                            if (dataMonth == month && dataYear == year && dataDay == day) {

                                $("#Fajr").text(element.timings.Fajr);
                                $("#SUNRISE").text(element.timings.Sunrise);
                                $("#DHUHR").text(element.timings.Dhuhr);
                                $("#ASR").text(element.timings.Asr);
                                $("#Sunset").text(element.timings.Sunset);
                                $("#Maghrib").text(element.timings.Maghrib);
                                $("#Isha").text(element.timings.Isha);
                                $("#Imsak").text(element.timings.Imsak);
                                $("#Midnight").text(element.timings.Midnight);
                                $("#Firstthird").text(element.timings.Firstthird);
                                $("#Lastthird").text(element.timings.Lastthird);
                            }
                        })
                    },
                    err: function(data) {
                        console.log("no data");
                    }
                })
            }
        });


    })
})
























