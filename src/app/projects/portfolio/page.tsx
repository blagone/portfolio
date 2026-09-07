import type { Metadata } from "next";
import CasePage from "../../components/CasePage";

export const metadata: Metadata = { title: "Сайт-портфолио — кейс" };

export default function PortfolioCase() {
  return <CasePage
    eyebrow="кейс 01"
    title="Сайт-портфолио"
    intro="Персональный продуктовый сайт с авторским персонажем, живыми проектами и отдельными страницами-кейсами."
    preview="/previews/portfolio.png"
    previewAlt="Главная страница сайта-портфолио"
    task="Показать личный стиль веб-разработчика и одновременно дать посетителю быстрый путь к работающим продуктам, коду и способам связи."
    solution="Бумажная фактура, контрастная типографика и прозрачная иллюстрация персонажа собраны в единую адаптивную систему. Каждая карточка показывает задачу и результат, а отдельные кейсы раскрывают решения. Страница дополнена процессом работы, навыками, почтой, Telegram и GitHub."
    result="Получился единый хаб для трёх опубликованных проектов с живыми ссылками, исходным кодом и подробными кейсами. Добавлены SEO-метаданные, Open Graph, sitemap, robots, аналитика и собственная страница 404."
    tags={["Next.js", "TypeScript", "Responsive", "Case studies", "SEO", "Vercel Analytics"]}
    liveUrl="https://portfolio-kappa-teal-36.vercel.app"
    githubUrl="https://github.com/blagone/portfolio"
  />;
}
