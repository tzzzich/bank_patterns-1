import { FC } from "react";
import {
  Logout,
  Row,
  ThemeImage,
  TitleStyled,
  Wrapper,
} from "./PageLayout.styles";
import { IPageLayoutProps } from "./PageLayout.interfaces";

import { useStores } from "@shared/contexts/stores";
import { useChangeTheme } from "@entities/Theme/hooks";
import { TTheme } from "@entities/Theme/models";
import { loginRedirect, logoutRedirect } from "@shared/utils";
import { Button } from "antd";

export const PageLayout: FC<IPageLayoutProps> = ({ children, title }) => {
  const {
    themeStore: { theme, setTheme },
  } = useStores();

  const { mutate } = useChangeTheme();

  const handleThemeClick = () => {
    const newTheme: TTheme = theme === "Light" ? "Dark" : "Light";
    mutate(newTheme, {
      onSuccess: () => {
        setTheme(newTheme);
      },
      onError: (error) => {
        console.error("Ошибка:", error);
      },
    });
  };

  const handleLogoutClick = async () => {
    await fetch(
      `http://51.250.46.120:5006/api/push-tokens/${localStorage.getItem(
        "FCMtoken"
      )}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("FCMtoken") }),
      }
    );
    logoutRedirect();
    localStorage.removeItem("userToken");
  };

  return (
    <>
      <Row>
        {localStorage.getItem("userToken") ? (
          <Logout onClick={handleLogoutClick}>Выйти</Logout>
        ) : (
          <Button onClick={loginRedirect}>Войти</Button>
        )}
        <ThemeImage onClick={handleThemeClick} />
      </Row>

      <Wrapper>
        {/* {withNavigationHome && <NavigationHomeStyled />} */}
        <TitleStyled level={2}>{title}</TitleStyled>
        {children}
      </Wrapper>
    </>
  );
};
