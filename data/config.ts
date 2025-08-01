const name = "Dera";
const belowLink = "deraaa-snowy.vercel.app";
const bio = "Developer";
const portfolio = "https://dera-sepia.vercel.app/";
// only github url is supported (change in next.config.js for more domain support)
const avatar = "https://avatars.githubusercontent.com/u/101638355?v=4";

const facebook = "https://www.facebook.com/profile.php?id=100077436619684";
const linkedin = "https://www.linkedin.com/in/moh-tb-derajatul-ula-1aa110235/";
const github = "https://github.com/Derajatul";
const mail = "mailto:derajatul@gmail.com";
const discord = "https://discord.com/user/880343865020796938";
const discordTag = "@dera23";

export const Badges = [
  {
    emoji: "💻",
    label: "Coder",
  },
  {
    emoji: "🎨",
    label: "Design",
  },
  {
    emoji: "🎐",
    label: "Anime",
  },
  {
    emoji: "🎵",
    label: "Music",
  },
];

export const config = {
  name,
  belowLink,
  bio,
  avatar,
  portfolio,
  socials: {
    facebook,
    linkedin,
    github,
    mail,
    discord,
    discordTag,
  },
};
