import { getCountryCallCode, getCountryCapital, getCountryFlag, getCountryIsoCodes } from "index";

describe('test case for getting a country capital', function () {
  test("test should return abuja", () => {
    const country: string = "nigeria"
    const upperCaseCountry: string = "Nigeria"
    const noCaseCountry: string = "NiGeria"
    const capital: string = getCountryCapital(country)
    const capital1: string = getCountryCapital(upperCaseCountry)
    const capital2: string = getCountryCapital(noCaseCountry)
    expect(capital).toBe("abuja");
    expect(capital1).toBe("abuja");
    expect(capital2).toBe("abuja");
  });


  test("test should return NG/NGA", () => {
    const country: string = "nigeria"
    const upperCaseCountry: string = "Nigeria"
    const noCaseCountry: string = "NiGeria"
    const capital: string = getCountryIsoCodes(country)
    const capital1: string = getCountryIsoCodes(upperCaseCountry)
    const capital2: string = getCountryIsoCodes(noCaseCountry)
    expect(capital).toBe("NG/NGA");
    expect(capital1).toBe("NG/NGA");
    expect(capital2).toBe("NG/NGA");
  });

  test("test should return +234", () => {
    const country: string = "nigeria"
    const upperCaseCountry: string = "Nigeria"
    const noCaseCountry: string = "NiGeria"
    const capital: string = getCountryCallCode(country)
    const capital1: string = getCountryCallCode(upperCaseCountry)
    const capital2: string = getCountryCallCode(noCaseCountry)
    expect(capital).toBe("+234");
    expect(capital1).toBe("+234");
    expect(capital2).toBe("+234");
  });

  test("test should return country flag", () => {
    const country: string = "nigeria"
    const upperCaseCountry: string = "Nigeria"
    const noCaseCountry: string = "NiGeria"
    const flag: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1280px-Flag_of_Nigeria.svg.png"
    const capital: string = getCountryFlag(country)
    const capital1: string = getCountryFlag(upperCaseCountry)
    const capital2: string = getCountryFlag(noCaseCountry)
    expect(capital).toBe(flag);
    expect(capital1).toBe(flag);
    expect(capital2).toBe(flag);
  });
})