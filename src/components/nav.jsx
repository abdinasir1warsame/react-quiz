const Navbar = () => {
    return (
        <div>
             <nav className="w-full flex justify-between px-8 py-5 text-white">
        <div>
          <h1 className="text-2xl font-bold">Quiz App</h1>
        </div>
        <div className="flex gap-10 items-center">
          <p>home</p>
          <p>All Scores</p>
          <p>My Top Scores</p>
        </div>
        <div>
          <button className="border border-white backdrop-blur-xs   px-5 py-2 rounded-2xl">
            {' '}
            Sign Up
          </button>
        </div>
      </nav>
        </div>
    )
}

export default Navbar