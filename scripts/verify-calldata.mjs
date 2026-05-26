/**
 * Verify tap calldata includes builder suffix. Run: node scripts/verify-calldata.mjs
 */
import { encodeFunctionData } from "viem";

const BUILDER_CODE = "";
const BUILDER_SUFFIX = "0x";

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

if (!BUILDER_SUFFIX || BUILDER_SUFFIX === "0x" || BUILDER_SUFFIX.length <= 2) {
  console.log("builder code:", BUILDER_CODE || "(not set)");
  console.log("tap calldata (no suffix):", data);
  process.exit(0);
}

const suffix = BUILDER_SUFFIX.slice(2);
const full = `${data}${suffix}`;

console.log("builder code:", BUILDER_CODE);
console.log("tap calldata:", full);
console.log("ends with suffix:", full.endsWith(suffix));
