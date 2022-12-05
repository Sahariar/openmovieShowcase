import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const MovieId = ({movie}) => {
    const {title, poster_path,overview,release_date,vote_average,popularity,original_language ,backdrop_path
    ,budget,revenue,runtime,tagline,homepage
} = movie
    console.log(movie);
    return (
        <>
           <Head>
        <title>{title} - {tagline}</title>
        <meta name="description" content="Movies Database for User" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Navbar></Navbar>
 

      <main>
       <section>
       <section className="">
       <div className="title-area py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
       <h2 className="text-5xl font-bold text-center">{title}</h2>
                <h3 className="text-3xl font-bold text-center">{tagline}</h3>
        </div>
        <div className="">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <img src={`http://image.tmdb.org/t/p/w500${backdrop_path}`} className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video" />
			</div>
		</div>
	<div className="container flex flex-col-reverse mx-auto lg:flex-row my-10">
        
		<div className=" flex flex-col px-6 py-8 space-y-6 sm:p-8 lg:p-12 lg:w-1/2 xl:w-8/12 bg-lime-200/10 shadow-lg rounded-md">
			
			<div className="flex space-x-2 sm:space-x-4">
				
				<div className="space-y-2">
                <h2 className="text-6xl text-center font-bold">Details</h2>
      <p className="py-6">{overview}</p>
      <p className="py-1">Release Date: {release_date}</p>
      <p className="py-1">Vote: {vote_average}</p>
      <p className="py-1">Language: {original_language}</p>
      <p className="py-1">Popularity: {popularity}</p>
      <p className="py-1">Budget: ${budget}</p>
      <p className="py-1">Revenue: ${revenue}</p>
      <p className="py-1">Runtime: {runtime}</p>
				</div>
			</div>
		</div>
		<div className="xl:w-3/12">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <img src={`http://image.tmdb.org/t/p/w500${poster_path}`} className="rounded-lg shadow-lg dark:bg-gray-500" />
			</div>
		</div>
	</div>
</section>
       </section>
      </main>

     <Footer></Footer>
    </>
    );
};

export default MovieId;

export const getStaticProps = async (ctx) => {
    const {params} = ctx
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params?.movieId}?api_key=${process.env.TMDB_APIKEY}`)
    const data = await res.json();
    return {
        props:{
            movie:data
        }
    }
}

export const getStaticPaths = async () => {

    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.TMDB_APIKEY}`)
    const data = await res.json();
    const dataResult = data?.results
    const paths = dataResult?.map(item => {
        return {
             params:{
                movieId:`${item.id}`
             } 
        }
    })

    return{
        paths,
        fallback:false
    }

 
}