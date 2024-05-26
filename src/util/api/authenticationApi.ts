import axios from "../api/axiosConfig";

interface ISignIn {
  email: string;
  password: string;
}

export const signInWithGoogle = async (accessToken: string | undefined) => {
  try {
    const response = await axios.post("/auth/signin-google", { accessToken });
    console.log(response);
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const signIn = async (data: ISignIn) => {
  const userData: ISignIn = {
    email: data.email,
    password: data.password,
  };

  try {
    const response = await axios.post("/auth/signin", userData);
    console.log(response);
    return response;
  } catch (e) {
    console.error(e);
  }
};
