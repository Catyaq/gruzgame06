# gruzgame06 — Anime Tyanka Tap (Base Mini App)

Onchain tap game on **Base Mainnet**: tap the anime girl, batch-sync taps, check in every 2 minutes, local leaderboard.

## Stack

- Next.js 15 + Wagmi + Viem + `@base-org/account`
- Farcaster Mini App SDK
- Smart contract: `contracts/GruzGame06Onchain.sol`

## Environment (Vercel / local)

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_URL` | Optional on Vercel | Override public URL; if unset, `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL` are used |
| `NEXT_PUBLIC_GRUZGAME06_CONTRACT_ADDRESS` | **Yes (prod)** | Deployed contract on Base |
| `NEXT_PUBLIC_GRUZGAME06_BUILDER_CODE_DATA_SUFFIX` | When using Builder Codes | Hex suffix appended to tx `data` (with `0x`) |
| `NEXT_PUBLIC_GRUZGAME06_BUILDER_CODE` | Optional | Human-readable builder code label |
| `NEXT_PUBLIC_GRUZGAME06_CHECKIN_PRICE_ETH` | Optional | Default `0.00001` |

Copy `.example.env` → `.env.local` for local dev.

## Calldata + Builder suffix

`tap` and `checkIn` transactions use `encodeFunctionData(...)` and `withGruzGame06BuilderCodeDataSuffix()` so the final `data` is **function calldata + Builder Code encoded suffix** when the suffix env is set.

## Develop

```bash
npm install
npm run dev
```

## Deploy (Vercel)

1. Set env vars in the Vercel project (especially contract address and builder suffix).
2. `NEXT_PUBLIC_URL` can be your custom domain; otherwise production URL is auto-detected.

## Contract (Remix)

**Deployed contract (Base Mainnet):** `0x6812f90858cB1989d6356CF1a08Bb4497e5A50a3`  
Set the same value as `NEXT_PUBLIC_GRUZGAME06_CONTRACT_ADDRESS` in Vercel (and `.env.local` for local dev).
