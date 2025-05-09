const Banner = ({ selectlanguage, chapterInfo, verses }) => {
  console.log(verses);
  const randomversesIndex = Math.floor(Math.random() * chapterInfo?.length);
  const randomverses = chapterInfo?.[randomversesIndex];
  console.log(randomverses);

  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className=" img col-12 position-relative">
            <img src="/public/img/banner2.webp" alt="" />
          </div>
          <div className="text">
            {selectlanguage === "hindi" ? (
              <h1>
                <b>भगवत गीता का अनुभव</b>
                <b style={{ color: "#FEDF89" }}> करें कहीं भी कभी भी</b>
              </h1>
            ) : (
              <h1>
                <b>Experience the Gita </b>
                <b style={{ color: "#FEDF89" }}>Anywhere, Anytime</b>
              </h1>
            )}
          </div>
        </div>
        <div className="container m-5">
          <div className="row justify-content-center">
            {selectlanguage === "hindi" ? (
              <div className="card text-center col-8 m-5 p-4">
                <h1>
                  {randomverses?.id} :- {randomverses?.name}
                </h1>
                <p>{randomverses?.chapter_summary_hindi}</p>
                <span className="fs-4 ">
                  कुल छंद:-{randomverses?.verses_count}
                </span>
                <button className="d-block mx-auto px-4 py-2 my-3">
                  और पढ़ें
                </button>
              </div>
            ) : (
              <div className="card text-center col-8 m-5 p-4">
                <h1>
                  {randomverses?.id} :- {randomverses?.name_translated}
                </h1>
                <p>{randomverses?.chapter_summary}</p>
                <span className="fs-4 ">
                  Total Verses:-{randomverses?.verses_count}
                </span>
                <button className="d-block mx-auto my-1 px-4 py-2 my-3">
                  read more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
