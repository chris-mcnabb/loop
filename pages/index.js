import Head from 'next/head'
import {Fragment, useEffect} from "react"
import styles from '../styles/Home.module.css'

import {useState} from "react";
import axios from "axios";
import Slider from "../components/website/Slider";
import VendorLogos from "../components/website/VendorLogos";


Home.layout = "L3";
export default function Home({images}) {


    const [sale, setSale] = useState(false)



console.log(images)
    return (



        <div className={styles.container}>

            <div className={styles.announcement}>

            </div>
            <Head>
                <title>RnG Diving</title>

                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
           <Slider pics={images} as={'image'}/>
                <VendorLogos logos={images} as={'logo'} />
        </div>

    )
}
export  const getServerSideProps = async () => {

        const res = await axios.get(process.env.VERCEL_URL+`/api/images`);

        return{
            props:{
                images: res.data
            }
        }


}
