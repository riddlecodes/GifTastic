$(document).ready(function () {
    
    var topics = ["guitar", "drums", "piano", "trumpet", "trombone", "harmonica", "tuba", "ukulele", "mandolin", "lute", "sitar", "harp", "cello", "violin"];
    
    $.each(topics, function (index, value) {
        
        var button = $("<button>");
        button.attr("data-instrument", value);
        button.text(value);
        $("#musical-instruments").append(button);
        
    });



    $("button").on("click", function () {

        var instrument = $(this).attr("data-instrument");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            instrument + "&apikey=1Bs9bNPb6izjpiMSf42w3dMEWadK1FeM&limit=10";

        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {

                if (results[i].rating !== "r") {
                    
                    var p = $("<p>").text("Rating: " + results[i].rating);

                    var instrumentsImage = $("<img>");

                    var stillImage = results[i].images.fixed_height_still.url;

                    // var animatedImage = results[i].images.fixed_height_still.url);

                    instrumentsImage.attr("src", stillImage);

                    p.append(instrumentsImage);

                    $("#result").append(p);

                } // end of if

            } // end of for loop

        }); // end of ajax  

    }); // end of button click

}); // end of doc ready
