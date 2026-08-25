# Gruz Game 06 — Anime Tyanka Tap

Base App mini app for **kitasit** (Next.js + wagmi + Farcaster Mini App SDK).

## Config (hardcoded, no Vercel env)

| Item | Value |
|------|--------|
| Base App ID | `6a15662a5ef088574244919e` → `lib/appConfig.ts` + `<meta name="base:app_id">` |
| Contract (Base Mainnet) | [0x6812f90858cB1989d6356CF1a08Bb4497e5A50a3](https://basescan.org/address/0x6812f90858cB1989d6356CF1a08Bb4497e5A50a3) |
| Builder code | `bc_nwphoihs` |
| Builder calldata suffix | `0x62635f6e7770686f6968730b0080218021802180218021802180218021` |

All onchain settings: `lib/contracts/gruzgame06Onchain.ts`

**Vercel:** no dashboard env required. Public URL is taken from `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL` via `lib/siteUrl.ts`.

**Wallets (browser):** Rabby, MetaMask, WalletConnect, Base passkey (`lib/wagmiConfigs.ts`).  
**Base App:** auto-connect via `farcasterMiniApp` + `WalletAutoConnect.tsx`.
aga
## Run

```bash
npm install
npm run dev
```

Optional local URL override: `.env.local` with `NEXT_PUBLIC_URL=http://localhost:3000`

## Verify builder calldata

```bash
node scripts/verify-calldata.mjs
```

## GitHub

Repo: https://github.com/kitasit/gruzgame06
