import React from "react";
import ColorFullMassage from "./compornents/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  const conTentLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorFullMassage color="blue">お元気ですか</ColorFullMassage>
      <ColorFullMassage color="pink" message="元気です" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
