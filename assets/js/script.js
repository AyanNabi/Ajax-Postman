$(document).ready(function () {
    $("form").submit(function (e) {

        e.preventDefault();
        $("tbody").html("");


        // let longtitude = GpsLocation
        // let latitude = 
        // var date1 = new Date($('#date').val());
        // let day = date1.getDate();
        // let month = date1.getMonth() + 1;
        // let year = date1.getFullYear();

        let month2 = Number($('#month option:selected').val());
        let year2 = Number($("#year2").val());
        
       
            $.ajax({
                url: `http://api.aladhan.com/v1/calendar/${year2}/${month2}?latitude=51.508515&longitude=-0.1254872&method=2`,
                method: "get",
                success: function (whole) {
    
                    $("section").removeClass("d-none");
    
                  id = 1;
                    whole.data.forEach(element => {
                        let dataDay = ((element.date.gregorian.date).split("-"))[0];
                        let dataMonth = ((element.date.gregorian.date).split("-"))[1];
                        let dataYear = ((element.date.gregorian.date).split("-"))[2];
    
    
                        if (dataMonth == month2 && dataYear == year2) {
    
                            // $("tbody").append(`
                            //     <tr>
                            //     <th scope="row">${id}</th>
                            //     <td>${element.timings.Fajr}</td>
                            //     <td>${element.timings.Sunrise}</td>
                            //     <td>${element.timings.Dhuhr}</td>
                            //     <td>${element.timings.Asr}</td>
                            //     <td>${element.timings.Sunset}</td>
                            //     <td>${element.timings.Maghrib}</td>
                            //     <td>${element.timings.Isha}</td>
                            //     <td>${element.timings.Imsak}</td>
                            //     <td>${element.timings.Midnight}</td>
                            //     <td>${element.timings.Firstthird}</td>
                            //     <td>${element.timings.Lastthird}</td>
                            //     </tr>
                            // `);
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




                            // id += 1;
                        }
                        //gune gore ishleyir
                        // if (dataMonth == month && dataYear == year && dataDay == day) {
                        //     console.log(element);
                    } // }
    
                    
                    )
                   
    
                   
                }
            })
          





        })





      
       


    })


























