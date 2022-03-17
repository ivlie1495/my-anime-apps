import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-2 px-4 md:px-8 w-full bg-white">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img 
            src="/images/anime-logo.png"
            alt="AnimeLogo"
            width={175}
            height={50}
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;