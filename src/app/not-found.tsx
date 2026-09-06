import Link from "next/link";

export default function NotFound() {
  return <main className="not-found">
    <section className="not-found-card" aria-labelledby="not-found-title">
      <span className="not-found-code" aria-hidden="true">404</span>
      <p className="kicker">страница потерялась</p>
      <h1 id="not-found-title">Здесь пока<br /><em>пустой лист.</em></h1>
      <p>Адрес мог измениться, а нужная работа всё ещё ждёт на главной.</p>
      <Link className="button button-dark" href="/">Вернуться на главную <span>→</span></Link>
    </section>
  </main>;
}
