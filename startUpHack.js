/** @param {NS} ns */
export async function main(ns) {
  let rootServers = ns.scan()
  rootServers.forEach(server => {
    ns.scp("hack.js", server, home)
    ns.exec("hack.js", server, 3)
  })

}