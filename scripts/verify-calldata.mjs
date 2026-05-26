/**
 * Verify tap calldata includes builder suffix. Run: node scripts/verify-calldata.mjs
 */
import { encodeFunctionData } from "viem";

const BUILDER_CODE = "bc_nwphoihs";
const BUILDER_SUFFIX = "0x62635f6e7770686f6968730b0080218021802180218021802180218021";

const abi = [
  {
    inputs: [{ name: "tapsCount", type: "uint256" }],
    name: "tap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const data = encodeFunctionData({
  abi,
  functionName: "tap",
  args: [1n],
});

const suffix = BUILDER_SUFFIX.slice(2);
const full = `${data}${suffix}`;

console.log("builder code:", BUILDER_CODE);
console.log("tap calldata:", full);
console.log("ends with suffix:", full.endsWith(suffix));
