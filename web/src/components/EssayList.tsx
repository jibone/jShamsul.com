import Link from "next/link";
import { EssayCollection } from "@/models";

export type PostProps = {
  date: string;
  url: string;
  title: string;
  mirror?: string;
  codex?: string;
  fleeting?: string;
};

export default async function EssayList() {
  const essays = await EssayCollection.list();

  return (
    <>
      {essays.map((essay) => (
        <div key={essay.url} className="mb-5 md:flex md:gap-2">
          <div className="font-iaWriterMono text-slate-400 flex-none w-fit">
            {essay.date}
          </div>
          <div className="hidden md:block flex-none w-3">-</div>
          <div className="flex-1">
            <Link href={essay.url}>{essay.title}</Link>{" "}
            {essay.mirror === undefined ? (
              " "
            ) : (
              <a
                href={essay.mirror}
                className="whitespace-nowrap !py-1 !px-2 !bg-white !border !border-slate-300 !hover:border-slate-700 !rounded-full !text-xs !font-normal !decoration-0 !no-underline"
                target="_blank"
              >
                mirror.xyz
              </a>
            )}
            {essay.codex === undefined ? (
              " "
            ) : (
              <a
                href={essay.codex}
                className="whitespace-nowrap !py-1 !px-2 !bg-white !border !border-slate-300 !hover:border-slate-700 !rounded-full !text-xs !font-normal !decoration-0 !no-underline"
                target="_blank"
              >
                code &amp; codex
              </a>
            )}
            {essay.fleeting === undefined ? (
              " "
            ) : (
              <a
                href={essay.mirror}
                className="!py-1 !px-2 !bg-white !border !border-slate-300 !hover:border-slate-700 !rounded-full !text-xs !font-normal !decoration-0 !no-underline"
                target="_blank"
              >
                fleeting notes
              </a>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
