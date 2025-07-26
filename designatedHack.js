/** @param {NS} ns */
export async function main(ns) {
  let a = ns.args[0]
  while(true) {
    if(ns.getServerMoneyAvailable < ns.getServerMaxMoney) {
      await ns.grow(a);     
    }
    if (ns.getServerMinSecurityLevel <= ns.getServerSecurityLevel) {
      await ns.weaken(a);
    }
    await ns.hack(a);
  }
}