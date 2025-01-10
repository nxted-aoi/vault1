import { PublicKey } from "@solana/web3.js";
import { Connection } from "@solana/web3.js";

function getConnection(chain = 'solana') {
    // if (!connection[chain]) connection[chain] = new Connection(endpointMap[chain](true))
    return new Connection("https://api.mainnet-beta.solana.com")
  }

async function tvl() {
    const connection = getConnection();
    const account = await connection.getAccountInfo(new PublicKey(''))
    return {
      solana: Number(account.data.readBigUint64LE(258))/1e9
    }
  }

async function tvl1() {
    const connection = getConnection();
    const accounts = await connection.getProgramAccounts(new PublicKey("Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8 "), {
        filters: [{
          dataSize: 1544
        }]
      })
    getAssociatedTokenAddress
    const vaults = [
        ""
    ];
}

const tvlNumber = await tvl();
console.log(tvlNumber.solana);
