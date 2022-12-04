

const movies = () => {
    return (
        <div>
            
        </div>
    );
};

export default movies;
export const getStaticProps = async (ctx) => {
    const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.OMDI_APIKEY}`)
    const data = res.json()

    return {
        props:{
            movies:data
        }
    }
}

