import { loadData } from "./dataManager/dataLoader.js";
import { sniff } from "./jobListings/dataFunctions/keysniffer.js";

const initData = await loadData({ fileDir: "./data/api/", fileName: "cachedData.json", fallBackUrl: "https://api.careerharvest.org/api/jobs" })
const techTerms = await loadData({ fileDir: "./data/", fileName: "techTerms.json", fallBackUrl: "" })
const skills = await (loadData({ fileDir: "./data/", fileName: "skills.json", fallBackUrl: "" }))

let data = await sniff(initData, skills, { threshold: 0, excludeList: [] })
console.log(data)