import Image from "next/image";
export default function MascotHero() {
  return <div className="single-mascot">
    <span className="single-note">это я! <span aria-hidden="true">↘</span></span>
    <Image src="/andrey-transparent.png" alt="Андрей в худи хаки, светлых джинсах и чёрных высоких кедах" width={1024} height={1536} priority sizes="(min-width: 900px) 420px, 85vw" />
  </div>;
}

