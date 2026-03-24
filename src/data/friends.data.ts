export const FRIENDS_DATA = [
  {
    username: "BADASSDAISY",
    status: "Playing Team Deathmatch",
    avatar: `${import.meta.env.BASE_URL}images/friends/1.jpg`,
  },
  {
    username: "TACTICJOE223",
    status: "In lobby",
    avatar: `${import.meta.env.BASE_URL}images/friends/3.jpg`,
  },
  {
    username: "GREYJOKER",
    status: "Playing Factions",
    avatar: `${import.meta.env.BASE_URL}images/friends/4.jpg`,
  },
  {
    username: "ROROROW",
    status: "Playing Factions",
    avatar: `${import.meta.env.BASE_URL}images/friends/5.jpg`,
  },
];

export type TFriends = (typeof FRIENDS_DATA)[number];
