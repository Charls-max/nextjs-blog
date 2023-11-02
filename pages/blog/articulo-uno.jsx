import Image from "next/image";
import Layout from "@/components/layout";

export default function ArticuloUno() {
  return (
    <Layout>
      <h1>Articulo 1</h1>

      <Image
        src="/imagenes/perfil.jpg"
        height={400}
        width={400}
        alt="mi imagen de perfil"
      ></Image>
    </Layout>
  );
}