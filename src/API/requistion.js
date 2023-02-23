import { TMDB_API_KEY, YOUTUBE_API_KEY } from "./API_KEY";

export const searchYoutubeVideos = (q) => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=10&q=${q}&key=${YOUTUBE_API_KEY}`).then(resp => resp.json()).then(data => data.items).catch(err => '')
}
export const showYoutubeVideosThumbanils = (videos) => {
    videos.map(video => <img src={`https://img.youtube.com/vi/${video.id.videoId}/hqdefault.jpg`} alt="Thumbnail" />
    )
}

export const searchMovies = async (q) => {
    q = q.toLowerCase()
    const movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${q}`).then(resp => resp.json()).then(data => data.results.slice(0, 10))
    return movies
}
export const showMovieData = (movie) => {
    return <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Poster" />

}