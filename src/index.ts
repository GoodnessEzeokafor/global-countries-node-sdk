import { countries as allCountries } from "./all_countries"

/**
 * Call this function to get all the available countries
 * @returns all the countries
 */
export const countries = () => {
  return allCountries
}
/**
 * Call this function to get a country call code
 * @returns all a country call code
 */

export const getCountryCallCode = (country: string) => {
  if (!country) throw new Error("Please pass in a country")
  let code: string = ''
  for (let i in allCountries) {
    if (allCountries[i].country === country.toLowerCase()) {
      code = allCountries[i].code
    }
  }
  return code ? code : "Invalid country"
}

/**
 * Call this function to get a country flag link
 * @returns all a country flag
 */

export const getCountryFlag = (country: string) => {
  if (!country) throw new Error("Please pass in a country")
  let flag: string = ''
  for (let i in allCountries) {
    if (allCountries[i].country === country.toLowerCase()) {
      flag = allCountries[i].flag
    }
  }
  return flag ? flag : "Invalid country"
}


/**
 * Call this function to get a country Alpha-2 code/ Alpha-3 code
 * @returns Alpha-2 code/ Alpha-3 code
 */

export const getCountryIsoCodes = (country: string) => {
  if (!country) throw new Error("Please pass in a country")
  let codes: string = ''
  for (let i in allCountries) {
    if (allCountries[i].country === country.toLowerCase()) {
      codes = allCountries[i].isoCodes
    }
  }
  return codes ? codes : "Invalid country"


}
/**
 * Call this function to get a country capital
 * @returns country capital
 */
export const getCountryCapital = (country: string) => {
  if (!country) throw new Error("Please pass in a country")
  let capital: string = ''
  for (let i in allCountries) {
    if (allCountries[i].country === country.toLowerCase()) {
      capital = allCountries[i].capital
    }
  }
  return capital ? capital : "Invalid country"
}


// hacktoberfest-accepted