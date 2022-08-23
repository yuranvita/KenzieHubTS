type User = {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: [];
  works: [];
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
};

type ITheme = {
  bg: string;
  font_color: string;
  primary: string;
  primary_focus: string;
  primary_negative: string;
  gray_4: string;
  gray_3: string;
  gray_2: string;
  gray_1: string;
  gray_0: string;
  success: string;
  negative: string;
};

type IFormSignUp = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  course_module: string;
  bio: string;
  contact: string;
};

export type { User, ITheme, IFormSignUp };
