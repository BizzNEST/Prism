import { readFile } from "fs/promises"
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
 * @description - finds a local Json file if not found it fetches and caches the file from a url endpoint.
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
  let errorLog = ""
  if (!fileExist) {     //If file does not exist
    /**
     * @type {string}
     */
    errorLog += "File does not exist && "
    try {
      /**
    * @type {JSON}
    */
      let result = await fetchData(url)
      /**
       * @type {string}
       */
      let jsonFile = JSON.stringify(result);
      /**
       * @type {string}
       */
      let filePath = fileDir + fileName;
      await storeFile({ filePath: filePath, content: jsonFile })
      return result;
    } catch (e) {
      errorLog += "Failed to fetch data from url"
      throw new Error(`Could not load Data : ${errorLog}`)
    }
  }
  else {     //If file exist
    /**
     * @type {JSON}
     */
    const file = JSON.parse(await readFile(fileDir + fileName, "utf-8"))
    return file
  }
}

