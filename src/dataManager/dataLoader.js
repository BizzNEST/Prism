import {readFile} from "fs/promises"
import { doesFileExist, storeFile } from "../fileManager/fileManager.js"

/**
 * @description fetches data from a url endpoint and returns a json object
 * @param {string} url  - A url endpoint
 * @returns {JSON}
 */
const fetchData = async function (url) {
  /**
   * @type {JSON}
   */
  const data = await fetch(url, {
    method: "GET", headers: {
      "Content-Type": "application/json"
    }
  })

  return await data.json()
}


/**
 * @typedef {object} loadDateConfig
 * @property {string} fileDir
 * @property {string} fileName
 * @property {string} fallBackUrl
 */

/**
 * @param {loadDateConfig} config
 * @description - finds a local file if not found it fetches and caches it from a url endpoint.
 * @returns {JSON}
 */
export const loadData = async function (config) {
  /** @type {string} */
  const url = config.fallBackUrl
  const fileDir = config.fileDir
  const fileName = config.fileName
  /**
   * @type {boolean}
   */
  const fileExist = await doesFileExist(fileDir, fileName);
  if (!fileExist) {     //If file does not exist
    /**
     * @type {JSON}
     */
    let result = await fetchData(url)
    /**
     * @type {string}
     */
    let jsonFile = JSON.stringify(result);
    await storeFile({ filePath: fileDir, content:jsonFile})
    return result;
  }
  else {     //If file exist
    /**
     * @type {JSON}
     */
    const file = JSON.parse(await readFile(fileDir+fileName,"utf-8"))
    return file
  }
}

