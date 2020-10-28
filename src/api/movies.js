// This API method will fetch actual data from the OMDB movie API, to better showcase suspend
export const fetchMovieDataLive = () => {
    const searchTerms = ['cats','dogs','marvel']
    const searchTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)]
    const API_URL = `https://www.omdbapi.com/?apikey=8caaa016`;
    const list = fetch(`${API_URL}&s=${searchTerm}`)
        .then(response => {
            console.log(response)
            return response.json()
        });
    return list;
}

// This API method will mock data in case of a poor connection, or issues with API key
export function fetchMovieDataLocal() {
    return new Promise(resolve => {
        resolve([
          {
            id: 0,
            title: "Cat Movie",
            description: "A movie about cats",
          },
          {
            id: 1,
            title: "Dog Movie",
            description: "A movie about dogs",
          },
          {
            id: 2,
            title: "Bee Movie",
            description: "A movie about bees, but not the one with Jerry",
          },
          {
            id: 3,
            title: "Cat Movie 2",
            description: "A movie about cats",
          },
          {
            id: 4,
            title: "Dog Movie 2",
            description: "A movie about dogs",
          },
          {
            id: 5,
            title: "Bee Movie 2",
            description: "A movie about bees, but not the one with Jerry",
          },
          {
            id: 6,
            title: "Cat Movie 3",
            description: "A movie about cats",
          },
          {
            id: 7,
            title: "Dog Movie 3",
            description: "A movie about dogs",
          },
          {
            id: 8,
            title: "Bee Movie 3",
            description: "A movie about bees, but not the one with Jerry",
          },
  
        ]);
    });
  }

  