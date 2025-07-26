/** @param {NS} ns */
export async function main(ns) {
  ns.args[0]
  ns.args[1]
  if(ns.args[0] == "minSecurity") {
    ns.tprint(ns.getServerMinSecurityLevel(ns.args[1]))
  }
  if(ns.args[0] == "Security") {
    ns.tprint(ns.getServerSecurityLevel(ns.args[1]))
  }
  if(ns.args[0] == "Money") {
    ns.tprint(ns.getServerMoneyAvailable(ns.args[1]))
  }
  if(ns.args[0] == "MaxMoney") {
    ns.tprint(ns.getServerMaxMoney(ns.args[1]))
  }
}