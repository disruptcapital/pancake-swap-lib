const Migrations = artifacts.require("BEP20");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
// , {name: "WIFESWAP", symbol: "WIFE"}