import { Label } from "@radix-ui/react-label";
import loginImg from "../assets/images/Login Art.png";
import loginImgLarge from "../assets/images/login-image-large.png";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { signIn, signInWithGoogle } from "@/util/api/authenticationApi";

interface ISignInForm {
  email: string;
  password: string;
}

interface IData {
  status: number | undefined;
  message: string;
  success: boolean;
}

const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignInForm>();
  const onSubmit: SubmitHandler<ISignInForm> = async (data: ISignInForm) => {
    try {
      const result = await signIn(data);
      console.log("Result: ", result);
    } catch (e) {
      console.error(e);
    }
  };

  const sendToken = async (accessToken: string | undefined) => {
    try {
      const result = await signInWithGoogle(accessToken);
      if (result !== undefined) {
        const { message, success } = result.data;
        redirect({ status: result?.status, message, success });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const redirect = (data: IData) => {
    if (data.status === 200) {
      navigate("/home");
    }
  };

  return (
    <section className="h-screen w-auto flex items-center justify-center p-4">
      <div className="h-full w-auto bg-white flex flex-col gap-y-4 sm:flex-row sm:gap-x-5 sm:justify-center sm:items-center">
        {/* Image - mobile */}
        <div className="h-auto w-full flex justify-center sm:hidden">
          <img
            src={loginImg}
            alt="login-img"
            className="h-auto w-full object-contain rounded-2xl"
          />
        </div>

        <div className="sm:w-1/2 sm:px-5">
          {/* Title */}
          <div className="text-xl w-full montserrat-bold flex flex-col gap-y-2">
            <div>Welcome Back</div>

            <p className="montserrat-regular text-base w-full sm:text-sm">
              Unlock the essence of elegance. <br></br>Sign in and explore our
              exclusive fragrances.
            </p>
          </div>
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2 montserrat-bold mt-5"
          >
            <div className="grid w-full montserrat-regular max-w-sm items-center gap-1.5">
              <Label htmlFor="email" className="montserrat-bold text-sm">
                Email
              </Label>
              <Input
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
                type="email"
                id="email"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-500 text-sm">
                  First name is required
                </p>
              )}
            </div>

            <div className="grid w-full montserrat-regular max-w-sm items-center gap-1.5">
              <Label htmlFor="password" className="montserrat-bold text-sm">
                Password
              </Label>
              <Input
                {...register("password", { required: true })}
                aria-invalid={errors.password ? "true" : "false"}
                type="password"
                id="password"
                placeholder="Password"
              />

              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-500 text-sm">
                  Password is required
                </p>
              )}
            </div>
            <div className="w-full text-sm text-right montserrat-regular my-2 text-blue-400">
              Forgot password?
            </div>
            <Button type="submit">Sign In</Button>
          </form>
          {/* divider */}
          <div className="flex flex-row items-center justify-center gap-x-2 my-3">
            <div className="bg-gray-300 h-[0.5px] w-1/3"></div>
            <div className="montserrat-regular text-xs w-1/3 text-center sm:hidden">
              Or sign in with
            </div>

            <div className="hidden montserrat-regular text-sm w-1/3 text-center sm:block">
              Or
            </div>
            <div className="bg-gray-300 h-[0.5px] w-1/3"></div>
          </div>
          {/* Google Login */}
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                sendToken(credentialResponse.credential);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
          {/* Sign Up title */}
          <div className="montserrat-regular w-full text-sm justify-center text-center flex flex-row gap-x-1 mt-5">
            <span>Don't you have an account?</span>
            <span className="montserrat-bold text-blue-500">Sign up</span>
          </div>
          <div className="mt-3 text-center montserrat-regular text-xs text-gray-400">
            @ 2024 ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Image - mobile */}
        <div className="hidden h-auto w-full sm:justify-center sm:flex sm:w-1/2 md:h-5/6">
          <img
            src={loginImgLarge}
            alt="login-img"
            className="h-auto w-full object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
