import Prismic from "prismic-javascript";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Link from "next/link"

import { Client, linkResolver } from "../prismic-configuration";


export default function Home({ recepten }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <h1 className=" text-2xl uppercase font-bold opacity-50 my-10 ml-24">
          
          
        </h1>
        <div>
          {recepten.results.map( (recept, index) => (
            <h1>{RichText.render ( recept.data.title)}</h1>
          ))}
        </div>
        <div>
          {recepten.results.map( (recept, index) => (
            <p>{RichText.render ( recept.data.description)}</p>
          ))}
        </div>
                
        
       
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