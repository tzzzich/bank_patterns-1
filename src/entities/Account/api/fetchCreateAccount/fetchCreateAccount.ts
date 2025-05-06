import { IAccount } from "@entities/Account/models";
import { IAccountListResult } from "./fetchCreateAccount.interfaces";
import { HttpError } from "@shared/api";
import { ECurrencies } from "@shared/types";

export const fetchCreateAccount = async (
  name: string,
  currency: ECurrencies
): Promise<IAccount> => {
  const url = `http://51.250.46.120:5001/core/account`;
  const token = localStorage.getItem("userToken");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "text/plain",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Idempotency-Key": `${name}-${currency}`,
    },
    body: JSON.stringify({
      name,
      currency,
    }),
  });

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  const data: IAccountListResult = await response.json();

  return data.newAccount;
};
