import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5"></div>
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            adipisci sed reprehenderit ducimus dolor mollitia sapiente eum
            quidem repellat neque eaque, veniam assumenda voluptatem nemo
            voluptate. Quisquam reiciendis voluptate ipsa.
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutView;
