import SignIn from "@/components/auth/sign-in";
import SignUp from "@/components/auth/sign-up";
import CommonButton from "@/components/common-button";
import { useState } from "react";

function AuthPage() {
  const [isLoginView, setLoginView] = useState(true);
  return (
    <div className="flex flex-auto flex-col min-h-screen h-full">
      <div className="flex h-full flex-col justify-center items-center bg-white">
        <h1>Welcome</h1>
        <div>{isLoginView ? <SignIn /> : <SignUp />}</div>
        <div className="mt-5">
        <CommonButton
        type = {'button'}
          onClick={() => setLoginView(!isLoginView)}
          className="mt-6 bg-black text-white font-extralight p-5 border-none rounded"
          buttonText={isLoginView ? "Switch to Sign Up" : "Switch to Sign In"}
        />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
