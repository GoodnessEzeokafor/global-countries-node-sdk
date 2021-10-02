import { getCountryCallCode, getCountryCapital, getCountryIsoCodes } from "index";

describe('test case for getting a country capital', function () {
  test("test should return abuja", () => {
    const country = "nigeria"
    const upperCaseCountry = "Nigeria"
    const noCaseCountry = "NiGeria"
    const capital = getCountryCapital(country)
    const capital1 = getCountryCapital(upperCaseCountry)
    const capital2 = getCountryCapital(noCaseCountry)
    expect(capital).toBe("abuja");
    expect(capital1).toBe("abuja");
    expect(capital2).toBe("abuja");
  });


  test("test should return NG/NGA", () => {
    const country = "nigeria"
    const upperCaseCountry = "Nigeria"
    const noCaseCountry = "NiGeria"
    const capital = getCountryIsoCodes(country)
    const capital1 = getCountryIsoCodes(upperCaseCountry)
    const capital2 = getCountryIsoCodes(noCaseCountry)
    expect(capital).toBe("NG/NGA");
    expect(capital1).toBe("NG/NGA");
    expect(capital2).toBe("NG/NGA");
  });

  test("test should return +234", () => {
    const country = "nigeria"
    const upperCaseCountry = "Nigeria"
    const noCaseCountry = "NiGeria"
    const capital = getCountryCallCode(country)
    const capital1 = getCountryCallCode(upperCaseCountry)
    const capital2 = getCountryCallCode(noCaseCountry)
    expect(capital).toBe("+234");
    expect(capital1).toBe("+234");
    expect(capital2).toBe("+234");
  });

})