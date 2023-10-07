function Header() {
  return (
    <>
      <header className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <a
                className="inline-block rounded-lg px-2 py-1 text-xl font-mono font-bold text-black-950 hover:bg-slate-100 hover:text-slate-900"
                href="#"
              >
                AGRI.AI
              </a>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-4">
              <div className="hidden md:flex md:gap-x-12 font-mono font-bold">
                <a
                  className="inline-block rounded-lg px-2 py-1 text-xl text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="#about"
                >
                  About
                </a>
                <a
                  className="inline-block rounded-lg px-2 py-1 text-xl text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="#features"
                >
                  Features
                </a>

                <a
                  className="inline-block rounded-lg px-2 py-1 text-xl text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
