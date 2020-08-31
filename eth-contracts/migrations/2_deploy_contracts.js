// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("../contract/SolnSquareVerifier.sol");

module.exports = function(deployer) {
  deployer.deploy(SquareVerifier).then(() => {
    return deployer.deploy(SolnSquareVerifier,SquareVerifier.address);

  });
};