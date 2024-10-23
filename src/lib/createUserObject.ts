import { UserResponseType, UserType } from "@/types/user";

const createUserObject = (user: UserResponseType) => {
  const userObject: UserType = {
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    accessToken: user.access_token,
  };

  return userObject;
};

export { createUserObject };
