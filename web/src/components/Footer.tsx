export default function Footer() {
  return (
    <footer className="mt-16 py-5 px-10 font-iaWriterQuattro flex-none text-slate-600 text-sm">
      <div className="text-slate-400">
        <a
          href="https://twitter.com/jibone"
          target="_blank"
          className="hover:text-black hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-purple-500"
        >
          x
        </a>{" "}
        /{" "}
        <a
          href="https://github.com/jibone"
          target="_blank"
          className="hover:text-black hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-purple-500"
        >
          github
        </a>{" "}
        /{" "}
        <a
          href="https://ai.jshamsul.com"
          target="_blank"
          className="hover:text-black hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-purple-500"
        >
          ai
        </a>{" "}
        /{" "}
        <a
          href="https://web3.jshamsul.com"
          target="_blank"
          className="hover:text-black hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-purple-500"
        >
          web3
        </a>{" "}
        /{" "}
        <a
          href="https://cv.jshamsul.com"
          target="_blank"
          className="hover:text-black hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-purple-500"
        >
          cv
        </a>{" "}
      </div>
      <div className="flex gap-2 text-slate-400">
        <div>&copy; 2024</div>
        <div className="text-slate-500">J.Shamsul (@jibone)</div>
      </div>
      {/* Not yet...
       <div className="text-slate-400">
        ( Software Builder / Full-stack Engineer / Futurist Philosopher )
      </div>
      */}
    </footer>
  );
}
