import { match } from "assert";
import * as fs from "fs/promises";

/**
 * @description - checks if a given file is present in a directory
 * @param {string} filepath - a relative or absoulte file path to directory
 * @param {string} filename - the name of file
 * @returns {boolean}
 */
export async function doesFileExist(filepath, filename) {
    const result = await fs.readdir(filepath);
    if (result.indexOf(filename) != -1) {
        return true
    }
    else {
        return false
    }
}

/**
 * @typedef {object} storeFileConfig
 * @property {string} filePath
 * @property {string} content
 */

/**
 * @description - stores a file via object config
 * @param {storeFileConfig} config - the file path to store file
 */
export async function storeFile(config) {
    await fs.writeFile(config.filePath,config.content,"utf-8")
    return
    }

