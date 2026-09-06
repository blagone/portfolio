import MascotHero from "./components/MascotHero";

type Project = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Сайт-портфолио",
    description: "Персональный сайт на Next.js — быстрый, адаптивный и теперь с собственным характером.",
    tags: ["Next.js", "TypeScript", "UI"],
    liveUrl: "https://portfolio-kappa-teal-36.vercel.app",
    githubUrl: "https://github.com/blagone/portfolio",
    accent: "card-coral",
  },
  {
    index: "02",
    title: "Ember & Bean",
    description: "Обновлённая версия specialty-кофейни: тёплая айдентика, адаптивная подача и интерактивная навигация.",
    tags: ["React", "Обновлённая версия", "Responsive"],
    liveUrl: "https://coffee-landing-kohl.vercel.app",
    githubUrl: "https://github.com/blagone/coffee-landing",
    accent: "card-sage",
  },
  {
    index: "03",
    title: "Flowboard",
    description: "Трекер задач с канбан-доской, календарём, аналитикой и сохранением прогресса.",
    tags: ["Next.js", "Трекер задач"],
    liveUrl: "/projects/flowboard",
    githubUrl: "https://github.com/blagone/task-board",
    accent: "card-sun",
  },
];

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Git"];

// Replace this value with your real Telegram username before deployment.
const TELEGRAM_URL = "https://t.me/your_username";

const tickerItems = ["ВЕБ-РАЗРАБОТКА", "ИНТЕРФЕЙСЫ", "NEXT.JS", "ИДЕЯ → РЕЗУЛЬТАТ"];
export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="Основная навигация">
          <a className="brand" href="#top" aria-label="blagone — на главную">b.</a>
          <div className="nav-links">
            <a href="#projects">проекты</a>
            <a href="#skills">навыки</a>
            <a className="nav-cta" href="#contact">написать мне</a>
          </div>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span>привет!</span> я веб-разработчик</p>
            <h1>Делаю сайты,<br />в которых хочется <em>остаться.</em></h1>
            <p className="hero-lead">Я Андрей blagone. Собираю понятные, быстрые и живые интерфейсы на React и Next.js — от идеи до работающего продукта.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Смотреть работы <span>↓</span></a>
              <a className="text-link" href="https://github.com/blagone" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
          <MascotHero />
        </div>
        <div className="hero-ticker" aria-hidden="true">
          <div className="ticker-track shell">
            {tickerItems.map((item) => <span className="ticker-item" key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="shell">
          <div className="section-heading">
            <p className="kicker">избранные работы</p>
            <h2>Проекты <span>с характером</span></h2>
            <p>Каждая работа начинается с вопроса и заканчивается ясным, удобным решением.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="card-topline"><span className="project-index">{project.index}</span><span className="scribble" aria-hidden="true">〰</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {(project.liveUrl || project.githubUrl) && (
                  <div className="card-links">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Открыть ↗</a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Код ↗</a>}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="shell skills-grid">
          <div className="section-heading align-left">
            <p className="kicker">мой набор инструментов</p>
            <h2>Думаю руками.<br /><span>Собираю в коде.</span></h2>
          </div>
          <div className="skill-cloud">
            {skills.map((skill, index) => <span className={`skill-chip chip-${(index % 4) + 1}`} key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-card">
          <span className="contact-star" aria-hidden="true">✦</span>
          <p className="kicker">есть идея?</p>
          <h2>Давайте сделаем<br /><em>что-нибудь классное.</em></h2>
          <div className="contact-actions">
            <a className="button button-paper" href="https://github.com/blagone" target="_blank" rel="noreferrer">Написать в GitHub <span>↗</span></a>
            <a className="button button-telegram" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Написать в Telegram <span>↗</span></a>
            <p className="contact-note">Telegram: замени <code>your_username</code> на свой рабочий username перед публикацией.</p>
          </div>
        </div>
      </section>

      <footer><div className="shell footer-inner"><strong>b.</strong><span>© 2026 blagone. Сделано с вниманием к деталям.</span><a href="#top">наверх ↑</a></div></footer>
    </main>
  );
}




