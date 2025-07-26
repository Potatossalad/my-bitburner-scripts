/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail()
  let startingServer = ns.getServer().hostname

  if (ns.args[0] == "help") {
    ns.tprint("argument 0 of 'help' brings this up\n argument 0 of '0' makes hack scripts execute on starting server\n argument 1 of 'return' brings you back to your starting server");
    ns.scriptKill(ns.getScriptName(), ns.getServer().hostname);
    }

//Doing the Gang Script start
const gangMaker = `/** @param {NS} ns */
  export async function main(ns) {
    const TASK_TRAIN = "Train Combat"
    const TASK_MONEY = "Human Trafficking"
    const TASK_WAR = "Territory Warfare"
    const TASK_NULL = "Unassigned"
    const ASCEND_MPL = 10
    const MEMBER_MAX = 12

  ns.ui.openTail()
  ns.singularity.commitCrime("Homicide", false)
  let a = 0;

  var karmaBuilding = true
  while(karmaBuilding) {
    if(Math.floor(ns.heart.break()) <= -54000) {
      ns.gang.createGang("Slum Snakes")
      karmaBuilding = false
    } else {
      for (let i = 0; i < 10; i++) { 
        ns.singularity.commitCrime("Homicide", false);
        await ns.sleep(4000);
      }
      ns.clearLog();
    }

    a++
    if(a >= 20) {
      a=0
      ns.clearLog()
      ns.print(ns.heart.break())
    } else {
      ns.tprint("Karma: " + ns.heart.break())
    }
  } 
  for(let i =0; i<3;i++){
      ns.gang.recruitMember(i)
    }
  var gangMembering = true
  var gangMoneying = true
  a=3
  while (gangMembering){
    if(ns.gang.canRecruitMember()) {
      ns.gang.recruitMember(a+1)
      a++
    }

    while(gangMembering) {
      for(let o = 0; o < a; o++) {
        ns.gang.setMemberTask(o, TASK_TRAIN)
      }

      const members = ns.gang.getMemberNames();
      for (let member of members) {
        const r = ns.gang.getAscensionResult(member)
        if (!r) continue;
        const mpl = r.agi * r.def * r.dex * r.str
        if (mpl > ASCEND_MPL) {
          ns.gang.ascendMember(member);
          ns.tprint("Member " + member + " ascended")
        }
      }
      

    }

  }

  
  }`
/*await ns.write("gangMaker.js", gangMaker, "w")
await ns.sleep(5000)
await ns.run("gangMaker.js")
await ns.sleep(5000)*/

  //Home typically has more ram for scripts, so we connect there
  if (startingServer != "home") {
    ns.singularity.connect("home")
  }
  
  //checking if auto hack is running
  //make sure to disable prompts and enable hacknet within the file
  if (!ns.scriptRunning("auto-hack.js", "home")) {
    ns.exec("auto-hack.js", "home")
    ns.tprint("auto-hack.js was not running, but it now is")
  } else {
    ns.tprint("auto-hack.js was already running")
  }

//Installing hack scripts on every server for easy money and hacking 
const myHack = `/** @param {NS} ns */
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
  }`
await ns.write("hack.js", myHack, "w")
await ns.sleep(5000)
let servers = ns.scan("home")
  for (let target of servers) {
    await ns.scp("hack.js", target, "home");
    await ns.sleep(2000)
    
    var threads = Math.floor((ns.getServerMaxRam(target) - ns.getServerUsedRam(target)) / ns.getScriptRam("hack.js", target))
    if (threads <= 0) {} else {
    await ns.exec("hack.js", target, threads)
    await ns.sleep(2000)}
  }
  //connect back to the starting server
 ns.singularity.connect(startingServer)
}