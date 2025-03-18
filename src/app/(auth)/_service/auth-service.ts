"use server";
import { cookies } from "next/headers";
import { inputs } from "../login/page";
import { inputsR } from "../register/page";

const url = "http://localhost:3000";

export const registerUser = async (data: inputsR) => {
  const res = await fetch(`${url}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const resData = await res.json();

  return resData;
};

interface resLogin {
  accessToken: string;
  user: {
    email: string;
    id: number;
    name: string;
  };
}

export const loginUser = async (data: inputs) => {
  const loginCookie = cookies();
  const res = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const resData: resLogin = await res.json();
  (await loginCookie).set("token", resData.accessToken);
  (await loginCookie).set("user", JSON.stringify(resData.user));

  return resData;
};
