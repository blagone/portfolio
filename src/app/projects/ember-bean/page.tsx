import type { Metadata } from "next";
import CasePage from "../../components/CasePage";

export const metadata: Metadata = { title: "Ember & Bean — кейс" };

export default function EmberBeanCase() {
  return <CasePage
    eyebrow="кейс 02"
    title="Ember & Bean"
    intro="Выразительный концепт адаптивного сайта specialty-кофейни с тёплой айдентикой."
    preview="/previews/coffee.png"
    previewAlt="Главная страница сайта Ember & Bean"
    task="Придумать и реализовать выразительный концепт сайта specialty-кофейни."
    solution="Тёплая палитра, цельная айдентика и интерактивная навигация собраны в адаптивном интерфейсе на React."
    result="Получился цельный лендинг, который знакомит посетителя с характером кофейни и одинаково удобно работает на разных экранах."
    tags={["React", "Концепт", "Responsive"]}
    liveUrl="https://coffee-landing-kohl.vercel.app"
    githubUrl="https://github.com/blagone/coffee-landing"
  />;
}
