import { observer } from "mobx-react-lite";
import { FC } from "react";
import meerkat from "../../../../public/logo.png";

import { MainPage } from "@pages/MainPage";
import { Image, Wrapper } from "./Page.styles";
import { Navigate, Route, Routes } from "react-router-dom";
import { AccountDetailsPage } from "@pages/AccountDetailsPage";
import { LoginPage } from "@pages/LoginPage";
import { CreditDetailsPage } from "@pages/CreditDetailsPage/ui";
import { CallbackPage } from "@pages/CallbackPage";

export const Page: FC = observer(() => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/details/:id" element={<AccountDetailsPage />} />
        <Route path="/credit/:id" element={<CreditDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin-callback" element={<CallbackPage/>} />
      </Routes>
      <Image src={meerkat} />
    </Wrapper>
  );
});
