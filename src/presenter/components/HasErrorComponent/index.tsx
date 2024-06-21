import { Button, Flex } from "@/presenter/components";

import { ReactComponent as Sad } from "@/presenter/assets/image/svg/sad.svg";

import * as S from "./styles";

const HasErrorComponent = () => {
  return (
    <S.FlexWarraper align="center" justify="center" gap="$4">
      <Sad />

      <Flex direction="column" gap="$2">
        <h4>Ocorreu um erro ao obter os seus contatos!</h4>
        <Button size="small" type="button">
          Tentar novamente
        </Button>
      </Flex>
    </S.FlexWarraper>
  );
};

export default HasErrorComponent;
