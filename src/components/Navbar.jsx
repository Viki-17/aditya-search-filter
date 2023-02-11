import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <img
          className="nav-bg"
          src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2aW5nJTIwbGlmZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          //   src="https://cdn4.vectorstock.com/i/1000x1000/96/98/people-friends-jumping-at-sunset-silhouette-vector-35789698.jpg"
          //   src="https://cdn4.vectorstock.com/i/1000x1000/89/08/jumping-on-sunset-vector-108908.jpg"
          alt=""
        />
        <div className="nav-bar">
          <img
            className="nav-logo"
            src="https://www.adityabirlacapital.com/-/media/Project/ABCL/Logo/abc-logo/abc-logo.png?extension=webp"
            alt="logo"
          />
        </div>
        <p className="nav-text">Experience The Launch In Metaverse</p>
      </div>
    </>
  );
};

export default Navbar;
