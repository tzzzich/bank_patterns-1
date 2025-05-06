import { HttpError } from "@shared/api";

export const fetchHideAccount = async (
  id: string,
  isHide: boolean
): Promise<null> => {
  const action = isHide ? "hide" : "unhide";
  const url = `http://51.250.46.120:5004/api/hidden-accounts/${action}`;
  const token = localStorage.getItem("userToken");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "text/plain",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Idempotency-Key": id,
    },
    body: JSON.stringify([id]),
  });

  if (!response.ok) {
    console.log(response.status);
    throw new HttpError(response.statusText, response.status);
  }

  return null;
};
