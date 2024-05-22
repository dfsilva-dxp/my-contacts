import ReactDOM from "react-dom";

import * as S from "./styles";

const Loader = () => {
  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Spinner />
    </S.Overlay>,
    document.getElementById("loader-root")!
  );
};

export default Loader;
