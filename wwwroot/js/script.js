const apiKey = "ccdefeff";

document.getElementById("searchBtn").onclick = function () {

    let movie = document.getElementById("movieInput").value;

    fetch("https://www.omdbapi.com/?apikey=" + apiKey + "&t=" + movie)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            if (data.Response === "False") {
                document.getElementById("result").innerHTML = "Фильм не найден";
                return;
            }

            document.getElementById("result").innerHTML =
                "<h2>" + data.Title + "</h2>" +
                "<p>Год: " + data.Year + "</p>" +
                "<p>Рейтинг: " + data.imdbRating + "</p>" +
                "<p>Режиссёр: " + data.Director + "</p>" +
                "<p>Актёры: " + data.Actors + "</p>" +
                "<p>Описание: " + data.Plot + "</p>";
        })
        .catch(function () {
            document.getElementById("result").innerHTML = "Ошибка загрузки";
        });
};