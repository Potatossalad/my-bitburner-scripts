/** @param {NS} ns */
export async function main(ns) {
  ns.tprint("First argument is purchase/delete. Second argument is the name. Third argument is ram (2^X)");
  if(ns.args[0] == "delete"){
    ns.deleteServer(ns.args[1]);
  }
  if(ns.args[0] == "purchase"){
    ns.purchaseServer(ns.args[1], 2**ns.args[2]);
  }
}