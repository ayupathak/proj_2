function getRecommendation() {
    var genreSelect = document.getElementById("genre");
    var genre = genreSelect.value;
  
    // Movie recommendations based on genre
    var movies = {
      "Action": ["The Dark Knight", "Inception", "The Matrix", "John Wick"],
      "Comedy": ["Superbad", "Anchorman", "Bridesmaids", "Airplane!"],
      "Drama": ["The Shawshank Redemption", "Fight Club", "Pulp Fiction", "The Godfather"],
      "Sci-Fi": ["Interstellar", "Blade Runner", "The Terminator", "Star Wars"]
    };
  
    var resultDiv = document.getElementById("result");
    var recommendations = movies[genre];
  
    if (recommendations) {
      var randomIndex = Math.floor(Math.random() * recommendations.length);
      var recommendation = recommendations[randomIndex];
  
      resultDiv.innerHTML = "Recommended movie: " + recommendation;
    } else {
      resultDiv.innerHTML = "No recommendations found for the selected genre.";
    }
  }
  