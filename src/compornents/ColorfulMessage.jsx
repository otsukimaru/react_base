import React from "react";

const ColorFullMassage = (props) => {
  const { color, children } = props;
  const conTentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={conTentStyle}>{children}</p>;
};

export default ColorFullMassage;

// color: color,　の箇所注意！
// オブジェクトはキーとバリューの名前が同じならあたいのところを省略することができる
