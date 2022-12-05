import Link from "next/link";

const Hero = ({movie}) => {
 const {title, poster_path,overview,release_date,vote_average,popularity,original_language, id} = movie

    return (
<div className="hero py-20 bg-gradient-to-r from-yellow-200 to-yellow-500 mb-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={`http://image.tmdb.org/t/p/w500${poster_path}`} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">{overview}</p>
      <p className="py-1">Release Date: {release_date}</p>
      <p className="py-1">Vote: {vote_average}</p>
      <p className="py-1">Language: {original_language}</p>
      <p className="py-1">Popularity: {popularity}</p>
      <div className="my-6">
      <Link href={`/movies/${id}`}> 
        <span className="btn btn-primary btn-wide">Details</span>
        </Link>
      </div>
     
    </div>
  </div>
</div>
    );
};

export default Hero;
