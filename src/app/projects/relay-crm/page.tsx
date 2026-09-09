import type { Metadata } from "next";
import CasePage from "../../components/CasePage";

export const metadata: Metadata = { title: "Relay CRM — кейс" };

export default function RelayCrmCase() {
  return <CasePage
    eyebrow="кейс 03 · full-stack CRM"
    title="Relay CRM"
    intro="Облачная CRM для небольшой команды: от первого обращения клиента до отчёта по воронке и следующего контакта."
    preview="/previews/relay-crm.png"
    previewAlt="Рабочий кабинет Relay CRM с воронкой заявок"
    task="Собрать цельный продукт для ежедневной работы с клиентами: безопасные роли, история действий, воронка, задачи, коммуникация и данные в одном интерфейсе."
    solution="Next.js-приложение с Supabase Auth и PostgreSQL RLS. В продукте есть клиенты и заявки, канбан и список, календарь, отчёты, команда, вложения, CSV, поиск, шаблоны сообщений, тёмная тема и адаптивный интерфейс."
    result="Получился опубликованный full-stack продукт с tenant-isolation, optimistic updates, audit log, 92 unit-тестами и production-сборкой на Vercel."
    tags={["Next.js 16", "TypeScript", "Supabase", "PostgreSQL RLS", "Vercel", "Vitest"]}
    liveUrl="https://client-crm-ebon.vercel.app"
    githubUrl="https://github.com/blagone/relay-crm"
    liveLabel="Открыть Relay CRM"
  />;
}
