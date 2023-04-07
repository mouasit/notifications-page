import avatarWebber from "./assets/images/avatar-mark-webber.webp";
import avatarAngela from "./assets/images/avatar-angela-gray.webp";
import avatarJacob from "./assets/images/avatar-jacob-thompson.webp";
import avatarRizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import avatarKimberly from "./assets/images/avatar-kimberly-smith.webp";
import avatarComment from "./assets/images/image-chess.webp";
import avatarNathan from "./assets/images/avatar-nathan-peterson.webp";

const data = [
  {
    latest: true,
    type: "reaction",
    username: "mark webber",
    avatar: avatarWebber,
    post: "My first tournament today!",
    time: "1m ago",
  },
  {
    latest: true,
    type: "follow",
    username: "angela gray",
    avatar: avatarAngela,
    active: true,
    time: "5m ago",
  },

  {
    latest: true,
    type: "join",
    username: "jacob thompson",
    avatar: avatarJacob,
    group: "Chess Club",
    time: "1 day ago",
  },
  {
    type: "sent",
    username: "rizky hasanuddin",
    avatar: avatarRizky,
    time: "5 days ago",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    type: "comment",
    username: "kimberly smith",
    avatar: avatarKimberly,
    avatarCommented: avatarComment,
    time: "1 week ago",
  },
  {
    type: "reaction",
    username: "nathan peterson",
    avatar: avatarNathan,
    post: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
  },
];

export default data;
