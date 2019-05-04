$(document).ready(function () {

    /* Gestion des widgets */

    $('#header span').on('click', function () {
        switch ($(this).attr('id')) {
            case 'watch':
                $('#dwatch').show().draggable();
                $('#dwatch p').remove();
                $('#dwatch').append('<p>' + Jour() + '<br/>' + Heure() + '</p>');
                break;
            case 'video':
                $('#dvideo').show().draggable();
                $("#dvideo button").on('click', function () {
                    DonneesYouTube();
                    $('#dvideo .element iframe').remove();
                    $('#dvideo').css('overflow', 'auto');
                });
                break;
            case 'twitter':
                $('#dtwitter').show().draggable();
                $('#dtwitter p').remove();
                $('#dtwitter').append('<p><a class="twitter-timeline" href="https://twitter.com/sofoot?ref_src=twsrc%5Etfw" data-height="275">Tweets by sofoot</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></a></p>');
                break;
            case 'photo':
                $('#dphoto').show().draggable();
                $('#dphoto button').on('click', function () {
                    DonneesPhoto();
                    $('#dphoto .element p').remove();
                    $('#dphoto').css('overflow', 'auto');
                });
                break;
            case 'weather':
                $('#dweather').show().draggable();
                $('#dweather button').on('click', function () {
                    DonneesMeteo();
                    $('#dweather .element p').remove();
                });
                break;
            case 'info':
                $('#dinfo').show().draggable();
                $("#dinfo button").on('click', function () {
                    DonneesInfo();
                    $('#dinfo .element p').remove();
                    $('#dinfo').css('overflow', 'auto');
                });
                break;
        }
    });

    $(".bandeau img[src='img/croix.png']").on("click", function () {
        $(this).parent().parent().hide();
        $(this).parent().next().next().children().remove();
    });

    /* Gestion des différents thèmes */

    $("#Theme").on('click', function () {
        var value = "";
        var options = $("#Theme option").each(function () {
            value += $(this).val();
        });
        if (options[1].selected == true) {
            $("body").css("background-image", "url(img/gotham.jpg)");
            $("#header a").css("color", "paleTurquoise");
            $("#Theme").css({
                "color": "paleTurquoise",
                "background-color": "black"
            });
            $(".cadre").css({
                "border-color": "paleTurquoise",
                "color": "paleTurquoise",
                "background-image": "url(igAlexis/img/batarang.jpg)",
                "background-position": "right",
                "background-repeat": "no-repeat"
            });
            $(".element p").css({
                "color": "paleTurquoise"
            });
            $(".Applisearch").css({
                "border-color": "paleTurquoise"
            });
            $(".bandeau").css({
                "background-color": "paleTurquoise",
                "color": "black"
            });
        }
        if (options[2].selected == true) {
            $("body").css("background-image", "url(img/starwars.jpg)");
            $("#header a").css("color", "white");
            $("#Theme").css({
                "color": "white",
                "background-color": "black"
            });
            $(".cadre").css({
                "border-color": "darkgrey",
                "color": "darkgrey",
                "background-image": "url(img/empire.jpg)",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });
            $(".element p").css({
                "color": "grey"
            });
            $(".Applisearch").css({
                "border-color": "grey"
            });
            $(".bandeau").css({
                "background-color": "darkgrey",
                "color": "black"
            });
        }
        if (options[3].selected == true) {
            $("body").css("background-image", "url(img/nature.jpg)");
            $("#header a").css("color", "white");
            $("#Theme").css({
                "color": "white",
                "background-color": "darkgreen"
            });
            $(".cadre").css({
                "border-color": "darkgreen",
                "color": "black",
                "background-image": "url(../img/foret.jpg)",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });
            $(".element p").css({
                "color": "black"
            });
            $(".Applisearch").css({
                "border-color": "darkgreen"
            });
            $(".bandeau").css({
                "background-color": "darkgreen",
                "color": "white"
            });
        }
        if (options[4].selected == true) {
            $("body").css("background-image", "url(img/mer.jpg)");
            $("#header a").css("color", "white");
            $("#Theme").css({
                "color": "white",
                "background-color": "dodgerblue"
            });
            $(".cadre").css({
                "border-color": "dodgerblue",
                "color": "black",
                "background-image": "url(../img/plage.jpg)",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });
            $(".element p").css({
                "color": "black"
            });
            $(".Applisearch").css({
                "border-color": "dodgerblue"
            });
            $(".bandeau").css({
                "background-color": "dodgerBlue",
                "color": "black"
            });
        }
        if (options[5].selected == true) {
            $("body").css("background-image", "url(img/avengers.jpg)");
            $("#header a").css("color", "white");
            $("#Theme").css({
                "color": "white",
                "background-color": "black"
            });
            $(".cadre").css({
                "border-color": "black",
                "color": "white",
                "background-image": "url(../img/assembled.jpg)",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });
            $(".element p").css({
                "color": "white"
            });
            $(".Applisearch").css({
                "border-color": "black"
            });
            $(".bandeau").css({
                "background-color": "brown",
                "color": "white"
            });
        }
    });



    /* Fonctions des Widgets */

    function DonneesInfo() {
        var query = $("#dinfo .Applisearch").val();
        var reqI = new XMLHttpRequest();
        reqI.open("GET", 'https://newsapi.org/v2/everything?q=' + query + '&from=2019-04-08&language=fr&sortBy=popularity&apiKey=34303e0e54684ed19a95b0971d388be8', true);
        reqI.onreadystatechange = function () {
            if (reqI.readyState == 4 && reqI.status == 200) {
                donnees = JSON.parse(reqI.responseText);
                $('#dinfo .element p').remove();
                for (var i = 0; i < 5; i++) {
                    $("#dinfo .element").append(`<p><img src="` +
                        donnees["articles"][i]["urlToImage"] + `"alt="image article">
                            <a href="` + donnees["articles"][i]["url"] + `">` +
                        donnees["articles"][i]["title"] + "</a> - " +
                        donnees["articles"][i]["source"]["name"] + "</p>");
                }
            }
        }
        reqI.send(null);
    }

    function DonneesYouTube() {
        var query = $("#dvideo .Applisearch").val();
        var reqY = new XMLHttpRequest();
        reqY.open("GET", 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBmlDYMGt1CIV3gogYU-BL-kJ5sYsnLEjU&q=' + query + '&type=video', true);
        reqY.onreadystatechange = function () {
            if (reqY.readyState == 4 && reqY.status == 200) {
                donnees = JSON.parse(reqY.responseText);
                $("#dvideo .element iframe").remove();
                $("#dvideo .element").append(`<iframe width="380" height="380" src="https://www.youtube.com/embed/` +
                    donnees["items"][0]["id"]["videoId"] + `"?autoplay=1>`);
            }
        }
        reqY.send(null);
    }

    function DonneesMeteo() {
        var query = $("#dweather .Applisearch").val();
        var reqM = new XMLHttpRequest();
        reqM.open("GET", 'https://api.apixu.com/v1/current.json?key=2d4ae1ea829f467eb04184711191104&lang=fr&q=' + query, true);
        reqM.onreadystatechange = function () {
            if (reqM.readyState == 4 && reqM.status == 200) {
                donnees = JSON.parse(reqM.responseText);
                $('#dweather .element p').remove();
                $("#dweather .element").append("<p>Ville : " + donnees["location"]["name"] +
                    " <br/> Région : " + donnees["location"]["region"] +
                    " <br/> Pays : " + donnees["location"]["country"] +
                    " <br/> Date : " + donnees["location"]["localtime"] +
                    " <br/> Météo : " + donnees["current"]["condition"]["text"] +
                    " <br/> Température : " + donnees["current"]["temp_c"] + "°" +
                    " <br/> <img src=http:" + donnees["current"]["condition"]["icon"] + " </p>");
            }
        }
        reqM.send(null);
    }

    function Jour() {
        var dateDuJour = new Date();
        var options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return dateDuJour.toLocaleDateString('fr-FR', options);
    }

    function Heure() {
        var dateDuJour = new Date();
        var options = {
            hour: '2-digit',
            minute: '2-digit'
        };
        return dateDuJour.toLocaleTimeString('fr-FR', options);
    }

    function DonneesPhoto() {
        var query = $("#dphoto .Applisearch").val();
        var reqP = new XMLHttpRequest();
        reqP.open("GET", 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=1f8f2dbda9aa4dd55eecdd6fd5f0ce42&safe_search=1&content_type=1&per_page=5&text=' + query, true);
        reqP.onreadystatechange = function () {
            if (reqP.readyState == 4 && reqP.status == 200) {
                donnees = JSON.parse(reqP.responseText);
                $('#dphoto .element p').remove();
                for (var i = 0; i < 5; i++) {
                    $("#dphoto .element").append("<p><img src='https://farm" + donnees["photos"]["photo"][i]["farm"] +
                        ".staticflickr.com/" +
                        donnees["photos"]["photo"][i]["server"] +
                        "/" + donnees["photos"]["photo"][i]["id"] +
                        "_" + donnees["photos"]["photo"][i]["secret"] + ".jpg'></p>");
                }
            }
        }
        reqP.send(null);
    }
});