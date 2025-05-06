import { HttpError } from "@shared/api";

export const fetchCloseAccount = async (id: string): Promise<null> => {
  const url = `http://51.250.46.120:5001/core/account/${id}`;
  const token = localStorage.getItem("userToken");

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "text/plain",
      Authorization: `Bearer ${token}`,
      "Idempotency-Key": id,
    },
  });

  if (!response.ok) {
    throw new HttpError(response.statusText, response.status);
  }

  console.log("ok");
  return null;
};
