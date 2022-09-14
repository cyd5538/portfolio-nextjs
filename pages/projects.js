import Head from "next/head";
import Layout from "../components/layout";
import ProjectCard from "../components/projects/project-card";
import { DATABASE_ID, NOTION_TOKEN } from "../config/index";

export default function Project({ projectdata }) {
  console.log(projectdata);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
        <Head>
          <title>최영진 포트폴리오</title>
          <meta name="description" content="매일 빡코딩" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          프로젝트 :
          <span className="pl-4 text-blue-500">
            {projectdata.results.length}
          </span>
        </h1>
        <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
          {projectdata.results.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projectdata = await res.json();

  
  return {
    props: { projectdata }, // will be passed to the page component as props
  };
}
