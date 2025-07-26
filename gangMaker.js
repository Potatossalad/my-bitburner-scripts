/** @param {NS} ns */
export async function main(ns) {
  let k = 1000

  while (true) {
    if (ns.heart.break() < -54000) {
      await ns.singularity.commitCrime("Homicide");
    } else if (ns.heart.break() >= -54000) {
      break;
    }
  }

  while (true) {
    const factions = ns.getPlayer().factions
    let invitedToSlumSnakes = ns.singularity.checkFactionInvitations()
    if (factions == factions.includes("Slum Snakes")) {
      await ns.gang.createGang("Slum Snakes");
      break;
    } else if (factions != factions.includes("Slum Snakes")) {
      if (invitedToSlumSnakes) {
        ns.singularity.joinFaction("Slum Snakes");
      } else if (!invitedToSlumSnakes) {
        ns.sleep(100 * k)
      }
    }
  }

  return "Gang made";
}