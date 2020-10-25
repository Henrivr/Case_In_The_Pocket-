import Prismic from "prismic-javascript";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Link from "next/link"
import Layout from '../../components/Layout';
import { Client, linkResolver } from "../../prismic-configuration";

export default function Recept({recept}){
    return (
        <Layout>
            <div className="w-1/2 mx-auto" >
<h1 className="font-bold text-xl mb-2">
{RichText.render ( recept.data.title)}
</h1>


            </div>
            <Link href="/">
                <button className=" bg-blue uppercase"> Terug naar overzicht </button>
            </Link>
        </Layout>
    )
}
export async function getServerSideProps(context) {
    const recept = await Client().getByUID("recept" , context.query.recept);
    
  
    return{
      props : {
        recept : recept,
      },
    };}