import Image from "next/image";
import Link from "next/link";

type CasePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  preview: string;
  previewAlt: string;
  task: string;
  solution: string;
  result: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  liveLabel?: string;
};

export default function CasePage({ eyebrow, title, intro, preview, previewAlt, task, solution, result, tags, liveUrl, githubUrl, liveLabel = "Открыть проект" }: CasePageProps) {
  const liveIsExternal = liveUrl.startsWith("http");
  return <main className="case-page">
    <nav className="case-nav shell" aria-label="Навигация по кейсу">
      <Link className="brand" href="/" aria-label="Вернуться на главную">b.</Link>
      <Link className="case-back" href="/#projects">← Все проекты</Link>
    </nav>
    <article>
      <header className="case-hero shell">
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <div className="case-actions">
          <a className="button button-dark" href={liveUrl} target={liveIsExternal ? "_blank" : undefined} rel={liveIsExternal ? "noreferrer" : undefined}>{liveLabel} <span>↗</span></a>
          <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">Посмотреть код ↗</a>
        </div>
      </header>
      <div className="case-preview shell">
        <Image src={preview} alt={previewAlt} fill priority sizes="(max-width: 1200px) 100vw, 1180px" />
      </div>
      <section className="case-details shell" aria-label="О проекте">
        <div><span>01</span><h2>Задача</h2><p>{task}</p></div>
        <div><span>02</span><h2>Решение</h2><p>{solution}</p></div>
        <div><span>03</span><h2>Результат</h2><p>{result}</p></div>
      </section>
      <section className="case-stack shell" aria-labelledby="stack-title">
        <p className="kicker" id="stack-title">инструменты проекта</p>
        <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </section>
    </article>
    <footer><div className="shell footer-inner"><strong>b.</strong><Link href="/#projects">К другим работам →</Link></div></footer>
  </main>;
}
