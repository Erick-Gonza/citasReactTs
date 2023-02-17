const Footer = () => {
  return (
    <footer className="h-auto w-full px-4 py-3 bg-slate-200 md:fixed md:bottom-0 md:left-0 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 md:justify-around p-4">
      <div className="flex flex-row gap-4 items-center">
        <a
          href="https://www.linkedin.com/in/erick-gzz/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full p-1 bg-slate-100"
        >
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="linkedin"
            className="w-6 lg:w-8 h-auto"
          />
        </a>

        <a
          href="https://github.com/Erick-Gonza/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full p-1 bg-slate-100"
        >
          <img
            src="https://img.icons8.com/windows/256/github.png"
            alt="github"
            className="w-6 lg:w-8 h-auto"
          />
        </a>
      </div>
      <div>
        <p className="text-gray-800 text-center md:text-left">
          &copy; 2022
          <span className="text-gray-900 font-bold">Erick Gzz.</span> Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
