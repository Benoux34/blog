import { SignUpForm } from "@/components/authentication/SignUpForm";

const SignUp = () => {
  return (
    <div className="bg-gray-100 w-full h-screen flex overflow-hidden xl:p-5">
      <div className="hidden xl:inline xl:w-[60%]"></div>
      <div className="relative bg-white h-full w-full xl:w-[40%] flex flex-col justify-center xl:rounded-lg p-5 xl:px-10 xl:py-16">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold mb-1">Create an account</h1>
          <p className="text-slate-400 font-light">Please enter your details</p>
        </div>
        <div className="mb-4">
          <SignUpForm />
        </div>
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 xl:right-10">
          <a href="/sign-in" className="text-sm hover:underline">
            You already have an account?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
