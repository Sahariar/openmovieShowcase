import Link from "next/link";

const MoviesCards = ({item}) => {
    const {title, poster_path,overview,release_date,vote_average,popularity,original_language,id} = item
    return (
        <>
           <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <div className="card-actions">
        <Link href={`/movies/${id}`}> 
        <span className="btn btn-primary btn-wide">Details</span>
        </Link>
     
    </div>
  </div>
</div> 
        </>
    );
};

export default MoviesCards;