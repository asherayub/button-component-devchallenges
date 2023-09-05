const Footer = () => {
  return (
    <div className="text-center text-xl py-2 absolute bottom-0 left-0 bg-black text-white w-full">
      <p>
        Challenge by DevChallenges{" "}
        <img
          src="../../devchallenges.png"
          alt=""
          className="w-5 inline-block"
        />{" "}
        | Submitted by{" "}
        <a href="https://devchallenges.io/portfolio/asherayub">Asher A</a>
      </p>
    </div>
  );
};

export default Footer;
