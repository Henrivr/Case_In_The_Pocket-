import Prismic from "prismic-javascript";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Link from "next/link"
import Layout from '../../components/Layout';
import { Client, linkResolver } from "../../prismic-configuration";

export default function Recept({recept, ingredienten, recepten}){
    return (
        <Layout>
            
            <div className=" mx-auto" >
<h1 className="font-bold lg:text-5xl mb-5 sm:text-5xl text-center">
{RichText.render ( recept.data.title)}
</h1>

<div className="flex flex-col lg:flex-row ">
    <div className=" lg:w-2/3 sm:w-full p-4 items-center ">
    <img className="  rounded w-full" src={recept.data.image.url} alt=""/>
    <h1 className="my-5 text-5xl text-center">Bereiding</h1>
    <p className=" bg-blue-500 rounded-2xl p-4"> {RichText.render ( recept.data.bereiding)}</p>
    </div>
    
    <div className=" lg:w-1/3 sm:w-full   p-4">
    <div className="bg-white rounded p-5 text-black ">
    <h1 className="text-2xl  font-bold  my-5">
              Bereidingstijd
            </h1>   
            <p className="  "> {RichText.render ( recept.data.bereidingstijd)}</p>
           
    <h1 className="text-2xl  font-bold  my-5">
              Aantal personen
            </h1>   
            <p className="flex flex-row  "> {RichText.render ( recept.data.aantal_personen)} &nbsp; personen</p>
            <h1 className="text-2xl  font-bold  my-5">
              Ingredienten
            </h1>      
            
            {ingredienten.map((i)=>
   <div className="text-center " >
       
    <p className="flex flex-row  p-2"> {RichText.render(i.hoeveelheid )} &nbsp;&nbsp;&nbsp; {RichText.render(i.ingredient)}</p>
    
    </div>
    )}
     </div>
     <div className="bg-blue-500 rounded my-5 p-5 text-center ">
     <h1 className="text-2xl pb-4">Misschien lust jij dit ook wel!</h1>
     <div className="flex flex-row justify-center p-2 ">
    {recepten.results.map( (recept) => (
        <Link href={`../recept/${recept.uid}`}>
            <div className="font-bold  px-3  hover:opacity-75 text-xl mb-2 cursor-pointer"><a><img className="w-24 h-24 object-cover object-center" src={recept.data.image.url} alt=""/></a></div>
            </Link>
    ))}
    </div>
   </div>
</div>
</div>

            
            </div>
           
        </Layout>
    )
}



export async function getServerSideProps(context) {
    const recept = await Client().getByUID("recept" , context.query.recept);
    var ingredienten = recept.data.ingredienten;
   
    const recepten = await Client().query(
        Prismic.Predicates.at("document.type", "recept")
      );
    
  
    return{
        
      props : {
          
        recept : recept,
        ingredienten:ingredienten,
        recepten:recepten
    
      },
    };}
    