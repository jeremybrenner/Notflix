// This API method will fetch actual data from the OMDB movie API, to better showcase suspend
// Randomly picks a page and term from whitelist 
export const fetchMovieDataLive = () => {
    const searchTerms = ['cats','dogs', 'space'];
    const searchTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
    const searchPage = Math.floor(Math.random() * 2 + 1);
    const API_URL = `https://www.omdbapi.com/?apikey=8caaa016`;

    const list = fetch(`${API_URL}&s=${searchTerm}&page=${searchPage}`)
        .then(response => {
            return response.json()
        });
    return list;
}

// This API method will mock data in case of a poor connection, or issues with API key
export function fetchMovieDataLocal() {
    return new Promise(resolve => {
        resolve([
          {
            imdbID: 0,
            Year: 2000,
            Poster: google.com,
            Title: "Cat Movie",
            Poster: "A movie about cats",
          },
          {
            imdbID: 1,
            Year: 2000,
            Poster: google.com,
            Title: "Dog Movie",
            Poster: "A movie about dogs",
          },
          {
            imdbID: 2,
            Year: 2000,
            Poster: google.com,
            Title: "Bee Movie",
            Poster: "A movie about bees, but not the one with Jerry",
          },
          {
            imdbID: 3,
            Year: 2000,
            Poster: google.com,
            Title: "Cat Movie 2",
            Poster: "A movie about cats",
          },
          {
            imdbID: 4,
            Year: 2000,
            Poster: google.com,
            Title: "Dog Movie 2",
            Poster: "A movie about dogs",
          },
          {
            imdbID: 5,
            Year: 2000,
            Poster: google.com,
            Title: "Bee Movie 2",
            Poster: "A movie about bees, but not the one with Jerry",
          },
          {
            imdbID: 6,
            Year: 2000,
            Poster: google.com,
            Title: "Cat Movie 3",
            Poster: "A movie about cats",
          },
          {
            imdbID: 7,
            Year: 2000,
            Poster: google.com,
            Title: "Dog Movie 3",
            Poster: "A movie about dogs",
          },
          {
            imdbID: 8,
            Year: 2000,
            Poster: google.com,
            Title: "Bee Movie 3",
            Poster: "A movie about bees, but not the one with Jerry",
          },
  
        ]);
    });
  }

  