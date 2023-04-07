import avatarWebber from "./assets/images/avatar-mark-webber.webp";
import avatarAngela from "./assets/images/avatar-angela-gray.webp";
import avatarJacob from "./assets/images/avatar-jacob-thompson.webp";

const data = [
  {
    type: "reaction",
    username: "mark webber",
    avatar: avatarWebber,
    post: "My first tournament today!",
    active: true,
    time: "1m ago",
  },
  {
    type: "follow",
    username: "angela gray",
    avatar: avatarAngela,
    active: true,
    time: "5m ago",
  },

  {
    type: "join",
    username: "jacob thompson",
    avatar: avatarJacob,
    group: "Chess Club",
    active: true,
    time: "1 day ago",
  },
];

export default data;
