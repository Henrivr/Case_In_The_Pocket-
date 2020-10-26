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
        <h1 className=" text-5xl  font-bold  my-10  flex-col ">
        We create recipes that make people happy
        </h1>
        </div>
        </div>
      
                  
          <div className="  lg:flex  flex-col  lg:flex-row">
            
          {recepten.results.map( (recept) => (
            
            <div className= " flex justify-center   w-full py-8" key={recept.uid}>
            <Link href={`recept/${recept.uid}`}>
            <div className="    borders w-64   rounded   overflow-hidden  hover:bg-blue-800 hover:shadow-2xl  cursor-pointer" > 
            <img className="w-64 h-64 object-contain object-center" src={recept.data.image.url} alt=""/>
            <div className="px-6 py-4">
              <div className="font-bold  text-xl mb-2"><h1>{RichText.render ( recept.data.title)}</h1></div>
              <p class="  text-base">
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
  
    return{
      props : {
        recepten : recepten,
      },
    };}