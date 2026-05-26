const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000" as const;

function readEnvHex(name: string): `0x${string}` | "" {
  const raw = process.env[name]?.trim();
  if (!raw) return "";
  return raw.startsWith("0x") ? (raw as `0x${string}`) : (`0x${raw}` as `0x${string}`);
}

function readEnvAddress(name: string): `0x${string}` {
  const value = readEnvHex(name);
  if (!value || value.length !== 42) return ZERO_ADDRESS;
  return value;
}

/** Set in Vercel / .env.local: NEXT_PUBLIC_GRUZGAME06_CONTRACT_ADDRESS */
export function getGruzGame06ContractAddress(): `0x${string}` {
  return readEnvAddress("NEXT_PUBLIC_GRUZGAME06_CONTRACT_ADDRESS");
}

export function isGruzGame06ContractConfigured(): boolean {
  return getGruzGame06ContractAddress() !== ZERO_ADDRESS;
}

/** Default check-in price; override via NEXT_PUBLIC_GRUZGAME06_CHECKIN_PRICE_ETH */
export function getGruzGame06CheckinPriceEth(): string {
  return process.env.NEXT_PUBLIC_GRUZGAME06_CHECKIN_PRICE_ETH?.trim() || "0.00001";
}

/** Optional label from base.dev Builder Codes */
export function getGruzGame06BuilderCode(): string {
  return process.env.NEXT_PUBLIC_GRUZGAME06_BUILDER_CODE?.trim() || "";
}

/**
 * Builder Code encoded suffix (hex, with 0x).
 * Set NEXT_PUBLIC_GRUZGAME06_BUILDER_CODE_DATA_SUFFIX in Vercel when ready.
 */
export function getGruzGame06BuilderCodeDataSuffix(): `0x${string}` | "" {
  return readEnvHex("NEXT_PUBLIC_GRUZGAME06_BUILDER_CODE_DATA_SUFFIX");
}

export const gruzGame06OnchainAbi = [
  {
    inputs: [{ internalType: "uint256", name: "tapsCount", type: "uint256" }],
    name: "tap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkIn",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

/** Appends Builder Code suffix to encoded function calldata when configured. */
export function withGruzGame06BuilderCodeDataSuffix(data: `0x${string}`): `0x${string}` {
  const suffix = getGruzGame06BuilderCodeDataSuffix();
  if (!suffix || suffix === "0x" || suffix.length <= 2) {
    return data;
  }
  return `${data}${suffix.slice(2)}` as `0x${string}`;
}
