import Hero from './Hero';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, key}) => {
const posterURl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
const detailURL = `/movies/${movie.id}`
  return (
    <div className='col-lg-3 col-md-3 col-2 my-4'>
    <div className="card" >
      <img className="card-img-top" src={posterURl} alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.overview}</p>
        <Link to= {detailURL} className="btn btn-primary">Show Details</Link>
      </div>
    </div>
</div>
  )
}


const SearchView=({keyword, searchResults})=>{
    const title = `You are searching for ${keyword}`
    
    const resultsHtml = searchResults.map((obj, i)=>{
        return (
          <MovieCard movie={obj} key ={i} />
        )
    });

    return(
        <>
    <Hero text={title}/>
        {resultsHtml &&
        <div className='container'>
            <div className='row'>
                {resultsHtml}
            </div>
        </div>}
        </>
    );
}


export default SearchView;