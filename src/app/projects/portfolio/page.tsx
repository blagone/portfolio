import type { Metadata } from "next";
import CasePage from "../../components/CasePage";

export const metadata: Metadata = { title: "Сайт-портфолио — кейс" };

export default function PortfolioCase() {
  return <CasePage
    eyebrow="кейс 01"
    title="Сайт-портфолио"
    intro="Личная страница с авторской иллюстрацией, понятной навигацией и прямым доступом к работам."
    preview="/previews/portfolio.png"
    previewAlt="Главная страница сайта-портфолио"
    task="Собрать узнаваемую личную страницу, на которой проекты легко посмотреть и открыть."
    solution="Адаптивный интерфейс на Next.js и TypeScript объединил бумажную фактуру, выразительную типографику и авторского иллюстрированного персонажа."
    result="Проекты, исходный код и контакты собраны в одной цельной странице, которая работает на разных размерах экрана."
    tags={["Next.js", "TypeScript", "UI"]}
    liveUrl="https://portfolio-kappa-teal-36.vercel.app"
    githubUrl="https://github.com/blagone/portfolio"
  />;
}
