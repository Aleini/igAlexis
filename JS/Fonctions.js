$(document).ready(function () {
    loadTheme();
    loadOptions();
    /* Gestion des widgets */

    $('#header li').on('click', function () {
        switch ($(this).attr('id')) {
            case 'watch':
                $('#dwatch').show().draggable();
                $('#dwatch p').remove();
                $('#dwatch').append('<p>' + Jour() + '</p>');
                $('#dwatch').append('<p id=Timer></p>');
                break;
            case 'video':
                $('#dvideo').show().draggable();
                $("#dvideo").resizable({
                    aspectRatio: true,
                    minWidth: 410,
                    maxWidth: 700,
                    minHeight: 410,
                    maxHeight: 700,
                    helper: "help"
                });
                $("#dvideo button").on('click', function () {
                    DonneesYouTube();
                    $('#dvideo .element iframe').remove();
                    $('#dvideo').css('overflow', 'auto');
                });
                break;
            case 'twitter':
                $('#dtwitter').show().draggable();
                $('#dtwitter p').remove();
                $('#dtwitter').append('<p><a class="twitter-timeline" href="https://twitter.com/sofoot?ref_src=twsrc%5Etfw" data-height="268">Tweets by sofoot</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></a></p>');
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
                });
                break;
            case 'cinema':
                $('#dcinema').show().draggable();
                $("#dcinema button").on('click', function () {
                    DonneesCinema();
                    $('#dcinema .element p').remove();
                    $('#dcinema').css('overflow', 'auto');
                });
                break;
        }
    });

    // Fermer les widgets
    $(".bandeau img[src='img/croix.png']").on("click", function () {
        $(this).parent().parent().hide();
        $(this).parent().next().next().children().remove();
    });

    /* Gestion des différents thèmes */

    $("#Theme").on('click', function () {
        $("#Theme option").each(function () {});

        switch ($("#Theme").val()) {
            case "bordeaux":
                $("body").css("background-image", "url(img/bordeaux.jpg)");
                $("#header a").css("color", "brown");
                $("#header a").hover(function () {
                    $(this).css("color", "bisque");
                }, function () {
                    $(this).css("color", "brown");
                });
                $("#Theme").css({
                    "color": "brown",
                    "background-color": "bisque"
                });
                $(".cadre").css({
                    "border-color": "brown",
                    "color": "white",
                    "background-image": "url(img/tonneau.jpg)",
                    "background-repeat": "no-repeat"
                });
                $(".element p").css({
                    "color": "white"
                });
                $(".Applisearch").css({
                    "border-color": "brown"
                });
                $(".bandeau").css({
                    "background-color": "brown",
                    "color": "white"
                });
                break;
            case "batman":
                $("body").css("background-image", "url(img/gotham.jpg)");
                $("#header a").css("color", "paleTurquoise");
                $("#header a").hover(function () {
                    $(this).css("color", "deepskyblue");
                }, function () {
                    $(this).css("color", "paleTurquoise");
                });
                $("#Theme").css({
                    "color": "paleTurquoise",
                    "background-color": "black"
                });
                $(".cadre").css({
                    "border-color": "paleTurquoise",
                    "color": "white",
                    "background-image": "url(img/batarang.jpg)",
                    "background-position": "center",
                    "background-repeat": "no-repeat"
                });
                $(".element p").css({
                    "color": "white"
                });
                $(".Applisearch").css({
                    "border-color": "paleTurquoise"
                });
                $(".bandeau").css({
                    "background-color": "paleTurquoise",
                    "color": "black"
                });
                break;
            case "starwars":
                $("body").css("background-image", "url(img/starwars.jpg)");
                $("#header a").css("color", "darkgrey");
                $("#header a").hover(function () {
                    $(this).css("color", "white");
                }, function () {
                    $(this).css("color", "darkgrey");
                });
                $("#Theme").css({
                    "color": "white",
                    "background-color": "black"
                });
                $(".cadre").css({
                    "border-color": "darkgrey",
                    "color": "white",
                    "background-image": "url(img/empire.jpg)",
                    "background-position": "center",
                    "background-repeat": "no-repeat"
                });
                $(".element p").css({
                    "color": "white"
                });
                $(".Applisearch").css({
                    "border-color": "grey"
                });
                $(".bandeau").css({
                    "background-color": "darkgrey",
                    "color": "black"
                });
                break;
            case "nature":
                $("body").css("background-image", "url(img/nature.jpg)");
                $("#header a").css("color", "white");
                $("#header a").hover(function () {
                    $(this).css("color", "darkgreen");
                }, function () {
                    $(this).css("color", "white");
                });
                $("#Theme").css({
                    "color": "white",
                    "background-color": "darkgreen"
                });
                $(".cadre").css({
                    "border-color": "darkgreen",
                    "color": "white",
                    "background-image": "url(img/foret.jpg)",
                    "background-position": "center",
                    "background-repeat": "no-repeat"
                });
                $(".element p").css({
                    "color": "white"
                });
                $(".Applisearch").css({
                    "border-color": "darkgreen"
                });
                $(".bandeau").css({
                    "background-color": "darkgreen",
                    "color": "white"
                });
                break;
            case "mer":
                $("body").css("background-image", "url(img/mer.jpg)");
                $("#header a").css("color", "white");
                $("#header a").hover(function () {
                    $(this).css("color", "dodgerblue");
                }, function () {
                    $(this).css("color", "white");
                });
                $("#Theme").css({
                    "color": "white",
                    "background-color": "dodgerblue"
                });
                $(".cadre").css({
                    "border-color": "dodgerblue",
                    "color": "white",
                    "background-image": "url(img/ocean.jpg)",
                    "background-position": "center",
                    "background-repeat": "no-repeat"
                });
                $(".element p").css({
                    "color": "white"
                });
                $(".Applisearch").css({
                    "border-color": "dodgerblue"
                });
                $(".bandeau").css({
                    "background-color": "dodgerBlue",
                    "color": "white"
                });
                break;
            case "avengers":
                $("body").css("background-image", "url(img/avengers.jpg)");
                $("#header a").css("color", "white");
                $("#header a").hover(function () {
                    $(this).css("color", "midnightblue");
                }, function () {
                    $(this).css("color", "white");
                });
                $("#Theme").css({
                    "color": "white",
                    "background-color": "black"
                });
                $(".cadre").css({
                    "border-color": "black",
                    "color": "white",
                    "background-image": "url(img/assembled.jpg)",
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
                    "background-color": "midnightblue",
                    "color": "white"
                });
                break;
        }
        window.localStorage.setItem("theme", $("#Theme").val());
    });

    /* Récupération des thèmes avec le localStorage */
    function loadOptions() {
        $("#Theme").change(function () {
            localStorage.setItem('choixtheme', this.value);
        });
        if (localStorage.getItem('choixtheme')) {
            $('#Theme').val(localStorage.getItem('choixtheme'));
        }
    }

    function loadTheme() {
        var theme = window.localStorage.getItem("theme");
        if (theme == "bordeaux") {
            $("body").css("background-image", "url(img/bordeaux.jpg)");
            $("#header a").css("color", "brown");
            $("#header a").hover(function () {
                $(this).css("color", "bisque");
            }, function () {
                $(this).css("color", "brown");
            });
            $("#Theme").css({
                "color": "brown",
                "background-color": "bisque"
            });
            $(".cadre").css({
                "border-color": "brown",
                "color": "white",
                "background-image": "url(img/tonneau.jpg)",
                "background-repeat": "no-repeat"
            });
            $(".element p").css({
                "color": "white"
            });
            $(".Applisearch").css({
                "border-color": "brown"
            });
            $(".bandeau").css({
                "background-color": "brown",
                "color": "white"
            });
        }
        if (theme == "batman") {
            $("body").css("background-image", "url(img/gotham.jpg)");
            $("#header a").css("color", "paleTurquoise");
            $("#header a").hover(function () {
                $(this).css("color", "deepskyblue");
            }, function () {
                $(this).css("color", "paleTurquoise");
            });
            $("#Theme").css({
                "color": "paleTurquoise",
                "background-color": "black"
            });
            $(".cadre").css({
                "border-color": "paleTurquoise",
                "color": "white",
                "background-image": "url(img/batarang.jpg)",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });
            $(".element p").css({
                "color": "white"
            });
            $(".Applisearch").css({
                "border-color": "paleTurquoise"
            });
            $(".bandeau").css({
                "background-color": "paleTurquoise",
                "color": "black"
            });
        }
        if (theme == "starwars") {
            $("body").css("background-image", "url(img/starwars.jpg)");
            $("#header a").css("color", "darkgrey");
            $("#header a").hover(function () {
                $(this).css("color", "white");
            }, function () {
                $(this).css("color", "darkgrey");
            });
            $("#Theme").css({
                "color": "white",
                "background-color": "black"
            });
            $(".cadre").css({
                "border-color": "darkgrey",
                "color": "white",
                "background-image": "url(img/empire.jpg)",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });
            $(".element p").css({
                "color": "white"
            });
            $(".Applisearch").css({
                "border-color": "grey"
            });
            $(".bandeau").css({
                "background-color": "darkgrey",
                "color": "black"
            });
        }
        if (theme == "nature") {
            $("body").css("background-image", "url(img/nature.jpg)");
            $("#header a").css("color", "white");
            $("#header a").hover(function () {
                $(this).css("color", "darkgreen");
            }, function () {
                $(this).css("color", "white");
            });
            $("#Theme").css({
                "color": "white",
                "background-color": "darkgreen"
            });
            $(".cadre").css({
                "border-color": "darkgreen",
                "color": "white",
                "background-image": "url(img/foret.jpg)",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });
            $(".element p").css({
                "color": "white"
            });
            $(".Applisearch").css({
                "border-color": "darkgreen"
            });
            $(".bandeau").css({
                "background-color": "darkgreen",
                "color": "white"
            });
        }
        if (theme == "mer") {
            $("body").css("background-image", "url(img/mer.jpg)");
            $("#header a").css("color", "white");
            $("#header a").hover(function () {
                $(this).css("color", "dodgerblue");
            }, function () {
                $(this).css("color", "white");
            });
            $("#Theme").css({
                "color": "white",
                "background-color": "dodgerblue"
            });
            $(".cadre").css({
                "border-color": "dodgerblue",
                "color": "white",
                "background-image": "url(img/ocean.jpg)",
                "background-position": "center",
                "background-repeat": "no-repeat"
            });
            $(".element p").css({
                "color": "white"
            });
            $(".Applisearch").css({
                "border-color": "dodgerblue"
            });
            $(".bandeau").css({
                "background-color": "dodgerBlue",
                "color": "white"
            });
        }
        if (theme == "avengers") {
            $("body").css("background-image", "url(img/avengers.jpg)");
            $("#header a").css("color", "white");
            $("#header a").hover(function () {
                $(this).css("color", "midnightblue");
            }, function () {
                $(this).css("color", "white");
            });
            $("#Theme").css({
                "color": "white",
                "background-color": "black"
            });
            $(".cadre").css({
                "border-color": "black",
                "color": "white",
                "background-image": "url(img/assembled.jpg)",
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
                "background-color": "midnightblue",
                "color": "white"
            });
        }
    }


    /* Fonctions des Widgets */

    function DonneesInfo() {
        var query = $("#dinfo .Applisearch").val();
        var reqI = new XMLHttpRequest();
        reqI.open("GET", 'https://newsapi.org/v2/everything?q=' + query + '&language=fr&sortBy=publishedAt&apiKey=34303e0e54684ed19a95b0971d388be8', true);
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
                $("#dvideo .element").append(`<iframe src="https://www.youtube.com/embed/` +
                    donnees["items"][0]["id"]["videoId"] + `"?autoplay=0>`);
                $("#dvideo .element iframe").css({
                    "width": "100%",
                    "height": "100%",
                    "position": "absolute"
                });
            }
        }
        reqY.send(null);
    }

    function DonneesMeteo() {
        var query = $("#dweather .Applisearch").val();
        var reqM = new XMLHttpRequest();
        reqM.open("GET", 'https://api.apixu.com/v1/forecast.json?key=2d4ae1ea829f467eb04184711191104&lang=fr&days=5&q=' + query, true);
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
                    " <br/> <img src=http:" + donnees["current"]["condition"]["icon"] +
                    " ><br/> Prévisions des 4 prochains jours : " +
                    " <br/> <img src=http:" + donnees["forecast"]["forecastday"]["1"]["day"]["condition"]["icon"] +
                    " ><img src=http:" + donnees["forecast"]["forecastday"]["2"]["day"]["condition"]["icon"] +
                    " ><img src=http:" + donnees["forecast"]["forecastday"]["3"]["day"]["condition"]["icon"] +
                    " ><img src=http:" + donnees["forecast"]["forecastday"]["4"]["day"]["condition"]["icon"] +
                    " ><br/><span> T° :" + donnees["forecast"]["forecastday"]["1"]["day"]["avgtemp_c"] + "</span>" +
                    " <span> T° :" + donnees["forecast"]["forecastday"]["2"]["day"]["avgtemp_c"] + "</span>" +
                    " <span> T° :" + donnees["forecast"]["forecastday"]["3"]["day"]["avgtemp_c"] + "</span>" +
                    " <span> T° :" + donnees["forecast"]["forecastday"]["4"]["day"]["avgtemp_c"] + "</span></p>");
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

    function horloge() {
        var timer = new Date();
        var h, m, s;
        h = timer.getHours();
        if (h < 10) h = "0" + h;
        m = timer.getMinutes();
        if (m < 10) m = "0" + m;
        s = timer.getSeconds();
        if (s < 10) s = "0" + s;
        $('#dwatch p#Timer').html(h + ' : ' + m + ' : ' + s);
    }

    var tm = setInterval(horloge, 1000);

    function DonneesPhoto() {
        var query = $("#dphoto .Applisearch").val();
        var reqP = new XMLHttpRequest();
        reqP.open("GET", 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=1f8f2dbda9aa4dd55eecdd6fd5f0ce42&safe_search=1&content_type=1&per_page=5&text=' + query, true);
        reqP.onreadystatechange = function () {
            if (reqP.readyState == 4 && reqP.status == 200) {
                donnees = JSON.parse(reqP.responseText);
                $("#dphoto .element p").remove();
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

    function DonneesCinema() {
        var query = $("#dcinema .Applisearch").val();
        var reqC = new XMLHttpRequest();
        reqC.open("GET", 'https://api.themoviedb.org/3/search/multi?api_key=caaac4e14164b677822839a3e0fa0661&language=fr&page=1&include_adult=false&query=' + query, true);
        reqC.onreadystatechange = function () {
            if (reqC.readyState == 4 && reqC.status == 200) {
                donnees = JSON.parse(reqC.responseText);
                if (donnees["results"]["0"]["media_type"] == "movie") {
                    $("#dcinema .element p").remove();
                    $("#dcinema .element").append("<p><img src='https://image.tmdb.org/t/p/w400" + donnees["results"]["0"]["poster_path"] + "'>" +
                        "<br/> Date de sortie : " + donnees["results"]["0"]["release_date"] +
                        "<br/> Evaluation TMDB : " + donnees["results"]["0"]["vote_average"] + "/10" +
                        "<br/><br/> Synopsis : " + donnees["results"]["0"]["overview"] + "</p>"
                    );
                };
                if (donnees["results"]["0"]["media_type"] == "tv") {
                    $("#dcinema .element p").remove();
                    $("#dcinema .element").append("<p><img src='https://image.tmdb.org/t/p/w400" + donnees["results"]["0"]["poster_path"] + "'>" +
                        "<br/> Date de première diffusion : " + donnees["results"]["0"]["first_air_date"] +
                        "<br/> Evaluation TMDB : " + donnees["results"]["0"]["vote_average"] + "/10" +
                        "<br/><br/> Histoire de la série : " + donnees["results"]["0"]["overview"] + "</p>"
                    )
                };
                if (donnees["results"]["0"]["media_type"] == "person") {
                    $("#dcinema .element p").remove();
                    $("#dcinema .element").append("<p><img src='https://image.tmdb.org/t/p/w400" + donnees["results"]["0"]["profile_path"] + "'>" +
                        "<br/><br/> Popularité TMDB : " + donnees["results"]["0"]["popularity"] +
                        "<br/> A joué dans : " + donnees["results"]["0"]["known_for"]["0"]["title"] + "<br/>" + donnees["results"]["0"]["known_for"]["1"]["title"] + "<br/>" + donnees["results"]["0"]["known_for"]["2"]["title"] + "</p>"
                    )
                };
            };
        }
        reqC.send(null);
    }
});