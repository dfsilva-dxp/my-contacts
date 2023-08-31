import * as S from "./styles";

interface IBadgeProps {
  children: string;
}

const Badge = ({ children }: IBadgeProps) => {
  return <S.BadgeContent>{children}</S.BadgeContent>;
};

export default Badge;
