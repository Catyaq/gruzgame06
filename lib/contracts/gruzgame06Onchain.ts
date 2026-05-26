/** Deployed on Base Mainnet — https://basescan.org/address/0x6812f90858cB1989d6356CF1a08Bb4497e5A50a3 */
export const GRUZGAME06_CONTRACT_ADDRESS: `0x${string}` =
  "0x6812f90858cB1989d6356CF1a08Bb4497e5A50a3";

export const GRUZGAME06_CHECKIN_PRICE_ETH = "0.00001";

/** base.dev → Builder Codes — set when ready */
export const GRUZGAME06_BUILDER_CODE = "";
export const GRUZGAME06_BUILDER_CODE_DATA_SUFFIX: `0x${string}` = "0x";

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

export function withGruzGame06BuilderCodeDataSuffix(data: `0x${string}`): `0x${string}` {
  const suffix = GRUZGAME06_BUILDER_CODE_DATA_SUFFIX;
  if (!suffix || suffix === "0x" || suffix.length <= 2) {
    return data;
  }
  return `${data}${suffix.slice(2)}` as `0x${string}`;
}

export function getGruzGame06ContractAddress(): `0x${string}` {
  return GRUZGAME06_CONTRACT_ADDRESS;
}

export function isGruzGame06ContractConfigured(): boolean {
  return GRUZGAME06_CONTRACT_ADDRESS !== "0x0000000000000000000000000000000000000000";
}
