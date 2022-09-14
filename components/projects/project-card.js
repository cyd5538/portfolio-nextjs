import Image from "next/image";

export default function ProjectCard({ data }) {
  const projectTitle = data.properties.title.title[0].text.content;
  const github = data.properties.git.url;
  const deploy = data.properties.deploy.url;
  const Des = data.properties.Description.rich_text[0].text.content;
  const stack = data.properties.stack.multi_select;
  const image = data.cover.file?.url || data.cover.external.url

  console.log(image)
  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={image}
        alt="cover image"
        layout="responsive"
        objectFit="cover"
        width="100%"
        height="60%"
        quality={100}
      />
      <div className="p-4 flex flex-col ">
        <h1 className="text-2xl font-bold">{projectTitle}</h1>
        <h3 className="mt-4 mb-4 text-xl">{Des}</h3>
        <div className="mb-4">
          <a
            className="px-2 py-1 rounded-md dark:text-white bg-sky-300 dark:bg-slate-800 "
            href={github}
          >
            깃허브 링크
          </a>
        </div>
        <div className="mb-4">
          <a
            className="px-2 py-1 rounded-md bg-sky-100 dark:text-white dark:bg-slate-600 "
            href={deploy}
          >
            배포 링크
          </a>
        </div>

        <div className="flex flex-wrap items-start mt-2 gap-2">
          {stack.map((st) => (
            <h1
              className="px-2 py-1 rounded-md bg-sky-200 dark:bg-sky-700"
              key={st.id}
            >
              {st.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
