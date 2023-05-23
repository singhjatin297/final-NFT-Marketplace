require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "Yhttps://polygon-mumbai.g.alchemy.com/v2/a7rfBC-qsWN3K8p0sSE7dnxr1SUu1-wP";
const NEXT_PUBLIC_PRIVATE_KEY = "4fd39a7d6c18d067187d4b5cac66e81bae3abf9218822c397946c945ed491506";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },

  //   // fuji: {
  //   //   url: `Your URL`,
  //   //   accounts: [
  //   //     `0x${"Your Account"}`,
  //   //   ],
  //   // },
  // },
};
