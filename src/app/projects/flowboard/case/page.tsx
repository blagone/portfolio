import type { Metadata } from "next";
import CasePage from "../../../components/CasePage";

export const metadata: Metadata = { title: "Flowboard — кейс" };

export default function FlowboardCase() {
  return <CasePage
    eyebrow="кейс 03"
    title="Flowboard"
    intro="Веб-приложение, которое объединяет ежедневные задачи, календарь и обзор прогресса."
    preview="/previews/flowboard.png"
    previewAlt="Рабочий экран веб-приложения Flowboard"
    task="Объединить ежедневные задачи, календарь и обзор прогресса в одном веб-приложении."
    solution="Канбан-доска дополнилась фильтрами и аналитикой, а состояние приложения сохраняется локально в браузере."
    result="Рабочее приложение позволяет вести задачи и просматривать прогресс без отдельного бэкенда."
    tags={["Next.js", "localStorage", "Web app"]}
    liveUrl="/projects/flowboard"
    liveLabel="Открыть приложение"
    githubUrl="https://github.com/blagone/task-board"
  />;
}
