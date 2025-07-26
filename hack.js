/** @param {NS} ns */
  export async function main(ns) {
  ns.ramOverride(2.05)
  let a = ns.getHostname()
  while (true) {
    for (let i = 0; i < 3; i++) {
      await ns.weaken(a)
      await ns.hack(a)
      await ns.weaken(a)
    }
    for (let i = 0; i<2; i++) {
      await ns.grow(a)
    }
  }
  }