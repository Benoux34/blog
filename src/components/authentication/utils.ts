import { Dispatch, SetStateAction } from "react";

const onClickShowPassword =
  (showPassword: boolean, setShowPassword: Dispatch<SetStateAction<boolean>>) =>
  () => {
    setShowPassword(!showPassword);
  };

export { onClickShowPassword };
