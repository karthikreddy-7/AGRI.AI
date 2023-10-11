function Landing() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-4 text-center lg:pt-24 h-screen">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
          AGRICULTURE
          <span className="relative  text-blue-600">
            <span className="relative text-6xl"> MADE SIMPLE </span>
          </span>
          USING
          <span className="relative  text-blue-600">
            <span className="relative"> MACHINE LEARNING</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          AGRI.AI IS A GROUNDBREAKING INITIATIVE THAT HARNESSSES THE POWER OF
          MACHINE LEARNING TO REVOLUTIONIZE AGRICULTURE PRACTICES.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
            href="#features"
          >
            VIEW PREDICTIONS
          </a>
          <a
            className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
            href="https://github.com/karthikreddy-7/CROP_RECCOMENDATION"
          >
            VIEW SOURCE CODE
          </a>
        </div>
      </div>
    </>
  );
}

export default Landing;
