type CredentialsType = {
  username: string;
  email: string;
  password: string;
};

type SocialCredentialsType = {
  auth_code: string;
};

export type { CredentialsType, SocialCredentialsType };
