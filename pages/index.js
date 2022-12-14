import Head from "next/head";
import Image from "next/image";
import Hero from "../components/home/hero";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>

      <section className=" flex min-h-screen items-center justify-center flex-col text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

          <Hero />
        </div>
      </section>
    </Layout>
  );
}
