// Import Cache Loader
import { loadData } from "./dataManager/dataLoader.js";

// Import Keyword Sniffer
import { sniff } from "./jobListings/dataFunctions/keysniffer.js";

// Load job data from cache or fallback URL
const initData = await loadData({
    fileDir: "./data/api/",
    fileName: "cachedData.json", 
    fallBackUrl: "https://api.careerharvest.org/api/jobs"
});

// Load technical terms list
const techTerms = await loadData({
    fileDir: "./data/", 
    fileName: "techTerms.json", 
    fallBackUrl: ""
});

// Load soft skills list
const skills = await loadData({
    fileDir: "./data/", 
    fileName: "skills.json", 
    fallBackUrl: ""
});

// Analyze job listings for technical terms
const techTermsAnalytics = await sniff(initData, techTerms, {
    threshold: 0,
    excludeList: []
});

// Analyze job listings for soft skills
const softSkillsAnalytics = await sniff(initData, skills, {
    threshold: 0,
    excludeList: []
});

console.log({ techTermsAnalytics, softSkillsAnalytics });