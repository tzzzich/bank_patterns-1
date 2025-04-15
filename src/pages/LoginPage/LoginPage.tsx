import { PageLayout } from "@shared/ui";
import { FC } from "react";
import { Button } from "antd";
import { Wrapper } from "./LoginPage.styles";
import { login } from './authService';

export const LoginPage: FC = () => {


  return (
    <PageLayout title="Войдите в аккаунт">
      <Wrapper>
      <Button onClick={login} className="btn btn-primary">
      Войти
    </Button>
      </Wrapper>
    </PageLayout>
  );
};
