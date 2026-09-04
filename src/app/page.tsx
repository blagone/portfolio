type Project = {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "Сайт-портфолио",
    description:
      "Персональный сайт на Next.js и Tailwind CSS для представления моих работ и навыков.",
    liveUrl: "https://portfolio-kappa-teal-36.vercel.app",
    githubUrl: "https://github.com/blagone/portfolio",
  },
  {
    title: "Ember & Bean",
    description:
      "Адаптивный концепт-сайт specialty-кофейни с авторским визуальным стилем и интерактивной навигацией.",
    liveUrl: "https://coffee-landing-kohl.vercel.app",
    githubUrl: "https://github.com/blagone/coffee-landing",
  },
  {
    title: "Веб-приложение",
    description:
      "Будущий интерактивный проект с удобным интерфейсом и полезными функциями.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <span className="text-xl font-bold">blagone</span>

          <a
            href="#projects"
            className="rounded-full border border-slate-700 px-5 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Мои работы
          </a>
        </nav>

        <div className="flex flex-1 items-center py-20">
          <div className="max-w-3xl">
            <p className="mb-4 font-medium text-cyan-400">Привет! Меня зовут</p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              blagone
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Я начинающий веб-разработчик. Создаю современные, удобные и
              быстрые сайты с помощью React и Next.js
            </p>

            <a
              href="#projects"
              className="mt-8 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Посмотреть проекты
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Мои проекты</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-400">
                  {project.description}
                </p>
                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                      >
                        Открыть сайт
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                      >
                        Код на GitHub
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Мои навыки</h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 px-5 py-2 text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cyan-400 px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Связаться со мной</h2>

          <p className="mt-4 max-w-2xl text-lg">
            Посмотрите мои проекты и исходный код в профиле GitHub.
          </p>

          <a
            href="https://github.com/blagone"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Открыть GitHub
          </a>
        </div>
      </section>
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 blagone. Сайт создан на Next.js.
      </footer>
    </main>
  );
}
