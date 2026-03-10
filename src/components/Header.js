import "./Header.css"

function Header({ toggleTheme, theme }) {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">

      <div className="d-flex align-items-end gap-2">

        <span className="logo">🌤️</span>

        <h4 className="m-0 title">
          Weather App
        </h4>

        <span className="version">v2.0</span>

      </div>

      <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "🔆"}
      </button>

    </header>
  );
}

export default Header;