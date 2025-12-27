export interface CardProps {
  title: string;
  content?: string;
}

export interface PostProps extends CardProps {
  userId: string | number;
  id?: number;
  body?: string;
}

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

type Company = {
  name: string;
  bs: string;
  catchPhrase: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export interface UserProps {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  company?: Company;
  address?: Address;
}
