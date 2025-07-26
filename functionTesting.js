/** @param {NS} ns */
import {
  getAllServers
} from "./getServers.js"
export async function main(ns) {
  ns.tprint(ns.run(getAllServers()));
}