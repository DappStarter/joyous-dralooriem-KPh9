require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rate sister collect hunt knee olympic slender'; 
let testAccounts = [
"0xb04f56344d8139bebe7e2e4f69bf6bc38099669f5b43aacc6c5b0867ead28903",
"0xd4488698dc57698ba2b1392bc18edd761fae511880ce174545470f1e0a90600c",
"0xf5d60d998628e281ec5f0a521e8a17c015b546ec0fc9bbd87ad47905ffd051d6",
"0x72cc34776abc716602554302ae21203d15d50d06354bd6dea5a0203acc809e16",
"0x3af9a99c74100fabd1d84913267383c064a4f5757470cade94de6949edc4675b",
"0x6d933f34465bd664b526230e86f063d65025887d835ba42b61ce53ff0ca39d25",
"0x17133ea64bd9af3f1102b46ba42008a17e35d8075b3f6df2eb68f1352a7ebd34",
"0x232ece29bd61648c70250308d359e6edfdf9846f42bae17171dec8dd449078d9",
"0xd5a31fbdee2caeff0ce76df541edf8f613a75d5a0006d783c9f51e3e49e524be",
"0xfef9f15445f41498e379c247f910992d38ab62d53a9ced46361c7a328a9076e1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


