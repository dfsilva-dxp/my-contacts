import { PropsWithChildren } from "react";

import * as S from "./styles";

const Badge = ({ children }: PropsWithChildren) => {
  return <S.BadgeContent>{children}</S.BadgeContent>;
};

export default Badge;
