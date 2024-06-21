import ReactDOM from "react-dom";

import * as S from "./styles";

import { ILoaderProps } from "./types";

const Loader = ({ isLoading }: ILoaderProps) => {
  return ReactDOM.createPortal(
    <>
      {isLoading && (
        <S.Overlay>
          <S.Spinner />
        </S.Overlay>
      )}
    </>,
    document.getElementById("loader-root")!
  );
};

export default Loader;
