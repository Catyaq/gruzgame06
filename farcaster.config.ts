import { APP_DISPLAY_NAME } from "./lib/appConfig";
import { getSiteUrl } from "./lib/siteUrl";

const ROOT_URL = getSiteUrl();

export const farcasterConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: "",
  },
  miniapp: {
    version: "1",
    name: APP_DISPLAY_NAME,
    subtitle: `${APP_DISPLAY_NAME} — gruzgame06`,
    description:
      "Tap the anime girl, sync taps onchain, check in every 2 minutes, and climb the leaderboard on Base.",
    imageUrl: `${ROOT_URL}/anime-hero.svg`,
    buttonTitle: "Tap Tyanka",
    screenshotUrls: [`${ROOT_URL}/anime-hero.svg`],
    iconUrl: `${ROOT_URL}/anime-icon.svg`,
    splashImageUrl: `${ROOT_URL}/anime-hero.svg`,
    splashBackgroundColor: "#1a0f2e",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "games",
    tags: ["game", "tap", "anime", "leaderboard", "onchain", "base"],
    heroImageUrl: `${ROOT_URL}/anime-hero.svg`,
    tagline: "Tap. Check in. Level up.",
    ogTitle: APP_DISPLAY_NAME,
    ogDescription: "Anime-style tap game for Base App.",
    ogImageUrl: `${ROOT_URL}/anime-hero.svg`,
    castShareUrl: ROOT_URL,
  },
} as const;
