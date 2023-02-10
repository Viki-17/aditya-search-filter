const DisplayLink = ({ link }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cards">
            <div className="card">
              <h1>{link?.name}</h1>

              <h3>{link?.branch}</h3>
              <a href={link} className="btn" target="blank">
                {"Click To Join"}
              </a>
            </div>
          </div>

          {/* <h2>{link?.branch}</h2> */}
        </div>
      </section>
    </>
  );
};

export default DisplayLink;
