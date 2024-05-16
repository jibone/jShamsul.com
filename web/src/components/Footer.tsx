export default function Footer() {
  return (
    <footer className="mt-10 py-5 px-10 font-iaWriterQuattro flex-none text-slate-600">
      <div className="text-slate-400">
        <a
          href="https://twitter.com/jibone"
          target="_blank"
          className="hover:text-black hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-purple-500"
        >
          X(twitter)
        </a>{" "}
        /{" "}
        <a
          href="https://github.com/jibone"
          target="_blank"
          className="hover:text-black hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-purple-500"
        >
          github
        </a>
      </div>
      <div className="flex gap-2 text-slate-400">
        <div>&copy; 2024</div>
        <div>J.Shamsul (@jibone)</div>
      </div>
    </footer>
  );
}
