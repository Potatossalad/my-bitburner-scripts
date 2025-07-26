/** @param {NS} ns */
export async function main(ns) {
  const serverList = ["rho-construction",
  "alpha-ent",
  "catalyst",
  "millenium-fitness",
  "netlink",
  "the-hub",
  "computek",
  "aevum-police",
  "summit-uni",
  "rothman-uni",
  "omega-net",
  "johnson-ortho"
  ]
    const moneyThresh = ns.getServerMaxMoney(serverList);

    // Defines the maximum security level the target server can
    // have. If the target's security level is higher than this,
    // we'll weaken it before doing anything else
    const securityThresh = ns.getServerMinSecurityLevel(serverList);

    // If we have the BruteSSH.exe program, use it to open the SSH Port
    // on the target server
    // Infinite loop that continously hacks/grows/weakens the target server
    while(true) {
        if (ns.getServerSecurityLevel(serverList) > securityThresh) {
            // If the server's security level is above our threshold, weaken it
            await ns.weaken(serverList);
        } else if (ns.getServerMoneyAvailable(serverList) < moneyThresh) {
            // If the server's money is less than our threshold, grow it
            await ns.grow(serverList);
        } else {
            // Otherwise, hack it
            await ns.hack(serverList);
        }
    }
}
