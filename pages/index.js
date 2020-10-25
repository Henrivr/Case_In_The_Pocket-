import Prismic from "prismic-javascript";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Link from "next/link"
import Layout from '../components/Layout';
import { Client, linkResolver } from "../prismic-configuration";


export default function Home({ recepten }) {
  return (
  
      <div>
        <Head>
        <title>Recepten case</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="row  ">
          <div className="text-center">
        <h1 className=" text-2xl uppercase font-bold opacity-50 my-10 ml-24 flex-col ">
         Welkom! op de 
         
        </h1>
        </div>
        </div>
        
                
                  
                    <div className="justify-center   lg, md:flex  ">
          {recepten.results.map( (recept) => (
            <div className= " flex justify-center items-center w-1/2 " key={recept.uid}>
            <Link href={`recept/${recept.uid}`}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg hover" > 
            <img className="w-45 h-45" src={recept.data.image.url} alt=""/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"><h1>{RichText.render ( recept.data.title)}</h1></div>
              <p class="text-gray-700 text-base">
              <p>{RichText.render ( recept.data.description)}</p>
              </p>
            </div>
            
          </div>
          </Link>
          </div>
          ))}
          </div>
          
       
                   
                </Layout>
</div>
  )};
  export async function getServerSideProps() {
    const recepten = await Client().query(
      Prismic.Predicates.at("document.type", "recept")
    );
    console.log(recepten);
    return{
      props : {
        recepten : recepten,
      },
    };}