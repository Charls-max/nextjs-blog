import Link from "next/link"
import Image from "next/image"
// import Head from "next/head"
import Layout from "../components/Layout";

export default function primerPost({ data }) {
    return (
        <Layout title="Articulo 1 title" description="descripcion del titulo 1">

            <div>
                <h1>Posts</h1>
                <Image
                    // src="/img/lluvia1.png"
                    alt="Mi imagen"
                    width={600}
                    height={600}
                ></Image>
                <Link href="/">
                    Volver a inicio {/* Usar "Link" en lugar de "a" para optimizar carga de paginas internas */}
                </Link>

                {/* <a href="/">Ancla al inicio</a>  */}
            </div>

            <h1>
                {data.id} - {data.title}
            </h1>
            <p>{data.body}</p>

        </Layout>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        const paths = data.map(({ id }) => ({ params: { id: `${id}` } })); // `` -> entre comillas invertidas para convertir a String
        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.log(error);
    }
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts/" + params.id
        );
        const data = await res.json();
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.log(error);
    }
}