$(document).ready(function () {

    $("form").submit(function (e) {
        e.preventDefault();

        let longtitude = $("#longtitude").val();
        let latitude = $("#latitude").val();

        var date1 = new Date($('#date').val());
        let day = date1.getDate();
        let month = date1.getMonth() + 1;
        let year = date1.getFullYear();


        $.ajax({
            url: `http://api.aladhan.com/v1/calendar/${year}/${month}?latitude=51.508515&longitude=-0.1254872&method=2`,
            method: "get",
            success: function (whole) {
                $("table").append(`
                        
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Asr</th>
                  <th scope="col">Dhuhr</th>
                  <th scope="col">Fajr</th>
                  <th scope="col">Firstthird</th>
                  <th scope="col">Imsak</th>
                  <th scope="col">Isha</th>
                  <th scope="col">Lastthird</th>
                  <th scope="col">Maghrib</th>
                  <th scope="col">Midnight</th>
                  <th scope="col">Sunrise</th>
                  <th scope="col">Sunset</th>
                </tr>
              </thead>
                
                
                
                
                `)

                whole.data.forEach(element => {
                    let dataDay = ((element.date.gregorian.date).split("-"))[0];
                    let dataMonth = ((element.date.gregorian.date).split("-"))[1];
                    let dataYear = ((element.date.gregorian.date).split("-"))[2];

                    // aylara fore isleyir
                    if (dataMonth == month && dataYear == year) {
                        // $("table").append(`
                        // <tbody>
                        //     <tr>
                        //     <th scope="row">1</th>
                        //     <td>${element.timing.Asr}</td>
                        //     <td>${element.timing.Dhuhr}</td>
                        //     <td>${element.timing.Fajr}</td>
                        //     <td>${element.timing.Firstthird}</td>
                        //     <td>${element.timing.Imsak}</td>
                        //     <td>${element.timing.Isha}</td>
                        //     <td>${element.timing.Lastthird}</td>
                        //     <td>${element.timing.Maghrib}</td>
                        //     <td>${element.timing.Midnight}</td>
                        //     <td>${element.timing.Sunrise}</td>
                        //     <td>${element.timing.Sunset}</td>
                        //     </tr>
                            
                        // </tbody>
                                                
                        // `)
                        console.log(element.timings);
                    }
                    //gune gore ishleyir
                    // if (dataMonth == month && dataYear == year && dataDay == day) {
                    //     console.log(element);
                    // }

                });

            }

        })
    })


})


















