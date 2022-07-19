require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note pulse provide include clinic obscure gesture'; 
let testAccounts = [
"0xf1deef4b83b462fbfac2e96fffba3fb460c7451b3685479b36365938ee1b54f3",
"0x63b16dbeecffefb6bc7ff3d4f8615ca0138d6103f1265e7f1f4f38b057457c52",
"0x554a1f1bf9851b58e38f7cdde3058a3735417f9b0019eb32b9136234e40e0a83",
"0x93049136babb9e523defadaef17e426769f98d2b7eca528da8e6e88acf546dd5",
"0x6f00dba3d3e0310c90a8fc96558508daa90f66c1dbd0a3e3d96b68ed4acd00a1",
"0x29d0027030486bb47adbfdce7f0ddc423cc38efdee79077078993dcc01c0642f",
"0xd0e6079f2b2392b7ea12dc427c3854de999e2b7761838e9e2f26f713bbad30fc",
"0x09e32119c39e2999b4a3bb9680bbec4d838fa3ccdd03ca9ec83ec80f1d90bd5f",
"0x1f18e996e4d92636e1015b2c878b7a6ee3a30d8df4973080d488bc2c60f1e633",
"0x16d75546063050a56cb7d09c11f9363afd1b615ae51073ba817a9123a8cdfcd7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

