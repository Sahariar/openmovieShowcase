import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const {movies} = props
  const popularMovie = movies?.results[0]
 
  return (
    <>
           <Head>
        <title>Movies : Your Favorite Place for Information</title>
        <meta name="description" content="Movies Database for User" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Navbar></Navbar>
 

      <main>
       <Hero movie={popularMovie}/>
      </main>

     <Footer></Footer>
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.TMDB_APIKEY}`)
  const data = await res.json();
  return {
      props:{
          movies:data
      }
  }
}