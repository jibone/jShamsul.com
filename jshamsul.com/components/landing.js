export default function Landing() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <section className="mb-12 shadow-lg col-span-3">
        <img className="w-full" src="/assets/blog/preview/cover.jpg" />
      </section>

      <section className="col-span-3">
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">Hello Internets.</h1>
        <h2 className="text-2xl italic underline md:text-3xl">May peace be upon you.</h2>
      </section>

      <section className="mb-14 col-span-3 md:col-span-2 md:mb-16">
        <p className="mt-4">
          My name is{' '}
          <strong>J. Shamsul Bahri</strong>
          . Around the web, I often go by the handle{' '}
          <em>@jibone</em>
          . Husband to a lovely wife, father to an adorable daughter.
        </p>

        <p className="mt-4">
          I am a{' '}
          <strong>Software Engineer</strong>{' '}
          from Kuala Lumpur, Malaysia currently based in Singapore,{' '}
          where I work with a company that is{' '}
          <strong>Driving South East Asian Forward</strong>
          {' '}by providing{' '}
          <em className="underline">ride hailing</em>
          ,{' '}
          <em className="underline">ride sharing</em>
          ,{' '}
          <em className="underline">logistics</em>
          ,{' '}
          <em className="underline">cashless payment</em>
          {' '}and other platform services, empowering{' '}
          <em className="underline">sharing</em>
          ,{' '}
          <em className="underline">collaborative</em>
          {' '}and{' '}
          <em className="underline">gig based economy</em>
          {' '}to the masses, all in an{' '}
          <em className="underline">everyday super app</em>
          .
        </p>

        <p className="mt-4">
          In my spare time, I love building plastic robot figures knows as{' '}
          <em className="underline">Gunpla</em>
          , assemble and solder switches to build custom{' '}
          <em className="underline">Mechanical Keyboards</em>{' '}
          and play video games, mostly on the{' '}
          <em className="underline">Nintendo Switch</em>
          .
        </p>
      </section>

      <section className="mb-12 col-span-3 text-xs text-right md:col-span-1">
        <p className="mt-4">
          <div>
            <a target="_blank" className="border-solid border-b-2 hover:border-black duration-200 transition-colors" href="https://twitter.com/jibone">
              twitter.com/jibone
            </a>
          </div>
          <div>
            Twitter
          </div>
        </p>
        <p className="mt-4">
          <div>
            <a target="_blank" className="border-solid border-b-2 hover:border-black duration-200 transition-colors" href="https://twitter.com/jibone">
              github.com/jibone
            </a>
          </div>
          <div>
            Github
          </div>
        </p>
        <p className="mt-4">
          <div>
            <a target="_blank" className="border-solid border-b-2 hover:border-black duration-200 transition-colors" href="https://twitter.com/jibone">
              grab.com
            </a>
          </div>
          <div>
            Grab
          </div>
        </p>
      </section>
    </div>
  );
}

