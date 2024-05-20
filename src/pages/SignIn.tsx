import { Label } from "@radix-ui/react-label";
import loginImg from "../assets/images/Login Art.png";
import loginImgLarge from "../assets/images/login-image-large.png";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import { IoLogoGoogle } from "react-icons/io";

interface ISignInForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const loginwithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
    },
    onError: () => console.log("Login Failed"),
  });

  const { register, handleSubmit } = useForm<ISignInForm>();
  const onSubmit: SubmitHandler<ISignInForm> = (data: ISignInForm) =>
    console.log(data);

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
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>

            <div className="grid w-full montserrat-regular max-w-sm items-center gap-1.5">
              <Label htmlFor="password" className="montserrat-bold text-sm">
                Password
              </Label>
              <Input
                {...register("password", { required: true })}
                type="password"
                id="password"
                placeholder="Password"
              />
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
          <div className="w-full">
            <Button
              onClick={() => loginwithGoogle()}
              type="submit"
              className="w-full flex flex-row items-center justify-center gap-x-2 bg-white text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white"
            >
              <span className="montserrat-regular">Sign in with Google</span>
              <IoLogoGoogle />
            </Button>
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
