import Box from "./component/Box";
import "./App.css";

//박스 두 개(타이틀, 사진, 결과) 가위 바위 보 btn
const choice = {
  rock: {
    name: "Rock",
    img:
      "https://dictionary.cambridge.org/ko/images/thumb/rock_noun_004_2211.jpg?versio" +
      "n=5.0.275",
  },
  scissors: {
    name: "Scissors",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UzWirBFsOzX3yClLVTOCBS" +
      "_a74jb1GMbFg&usqp=CAU",
  },
  paper: {
    name: "Paper",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Paper_450x450.jpg",
  },
};
function App() {
  const play = (userChoice) => {
    console.log("선택됨");
  };
  return (
    <div>
      <div className="main">
        <Box title="Mine" />
        <Box title="Computer" />
      </div>
      <div className="main">
        <button onClick={play("scissors")}>가위</button>
        <button onClick={play("rock")}>바위</button>
        <button onClick={play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
