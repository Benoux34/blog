import { MouseEventHandler } from "react";
import { signIn } from "../../auth";

const onClickSignInGoogle =
  (): MouseEventHandler<HTMLButtonElement> | undefined => async () => {
    await signIn("google");
  };

const signInCredentials =
  (
    email: string,
    password: string
  ): MouseEventHandler<HTMLButtonElement> | undefined =>
  async () => {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  };

export { onClickSignInGoogle, signInCredentials };
