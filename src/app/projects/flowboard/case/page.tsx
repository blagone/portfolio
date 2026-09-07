import type { Metadata } from "next";
import CasePage from "../../../components/CasePage";

export const metadata: Metadata = { title: "Flowboard — кейс" };

export default function FlowboardCase() {
  return <CasePage
    eyebrow="кейс 03"
    title="Flowboard"
    intro="Самостоятельное PWA-приложение для ежедневных задач, календаря и обзора прогресса."
    preview="/previews/flowboard.png"
    previewAlt="Рабочий экран веб-приложения Flowboard"
    task="Собрать спокойный рабочий процесс для задач без регистрации, перегруженных меню и зависимости от сервера."
    solution="Канбан-доска получила календарь, аналитику, архив с восстановлением, поиск и фильтрацию по тегам. Состояние хранится локально, а экспорт и проверяемый импорт JSON позволяют переносить резервную копию между устройствами."
    result="Готовая адаптивная PWA работает на компьютере и телефоне, поддерживает горячие клавиши и сохраняет данные прямо в браузере."
    tags={["Next.js", "TypeScript", "PWA", "localStorage", "JSON backup"]}
    liveUrl="https://flowboard-blagone.vercel.app"
    liveLabel="Открыть приложение"
    githubUrl="https://github.com/blagone/task-board"
  />;
}
