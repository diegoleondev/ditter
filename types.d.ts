export interface PropsSVGIcon {
  className?: string;
}

export type LoggedState = "UNKNOWN" | "LOGGED_IN" | "LOGGED_OUT";

export interface Dweet {
  userId: string;
  message: string;
}

export interface DweetEmbed {
  username: string;
  nickname: string;
  timestamp: string;
  message: string;
  avatar: string;
  userId: string;
}

export type User = {
  id: string;
  username: string;
  nickname: string;
  avatar: string;
};
