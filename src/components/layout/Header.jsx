import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onCartClick }) => {
  return (
    <header className="bg-green-100 py-3 px-2 lg:px-16 ">
      <div className="mx-auto max-w-2xl lg:max-w-7xl flex justify-between items-center">
        <a href="/">
          <h1 className="text-3xl font-bold max-w-2xl lg:max-w-7xl">
            Meadow Vale Project
          </h1>
        </a>
        <HeaderCartButton onClick={onCartClick} />
      </div>
    </header>
  );
};

export default Header;
