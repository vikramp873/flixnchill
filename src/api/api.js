const API_key = "69d33ef9547a4692c3057b2f9beb7718"

const api = {
   fetchTrending: `/trending/all/week?api_key=${API_key}&language=en-US`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_key}&with_networks=213`,
   fetchTopRated: `/movie/top_rated?api_key=${API_key}&language=en-US`,
}

export default api;