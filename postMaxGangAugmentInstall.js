/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail()
  //Make millisecond to second much easier
  let k = 1000

  //Sleep is used to allow money to build up. Money is achieved through the Gang.

  //Getting all programs for auto-hack.js
  await ns.sleep(10*k);
  ns.singularity.purchaseTor();
  await ns.sleep(3*k);
  const programs = ns.singularity.getDarkwebPrograms()
  programs.forEach(program => {
    ns.singularity.purchaseProgram(program);
  });
  await ns.sleep(5*k);

  //Money and port purge
  ns.run("auto-hack.js");
  await ns.sleep(10*k);

  //Getting the server for stocks
  ns.purchaseServer("stockserver", 2**17)
  await ns.sleep(2*k);

  //sending files over
  const filesToSend = ["helpers.js", "stockmaster.js"];
  filesToSend.forEach(files => {
    ns.scp(files, "stockserver");
  })

  //Activating the stock script
  ns.exec("stockmaster.js", "stockserver");
}