$(document).ready(function () {

    $(document).on({
        ajaxStart: function () {
            $(".dot-spinner").removeClass("d-none");
            $("section").addClass("d-none")

        },
        ajaxStop: function () {
            $("section").removeClass("d-none")

            $(".dot-spinner").addClass("d-none");
            $("#locationSpan").text(($("#location").val()).toUpperCase());

        }
    });
    $("form").submit(function (e) {

        e.preventDefault();
        $("tbody").html("");


        let month2 = Number($('#month option:selected').val());
        let year2 = Number($("#year2").val());
        let location = ($("#location").val()).toLowerCase();

        $.ajax({
            method: 'GET',
            url: `https://api.api-ninjas.com/v1/city?name=${location} `,
            headers: { 'X-Api-Key': 'TuyFrdQlR5RsiT4sRomH60fzCPqzpxjEq0UfHFyw' },
            contentType: 'application/json',
            success: function (result) {
                if (result.length === 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'City does not exist!',
                    });
                    return; // Prevent further AJAX calls if city doesn't exist
                }


                $.ajax({
                    url: `https://api.aladhan.com/v1/calendar/${year2}/${month2}?latitude=${(result[0]).latitude}&longitude=${(result[0]).longitude}&method=2`,
                    method: "get",
                    success: function (whole) {


                        id = 1;
                        whole.data.forEach(element => {
                            let dataMonth = ((element.date.gregorian.date).split("-"))[1];
                            let dataYear = ((element.date.gregorian.date).split("-"))[2];

                            if (dataMonth == month2 && dataYear == year2) {

                                $("tbody").append(`
                            <tr>
                            <th scope="row">${id}</th>
                            <td>${element.timings.Fajr}</td>
                            <td>${element.timings.Sunrise}</td>
                            <td>${element.timings.Dhuhr}</td>
                            <td>${element.timings.Asr}</td>
                            <td>${element.timings.Sunset}</td>
                            <td>${element.timings.Maghrib}</td>
                            <td>${element.timings.Isha}</td>
                            <td>${element.timings.Imsak}</td>
                            <td>${element.timings.Midnight}</td>
                            <td>${element.timings.Firstthird}</td>
                            <td>${element.timings.Lastthird}</td>
                            </tr>
                        `);
                                id += 1;
                            }
                        })
                    },
                    error: function (error) {

                    }
                })
            },
            error: function (error) {
                if (error.status == 400) {

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'City does not exist!',
                      })
                }

            }


        });
    })
})







