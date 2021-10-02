module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};

/*
//Ganache settings
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // 5778 is increased gas blockchain
     // gas: 10000000,
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './build/contracts/',
  compilers: {
    solc: {
      version: "^0.8.5",
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
*/