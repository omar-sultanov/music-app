import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      id:0,
      title: "Tuesday",
      artist: "Burak_Yeter_feat_Danelle_Sandoval",
      img_src: "./images/Tuesday1.jpg",
      src: "./music/Burak_Yeter_feat_Danelle_Sandoval_-_Thusday.mp3"
    },
    {
      id:1,
      title: "Thunder",
      artist: "Imagine_Dragons",
      img_src: "./images/Thunder1.jpg",
      src: "./music/Imagine_Dragons_-_Thunder.mp3"
    },
    {
      id:2,
      title: "Bad_Boys",
      artist: "Inna",
      img_src: "./images/bad_boys.jpg",
      src: "./music/Inna_-_Bad_Boys.mp3"
    },
    {
      id:3,
      title: "Human",
      artist: "RagnBone_Man",
      img_src: "./images/human.jpg",
      src: "./music/RagnBone_Man_-_Human.mp3"
    }
  ]);

  return (
    <div className="App">
      <Player songs={songs}/>
    </div>
  );
}

export default App;
