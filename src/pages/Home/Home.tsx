import "./Home.css";
import SplashArt from "../../assets/SplashArt.png";
import { Footer } from "@components/index";
import { Hero, Video } from "./components";

function Home() {
  return (
    <>
      <Hero />
      <p className="description">
        Enter the battlefield with the ultimate tool for Warhammer commanders.
        This app allows you to track the paint status of your armies, upload
        battle-ready photos, and chronicle your armies' stories as they prepare
        for war. Whether documenting the triumphs of your painted miniatures or
        strategizing your next campaign, this app is your trusted companion in
        the grimdark universe of Warhammer.
      </p>
      <div className="subsection-divider">
        <h3 className="subsection">
          What's Warhammer 40k? See more{" "}
          <a href="https://start-warhammer.com/en/" target="_blank">
            here.
          </a>
        </h3>
        <div className="divider-border" />
      </div>
      <Video />
      <h2 className="big-text">
        In the grim darkness of the far future, there is only war.
      </h2>
      <img src={SplashArt} className="splash-image" />
      <div className="divider-border divider" style={{ width: "80%" }} />
      <Footer />
    </>
  );
}

export default Home;
