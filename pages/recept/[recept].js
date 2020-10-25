import Prismic from "prismic-javascript";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Link from "next/link"
import Layout from '../../components/Layout';
import { Client, linkResolver } from "../../prismic-configuration";

export default function Recept({recept, ingredienten}){
    return (
        <Layout>
            <div className="w-1/2 mx-auto" >
<h1 className="font-bold text-xl mb-2">
{RichText.render ( recept.data.title)}
</h1>
<div className="flex">
<div className="flex flex-col w-2/3">
<img className="w-64 h-64 object-cover object-center" src={recept.data.image.url} alt=""/>


<div className="flex flex-col ">
<h1 className="font-bold text-xl mb-2">
    
</h1>
{ingredienten.map((i)=>
<div> 

<p>{RichText.render(i.hoeveelheid)}{RichText.render(i.ingredient)}</p>
</div>   )}
</div>
</div></div>
            </div>
            <Link href="/">
                <button className=" bg-blue uppercase"> Terug naar overzicht </button>
            </Link>
        </Layout>
    )
}


export async function getServerSideProps(context) {
    const recept = await Client().getByUID("recept" , context.query.recept);
    var ingredienten = recept.data.ingredienten;
    console.log(recept);
    
    
    for (const value of ingredienten) {
        console.log(value)
        
    }
    return{
        
      props : {
          
        recept : recept,
        ingredienten:ingredienten
    
      },
    };}
    