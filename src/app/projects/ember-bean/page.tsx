import type { Metadata } from "next";
import CasePage from "../../components/CasePage";

export const metadata: Metadata = { title: "Ember & Bean — кейс" };

export default function EmberBeanCase() {
  return <CasePage
    eyebrow="кейс 02"
    title="Ember & Bean"
    intro="Адаптивный Next.js-концепт specialty-кофейни с тёплой айдентикой и цельным пользовательским сценарием."
    preview="/previews/coffee.png"
    previewAlt="Главная страница сайта Ember & Bean"
    task="Создать убедительный цифровой образ specialty-кофейни и провести посетителя от знакомства с брендом к меню и обсуждению похожего проекта."
    solution="Сценарий выстроен как история: первый экран, три принципа бренда, меню из 10 позиций, атмосферная галерея, подбор зерна для дома и контактный CTA. Анимации появления, ticker и hover-состояния поддерживают ритм, а reduced-motion и focus-visible сохраняют доступность."
    result="Получился цельный адаптивный концепт на Next.js с оптимизированными изображениями, SEO, аналитикой и честной маркировкой демонстрационного проекта."
    tags={["Next.js", "TypeScript", "Tailwind CSS", "Responsive", "Motion", "UI/UX"]}
    liveUrl="https://coffee-landing-kohl.vercel.app"
    githubUrl="https://github.com/blagone/coffee-landing"
  />;
}
