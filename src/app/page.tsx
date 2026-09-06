import Image from "next/image";
import MascotHero from "./components/MascotHero";

type Project = { index: string; title: string; description: string; result: string; tags: string[]; preview: string; liveUrl: string; githubUrl: string; accent: string };

const projects: Project[] = [
  { index: "01", title: "Сайт-портфолио", description: "Задача: собрать узнаваемую личную страницу, на которой проекты легко посмотреть и открыть.", result: "Результат: адаптивный сайт на Next.js с авторской иллюстрацией и прямыми ссылками на работы.", tags: ["Next.js", "TypeScript", "UI"], preview: "/previews/portfolio.png", liveUrl: "https://portfolio-kappa-teal-36.vercel.app", githubUrl: "https://github.com/blagone/portfolio", accent: "card-coral" },
  { index: "02", title: "Ember & Bean", description: "Задача: придумать и реализовать выразительный концепт сайта specialty-кофейни.", result: "Результат: тёплый адаптивный лендинг с цельной айдентикой и интерактивной навигацией.", tags: ["React", "Концепт", "Responsive"], preview: "/previews/coffee.png", liveUrl: "https://coffee-landing-kohl.vercel.app", githubUrl: "https://github.com/blagone/coffee-landing", accent: "card-sage" },
  { index: "03", title: "Flowboard", description: "Задача: объединить ежедневные задачи, календарь и обзор прогресса в одном веб-приложении.", result: "Результат: канбан-доска с фильтрами и аналитикой. Данные хранятся локально в браузере, без бэкенда.", tags: ["Next.js", "localStorage", "Web app"], preview: "/previews/flowboard.png", liveUrl: "/projects/flowboard", githubUrl: "https://github.com/blagone/task-board", accent: "card-sun" },
];

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Git"];
const tickerItems = ["ВЕБ-РАЗРАБОТКА", "ИНТЕРФЕЙСЫ", "NEXT.JS", "ИДЕЯ → РЕЗУЛЬТАТ"];

function getTelegramUrl() {
  const value = process.env.TELEGRAM_URL ?? process.env.NEXT_PUBLIC_TELEGRAM_URL;
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && (url.hostname === "t.me" || url.hostname === "telegram.me") && url.pathname.length > 1 ? url.toString() : null;
  } catch { return null; }
}

export default function Home() {
  const telegramUrl = getTelegramUrl();
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell" aria-label="Основная навигация">
          <a className="brand" href="#top" aria-label="blagone — на главную">b.</a>
          <div className="nav-links"><a href="#projects">проекты</a><a href="#about">обо мне</a><a href="#skills">навыки</a><a className="nav-cta" href="#contact">написать мне</a></div>
        </nav>
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span>привет!</span> я веб-разработчик</p>
            <h1>Делаю сайты,<br />в которых хочется <em>остаться.</em></h1>
            <p className="hero-lead">Я Андрей blagone. Собираю понятные, быстрые и живые интерфейсы на React и Next.js — от идеи до работающего продукта.</p>
            <div className="hero-actions"><a className="button button-dark" href="#projects">Смотреть работы <span>↓</span></a><a className="text-link" href="https://github.com/blagone" target="_blank" rel="noreferrer">GitHub ↗</a></div>
          </div>
          <MascotHero />
        </div>
        <div className="hero-ticker" aria-hidden="true"><div className="ticker-track shell">{tickerItems.map((item) => <span className="ticker-item" key={item}>{item}</span>)}</div></div>
      </section>

      <section className="projects-section" id="projects">
        <div className="shell">
          <div className="section-heading"><p className="kicker">избранные работы</p><h2>Проекты <span>с характером</span></h2><p>Не только внешний вид: в каждой карточке есть задача, реализация и результат.</p></div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-preview"><Image src={project.preview} alt={`Превью проекта ${project.title}`} fill sizes="(max-width: 900px) 100vw, 33vw" /></div>
                <div className="project-card-body">
                  <div className="card-topline"><span className="project-index">{project.index}</span><span className="scribble" aria-hidden="true">〰</span></div>
                  <h3>{project.title}</h3><p>{project.description}</p><p className="project-result">{project.result}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="card-links"><a href={project.liveUrl} target="_blank" rel="noreferrer">Открыть ↗</a><a href={project.githubUrl} target="_blank" rel="noreferrer">Код ↗</a></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid"><p className="kicker">обо мне</p><div><h2>Я Андрей — веб-разработчик.</h2><p>Проектирую и собираю интерфейсы, в которых визуальная идея поддерживает понятную структуру. Работаю с React и Next.js, уделяю внимание адаптивности, скорости и деталям взаимодействия.</p></div></div>
      </section>

      <section className="skills-section" id="skills">
        <div className="shell skills-grid"><div className="section-heading align-left"><p className="kicker">мой набор инструментов</p><h2>Думаю руками.<br /><span>Собираю в коде.</span></h2></div><div className="skill-cloud">{skills.map((skill, index) => <span className={`skill-chip chip-${(index % 4) + 1}`} key={skill}>{skill}</span>)}</div></div>
      </section>

      <section className="contact-section" id="contact"><div className="shell contact-card"><span className="contact-star" aria-hidden="true">✦</span><p className="kicker">есть идея?</p><h2>Давайте сделаем<br /><em>что-нибудь классное.</em></h2><div className="contact-actions"><a className="button button-paper" href="https://github.com/blagone" target="_blank" rel="noreferrer">Написать в GitHub <span>↗</span></a>{telegramUrl && <a className="button button-telegram" href={telegramUrl} target="_blank" rel="noreferrer">Написать в Telegram <span>↗</span></a>}</div></div></section>
      <footer><div className="shell footer-inner"><strong>b.</strong><span>© 2026 blagone. Сделано с вниманием к деталям.</span><a href="#top">наверх ↑</a></div></footer>
    </main>
  );
}
