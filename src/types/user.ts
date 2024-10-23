interface UserType {
  id: string;
  name: string;
  email: string;
  password: string;
  accessToken: string;
}

type UserResponseType = {
  id: string;
  name: string;
  email: string;
  password: string;
  access_token: string;
};

export type { UserType, UserResponseType };
