import { useState } from "react";
import CreateUseditemUI from "./CreateUseditem.presenter";

export default function CreateUseditem() {
  const [isClicked, setIsClicked] = useState(false);
  const onClickTop = (evnet) => {
    setIsClicked(true);
  };

  return <CreateUseditemUI onClickTop={onClickTop} />;
}
