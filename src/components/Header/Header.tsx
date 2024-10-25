import { Nav } from "./Nav/Nav";
import { NavUser } from "./Nav/NavUser";

const Header = () => {
  return (
    <header className="border-b pb-2">
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-4xl font-bold">BLOG</h1>
        <h1 className="text-4xl font-bold">FREEDOM</h1>
      </div>
      <div className="flex justify-between items-center">
        <Nav />
        <NavUser />
      </div>
    </header>
  );
};

export { Header };
