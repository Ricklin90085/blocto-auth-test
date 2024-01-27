import Web3 from "web3";
import DappAuth from "@blocto/dappauth";

const dappAuth = new DappAuth(
  new Web3.providers.HttpProvider("https://arb-mainnet-public.unifra.io")
);

async function debug() {
  const challenge = "foo";
  const signature =
    "0x33838c6f4e621982c2009f9b93ecb854a4b122538159623abc87d2e4c5bd6d2e33591f443b419b3bd2790e455ba6d625f2ca14b822c5cef824ef7e9021443bed1c";
  const address = "0x86aa354fc865925f945b803ceae0b3f9d856b269";

  try {
    const isAuthorizedSigner = await dappAuth.isAuthorizedSigner(
      challenge,
      signature,
      address
    );

    console.log(isAuthorizedSigner); // true
  } catch (e) {
    console.log(e);
  }
}
