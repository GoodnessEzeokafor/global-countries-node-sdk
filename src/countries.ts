type TCountries = {
  country: string;
  capital: string;
  code: string;
  isoCodes: string;
  flag: string;
}
const countries: TCountries[] = [
  {
    country: 'afghanistan',
    capital: 'kabul',
    code: "+93",
    isoCodes: 'AF/AFG',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/158px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png",
  },
  {
    country: 'albania',
    capital: 'tirana',
    code: '+355',
    isoCodes: 'AL/ALB',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/238px-Flag_of_Albania.svg.png',
  },
  {
    country: 'algeria',
    capital: 'algiers',
    isoCodes: 'DZ/DZA',
    code: "+213",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
  },
  {
    country: 'american samoa',
    capital: 'pago pago',
    isoCodes: 'AS/ASM',
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg",
    code: "+1-684"
  },
  {
    country: 'andorra',
    capital: 'andorra la vella',
    isoCodes: 'AD/AND',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/800px-Flag_of_Andorra.svg.png",
    code: "+376"
  },
  {
    country: 'angola',
    capital: 'luanda',
    isoCodes: 'AO/AGO',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1024px-Flag_of_Angola.svg.png",
    code: '+244'
  },

  {
    country: 'anguilla',
    capital: 'the valley',
    isoCodes: 'AI/AIA',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Anguilla.svg/1280px-Flag_of_Anguilla.svg.png",
    code: "+1-264"
  },
  {
    country: 'antigua and barbuda',
    capital: "saint john's",
    isoCodes: 'AG/ATG',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/1024px-Flag_of_Antigua_and_Barbuda.svg.png",
    code: "+1-268"
  },
  {
    country: 'antarctica',
    capital: 'antarctica',
    isoCodes: 'AQ/ATA',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_the_Antarctic_Treaty.svg/1024px-Flag_of_the_Antarctic_Treaty.svg.png",
    code: '+672'
  },


  {
    country: 'argentina',
    capital: 'buenos aires',
    isoCodes: 'AR/ARG',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1024px-Flag_of_Argentina.svg.png",
    code: "+54"
  },
  {
    country: 'armenia',
    capital: 'yerevan',
    isoCodes: 'AM/ARM',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1280px-Flag_of_Armenia.svg.png",
    code: "+374"
  },
  {
    country: 'aruba',
    capital: 'oranjestad',
    isoCodes: 'AW/ABW',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Aruba.svg/1024px-Flag_of_Aruba.svg.png",
    code: "+297"
  },
  {
    country: 'australia',
    capital: 'canberra',
    isoCodes: 'AU/AUS',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.svg.png",
    code: "+61"
  },
  {
    country: 'austria',
    capital: 'vienna',
    isoCodes: 'AT/AUT',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1024px-Flag_of_Austria.svg.png",
    code: "+43"
  },
  {
    country: 'azerbaijan',
    capital: 'baku',
    isoCodes: 'AZ/AZE',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/255px-Flag_of_Azerbaijan.svg.png',
    code: '+994'
  },
  {
    country: 'Bahamas',
    capital: 'nassau',
    isoCodes: 'BS/BHS',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/255px-Flag_of_the_Bahamas.svg.png",
    code: "+1-242"
  },
  {
    country: 'bahrain',
    capital: 'manama',
    isoCodes: 'BH/BHR',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/1024px-Flag_of_Bahrain.svg.png",
    code: "+973"
  },
  {
    country: 'bangladesh',
    capital: 'dhaka',
    isoCodes: 'BD/BGD',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1024px-Flag_of_Bangladesh.svg.png",
    code: "+880"
  },
  {
    country: 'barbados',
    capital: 'bridgetown',
    isoCodes: 'BB/BRB',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/255px-Flag_of_Barbados.svg.png",
    code: "+1-246"
  },
  {
    country: 'belarus',
    capital: 'minsk',
    isoCodes: 'BY/BLR',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1280px-Flag_of_Belarus.svg.png",
    code: "+375"
  },
  {
    country: 'belgium',
    capital: 'brussels',
    isoCodes: 'BE/BEL',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/800px-Flag_of_Belgium.svg.png",
    code: "+32"
  },
  {

    country: 'belize',
    capital: 'belmopan',
    isoCodes: 'BZ/BLZ	',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1024px-Flag_of_Belize.svg.png",
    code: "+501"
  },
  {
    country: 'benin',
    capital: 'porto-novo',
    isoCodes: 'BJ/BEN',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/1024px-Flag_of_Benin.svg.png",
    code: "+229"
  },
  {
    country: 'bermuda',
    capital: 'hamilton',
    isoCodes: 'BM/BMU',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bermuda.svg/1280px-Flag_of_Bermuda.svg.png",
    code: '+1-441'
  },
  {
    country: 'bhutan',
    capital: 'thimphu',
    isoCodes: 'BT/BTN',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/255px-Flag_of_Bhutan.svg.png",
    code: '+975'
  },
  {

    country: 'bolivia',
    capital: 'la paz / sucre',
    isoCodes: 'BO/BOL',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bandera_de_Bolivia_%28Estado%29.svg/250px-Bandera_de_Bolivia_%28Estado%29.svg.png",
    code: '+591'
  },
  {

    country: 'bosnia and herzegovina',
    capital: 'sarajevo',
    isoCodes: 'BA/BIH',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1280px-Flag_of_Bosnia_and_Herzegovina.svg.png',
    code: '+387'
  },
  {
    country: 'botswana',
    capital: 'gaborone',
    isoCodes: 'BW/BWA',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/1024px-Flag_of_Botswana.svg.png",
    code: '+267'
  },
  {

    country: 'brazil',
    capital: 'brasilia',
    isoCodes: 'BR/BRA',
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
    code: '+55'
  },
  {
    country: 'british indian ocean territory',
    capital: 'camp justice',
    isoCodes: 'IO/IOT',
    code: '+246',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg/1280px-Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg.png'
  },
  {
    country: 'british virgin islands',
    capital: 'road town',
    isoCodes: 'VG/VGB',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_British_Virgin_Islands.svg/255px-Flag_of_the_British_Virgin_Islands.svg.png",
    code: '+1-284'
  },
  {
    country: 'brunei',
    capital: 'bandar seri begawan',
    isoCodes: 'BN/BRN',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/255px-Flag_of_Brunei.svg.png",
    code: '+673'
  },
  {

    country: 'bulgaria',
    capital: 'sofia',
    isoCodes: 'BG/BGR',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1024px-Flag_of_Bulgaria.svg.png",
    code: '+359'
  },
  {
    country: 'burkina faso',
    capital: 'ouagadougou',
    isoCodes: 'BF/BFA',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/1024px-Flag_of_Burkina_Faso.svg.png",
    code: '+226'
  },

  {
    country: 'burundi',
    capital: 'bujumbura',
    isoCodes: 'BI/BDI',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/255px-Flag_of_Burundi.svg.png",
    code: '+257'
  },
  {
    country: 'cambodia',
    capital: 'phnom penh',
    isoCodes: 'KH/KHM',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/800px-Flag_of_Cambodia.svg.png",
    code: '+855'
  },
  {

    country: 'cameroon',
    capital: 'yaounde',
    isoCodes: 'CM/CMR',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/1024px-Flag_of_Cameroon.svg.png",
    code: '+237'
  },
  {
    country: 'canada',
    capital: 'ottawa',
    isoCodes: 'CA/CAN',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png",
    code: '+1'
  },
  {
    country: 'cape verde',
    capital: 'praia',
    isoCodes: 'CV/CPV',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_Cape_Verde_%282-3_ratio%29.svg/1024px-Flag_of_Cape_Verde_%282-3_ratio%29.svg.png",
    code: '+238'
  },
  {
    country: 'cayman islands',
    capital: 'george town',
    isoCodes: 'KY/CYM',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_the_Cayman_Islands.svg/255px-Flag_of_the_Cayman_Islands.svg.png",
    code: '+1-345'
  },
  {
    country: 'central african republic',
    capital: 'bangui',
    isoCodes: 'CF/CAF',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/1024px-Flag_of_the_Central_African_Republic.svg.png",
    code: '+236'
  },
  {
    country: 'chad',
    capital: "n'djamena",
    isoCodes: 'TD/TCD',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/1024px-Flag_of_Chad.svg.png",
    code: '+235'
  },
  {
    country: 'chile',
    capital: 'santiago',
    isoCodes: 'CL/CHL',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/800px-Flag_of_Chile.svg.png",
    code: '+56'
  },
  {
    country: 'china',
    capital: 'beijing',
    isoCodes: 'CN/CHN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1024px-Flag_of_the_People%27s_Republic_of_China.svg.png',
    code: '+86'
  },
  {
    country: 'christmas island',
    capital: 'Flying Fish Cove',
    isoCodes: 'CX/CXR',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Flag_of_Christmas_Island.svg/1280px-Flag_of_Christmas_Island.svg.png",
    code: '+61'
  },
  {
    country: 'cocos (keeling) islands',
    capital: 'west island',
    isoCodes: 'CC/CCK',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg/1280px-Flag_of_the_Cocos_%28Keeling%29_Islands.svg.png",
    code: '+61'
  },
  {
    country: 'colombia',
    capital: 'bogota',
    isoCodes: 'CO/COL',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/800px-Flag_of_Colombia.svg.png",
    code: '+57'
  },
  {

    country: 'curaçao',
    capital: 'willemstad',

    isoCodes: 'CW/CUW',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Cura%C3%A7ao.svg/1024px-Flag_of_Cura%C3%A7ao.svg.png",
    code: '+599'
  },
  {
    country: 'comoros',
    capital: 'moroni',
    isoCodes: 'KM/COM',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/1024px-Flag_of_the_Comoros.svg.png",
    code: '+269'
  },
  {
    country: 'republic of the congo',
    capital: 'brazzaville',
    isoCodes: 'CG/COG',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/1024px-Flag_of_the_Republic_of_the_Congo.svg.png",
    code: '+242'
  },
  {
    country: 'cook islands',
    capital: 'avarua',
    isoCodes: 'CK/COK',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_the_Cook_Islands.svg/1280px-Flag_of_the_Cook_Islands.svg.png",
    code: '+682'
  },
  {
    country: 'costa rica',
    capital: 'san jose',
    isoCodes: 'CR/CRI',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/1024px-Flag_of_Costa_Rica_%28state%29.svg.png",
    code: '+506'
  },
  {

    country: "cote d'ivoire",
    capital: 'yamoussoukro',
    isoCodes: 'CI/CIV',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/1024px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png",
    code: '+225'
  },
  {

    country: 'croatia',
    capital: 'zagreb',
    isoCodes: 'HR/HRV',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1280px-Flag_of_Croatia.svg.png",
    code: '+385'
  },
  {

    country: 'cuba',
    capital: 'havana',
    isoCodes: 'CU/CUB',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1280px-Flag_of_Cuba.svg.png",
    code: '+53'
  },
  {
    country: 'cyprus',
    capital: 'nicosia',
    isoCodes: 'CY/CYP',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/1024px-Flag_of_Cyprus.svg.png",
    code: '+357'
  },
  {
    country: 'czech republic',
    capital: 'prague',
    isoCodes: 'CZ/CZE',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1024px-Flag_of_the_Czech_Republic.svg.png",
    code: '+420'
  },
  {
    country: 'denmark',
    capital: 'copenhagen',
    isoCodes: 'DK/DNK',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/800px-Flag_of_Denmark.svg.png",
    code: '+45'
  },
  {

    country: 'democratic republic of the congo',
    capital: 'kinshasa',
    isoCodes: 'CD/COD',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/800px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png',
    code: '+243'
  },
  {
    country: 'djibouti',
    capital: 'djibouti',
    isoCodes: 'DJ/DJI',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/1024px-Flag_of_Djibouti.svg.png",
    code: '+253'
  },
  {

    country: 'dominica',
    capital: 'roseau',
    isoCodes: 'DM/DMA',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/1280px-Flag_of_Dominica.svg.png",
    code: '+1-767'
  },
  {

    country: 'dominican republic',
    capital: 'santo domingo',
    isoCodes: 'DM/DMA',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/800px-Flag_of_the_Dominican_Republic.svg.png",
    code: '+1-809, +1-829, +1-849'
  },
  {

    country: 'east timor',
    capital: 'dili',
    isoCodes: 'TL/TLS',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/1280px-Flag_of_East_Timor.svg.png",
    code: '+670'
  },

  {

    country: 'ecuador',
    capital: 'quito',
    isoCodes: 'EC/ECU',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1024px-Flag_of_Ecuador.svg.png",
    code: '+593'
  },
  {

    country: 'egypt',
    capital: 'cairo',
    isoCodes: 'EG/EGY',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1024px-Flag_of_Egypt.svg.png",
    code: '+20'
  },
  {
    country: 'el salvador',
    capital: 'san salvador',
    isoCodes: 'SV/SLV',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/1024px-Flag_of_El_Salvador.svg.png",
    code: '+503'
  },
  {
    country: 'equatorial guinea',
    capital: 'malabo',
    isoCodes: 'GQ/GNQ',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/1024px-Flag_of_Equatorial_Guinea.svg.png",
    code: '+240'
  },
  {

    country: 'eritrea',
    capital: 'asmara',
    isoCodes: 'ER/ERI',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/1280px-Flag_of_Eritrea.svg.png",
    code: '+291'
  },

  {
    country: 'estonia',
    capital: 'tallinn',
    isoCodes: 'EE/EST',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1024px-Flag_of_Estonia.svg.png",
    code: '+372'
  },
  {
    country: 'ethiopia',
    capital: 'addis ababa',
    isoCodes: 'ET/ETH',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1280px-Flag_of_Ethiopia.svg.png",
    code: '+251'
  },
  {

    country: 'falkland islands (islas malvinas)',
    capital: 'stanley',
    isoCodes: 'FK/FLK',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_Falkland_Islands.svg/1280px-Flag_of_the_Falkland_Islands.svg.png",
    code: '+500'
  },
  {
    country: 'faroe islands',
    capital: 'torshavn',
    isoCodes: 'FO/FRO',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_the_Faroe_Islands.svg/800px-Flag_of_the_Faroe_Islands.svg.png",
    code: '+298'
  },
  {
    country: 'fiji',
    capital: 'suva',
    isoCodes: 'FJ/FJI',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/1280px-Flag_of_Fiji.svg.png",
    code: '+679'
  },
  {
    country: 'finland',
    capital: 'helsinki',
    isoCodes: 'FI/FIN',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1024px-Flag_of_Finland.svg.png",
    code: '+358'
  },
  {
    country: 'france',
    capital: 'paris',
    isoCodes: 'FR/FRA',
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png",
    code: "+33"
  },
  {
    country: 'french polynesia',
    capital: 'papeete',
    isoCodes: 'PF/PYF',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_French_Polynesia.svg/1024px-Flag_of_French_Polynesia.svg.png",
    code: '+689'
  },
  {
    country: 'gabon',
    capital: 'libreville',
    isoCodes: 'GA/GAB',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/800px-Flag_of_Gabon.svg.png",
    code: '+241'
  },

  {

    country: 'gambia',
    capital: 'banjul',
    isoCodes: 'GM/GMB',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/1024px-Flag_of_The_Gambia.svg.png",
    code: '+220'
  },
  {

    country: 'georgia',
    capital: "t'bilisi",
    isoCodes: 'GE/GEO',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1024px-Flag_of_Georgia.svg.png",
    code: '+995'
  },
  {
    country: 'germany',
    capital: 'berlin',
    isoCodes: 'DE/DEU',
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1024px-Flag_of_Germany.svg.png",
    code: '+49'
  },
  {
    country: 'ghana',
    capital: 'accra',
    isoCodes: 'GH/GHA',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1024px-Flag_of_Ghana.svg.png",
    code: "+233"
  },
  {

    country: 'gibraltar',
    capital: 'gibraltar',
    isoCodes: 'GI/GIB',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_Gibraltar.svg/255px-Flag_of_Gibraltar.svg.png",
    code: '+350'
  },
  {

    country: 'greece',
    capital: 'athens',
    isoCodes: 'GR/GRC',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1024px-Flag_of_Greece.svg.png',
    code: '+30'
  },
  {

    country: 'greenland',
    capital: 'nuuk (godthab)',
    isoCodes: 'GL/GRL',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Greenland.svg/1024px-Flag_of_Greenland.svg.png',
    code: '+299'
  },
  {
    country: 'grenada',
    capital: "saint george's",
    isoCodes: 'GD/GRD',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/255px-Flag_of_Grenada.svg.png',
    code: "+1-473"
  },
  {

    country: 'guadeloupe',
    capital: 'basse-terre',
    isoCodes: 'GP/GLP',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png',
    code: '+590'
  },
  {
    country: 'guam',
    capital: 'hagatna (agana)',
    isoCodes: 'GU/GUM',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Guam.svg/1280px-Flag_of_Guam.svg.png',
    code: '+1-671'
  },
  {

    country: 'guatemala',
    capital: 'guatemala',
    isoCodes: 'GT/GTM',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/255px-Flag_of_Guatemala.svg.png',
    code: '+502'
  },
  {
    country: 'guinea',
    capital: 'conakry',
    isoCodes: 'GN/GIN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/1024px-Flag_of_Guinea.svg.png',
    code: '+240'
  },
  {
    country: 'guinea-bissau',
    capital: 'bissau',
    isoCodes: 'GW/GNB',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/1280px-Flag_of_Guinea-Bissau.svg.png',
    code: '+245'
  },
  {
    country: 'guyana',
    capital: 'georgetown',
    isoCodes: 'GY/GUY',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/1024px-Flag_of_Guyana.svg.png",
    code: '+592'
  },
  {
    country: 'haiti',
    capital: 'port-au-prince',
    isoCodes: 'HT/HTI',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/1024px-Flag_of_Haiti.svg.png",
    code: '+509'
  },
  {
    country: 'honduras',
    capital: 'tegucigalpa',
    isoCodes: 'HN/HND',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1280px-Flag_of_Honduras.svg.png',
    code: "+504"
  },
  {
    country: 'hungary',
    capital: 'budapest',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1280px-Flag_of_Hungary.svg.png',
    code: '+36',
    isoCodes: 'HU/HUN'
  },
  {
    country: 'hong kong',
    capital: 'victoria',
    isoCodes: 'HK/HKG',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1024px-Flag_of_Hong_Kong.svg.png",
    code: '+852'
  },


  {
    country: 'iceland',
    capital: 'reykjavik',
    isoCodes: 'IS/ISL',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.svg.png',
    code: '+354'
  },
  {
    country: 'india',
    capital: 'new delhi',
    isoCodes: 'IN/IND',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png',
    code: '+91'
  },
  {
    country: 'indonesia',
    capital: 'jakarta',
    isoCodes: 'ID/IDN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1024px-Flag_of_Indonesia.svg.png',
    code: '+62'
  },
  {

    country: 'iran',
    capital: 'tehran',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/630px-Flag_of_Iran.svg.png',
    code: '+98',
    isoCodes: 'IR/IRN',
  },
  {

    country: 'iraq',
    capital: 'baghdad',
    isoCodes: 'IQ/IRQ',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/800px-Flag_of_Iraq.svg.png',
    code: '+964'
  },
  {
    country: 'ireland',
    capital: 'dublin',
    isoCodes: 'IE/IRL',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1280px-Flag_of_Ireland.svg.png',
    code: '+353'
  },
  {
    country: 'israel',
    capital: 'jerusalem',
    isoCodes: 'IL/ISR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/800px-Flag_of_Israel.svg.png',
    code: '+972'
  },
  {
    country: 'italy',
    capital: 'rome',
    isoCodes: 'IT/ITA',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1024px-Flag_of_Italy.svg.png',
    code: '+39'

  },
  {

    country: 'jamaica',
    capital: 'kingston',
    isoCodes: 'JM/JAM',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1280px-Flag_of_Jamaica.svg.png',
    code: '+1-876'
  },
  {

    country: 'japan',
    capital: 'tokyo',
    isoCodes: 'JP/JPN',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1024px-Flag_of_Japan.svg.png',
    code: '+81'
  },
  {
    country: 'jordan',
    capital: 'amman',
    isoCodes: 'JO/JOR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1280px-Flag_of_Jordan.svg.png',
    code: '+962'
  },
  {
    country: 'kazakhstan',
    capital: 'astana (akmola)',
    isoCodes: 'KZ/KAZ',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/255px-Flag_of_Kazakhstan.svg.png',
    code: '+7'
  },
  {

    country: 'kenya',
    capital: 'nairobi',
    isoCodes: 'KE/KEN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1024px-Flag_of_Kenya.svg.png',
    code: '+254'
  },
  {
    country: 'kiribati',
    capital: 'tarawa',
    isoCodes: 'KI/KIR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/255px-Flag_of_Kiribati.svg.png',
    code: '+686'
  },





  {

    country: 'north korea',
    capital: "p'yongyang",
    isoCodes: 'KP/PRK',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1280px-Flag_of_North_Korea.svg.png',
    code: '+850'
  },
  {

    country: 'south korea',
    capital: 'seoul',
    isoCodes: 'KR/KOR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1024px-Flag_of_South_Korea.svg.png',
    code: '+82'
  },
  {

    country: 'kuwait',
    capital: 'kuwait',
    isoCodes: 'KW/KWT',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1280px-Flag_of_Kuwait.svg.png',
    code: '+965'
  },
  {

    country: 'kyrgyzstan',
    capital: 'bishkek',
    isoCodes: 'KG/KGZ',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1024px-Flag_of_Kyrgyzstan.svg.png',
    code: '+996'
  },
  {
    country: 'laos',
    capital: 'vientiane',
    isoCodes: 'LA/LAO',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/1024px-Flag_of_Laos.svg.png',
    code: '+856'
  },
  {
    country: 'latvia',
    capital: 'riga',
    isoCodes: 'LV/LVA',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/1280px-Flag_of_Latvia.svg.png',
    code: '+371'
  },
  {

    country: 'lebanon',
    capital: 'beirut',
    isoCodes: 'LB/LBN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/1024px-Flag_of_Lebanon.svg.png',
    code: '+961'
  },
  {

    country: 'lesotho',
    capital: 'maseru',
    isoCodes: 'LS/LSO',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/255px-Flag_of_Lesotho.svg.png',
    code: '+266'
  },
  {

    country: 'liberia',
    capital: 'monrovia',
    isoCodes: 'LR/LBR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/1280px-Flag_of_Liberia.svg.png',
    code: '+231'
  },
  {
    country: 'libya',
    capital: 'tripoli',
    isoCodes: 'LY/LBY',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/1280px-Flag_of_Libya.svg.png',
    code: '+218'
  },
  {

    country: 'liechtenstein',
    capital: 'vaduz',
    isoCodes: 'LI/LIE',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/1024px-Flag_of_Liechtenstein.svg.png',
    code: '+423	'
  },
  {
    country: 'lithuania',
    capital: 'vilnius',
    isoCodes: 'LT/LTU',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/1024px-Flag_of_Lithuania.svg.png',
    code: '+370'
  },
  {

    country: 'luxembourg',
    capital: 'luxembourg',
    isoCodes: 'LU/LUX',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1024px-Flag_of_Luxembourg.svg.png',
    code: '+352'
  },

  {
    country: 'madagascar',
    capital: 'antananarivo',
    isoCodes: 'MG/MDG',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/1024px-Flag_of_Madagascar.svg.png',
    code: '+261'
  },
  {

    country: 'malawi',
    capital: 'lilongwe',
    isoCodes: 'MW/MWI',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/1024px-Flag_of_Malawi.svg.png',
    code: '+265'
  },
  {

    country: 'malaysia',
    capital: 'kuala lumpur',
    isoCodes: 'MY/MYS',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1280px-Flag_of_Malaysia.svg.png',
    code: '+60'
  },
  {
    country: 'maldives',
    capital: 'male (maale)',
    isoCodes: 'MV/MDV',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/1024px-Flag_of_Maldives.svg.png',
    code: '+960'
  },
  {

    country: 'mali',
    capital: 'bamako',
    isoCodes: 'ML/MLI',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/1024px-Flag_of_Mali.svg.png',
    code: '+223'
  },
  {

    country: 'malta',
    capital: 'valletta',
    isoCodes: 'MT/MLT',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/1024px-Flag_of_Malta.svg.png',
    code: '+356'
  },
  {

    country: 'isle of man',
    capital: 'douglas',
    isoCodes: 'IM/IMN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Flag_of_the_Isle_of_Mann.svg/1280px-Flag_of_the_Isle_of_Mann.svg.png',
    code: '+44-1624'
  },
  {
    country: 'marshall islands',
    capital: 'majuro',
    isoCodes: 'MH/MHL',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/255px-Flag_of_the_Marshall_Islands.svg.png',
    code: '+692'
  },

  {

    country: 'mauritania',
    capital: 'nouakchott',
    isoCodes: 'MR/MRT',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/1024px-Flag_of_Mauritania.svg.png',
    code: '+222'
  },
  {

    country: 'mauritius',
    capital: 'port louis',
    isoCodes: 'MU/MUS',

    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/1024px-Flag_of_Mauritius.svg.png',
    code: '+230'
  },
  {
    country: 'mayotte',
    capital: 'mamoutzou',
    isoCodes: 'YT/MYT',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png',
    code: '+262'
  },
  {
    country: 'mexico',
    capital: 'mexico',
    isoCodes: 'MX/MEX',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/255px-Flag_of_Mexico.svg.png',
    code: '+52'
  },
  {

    country: 'federated states of micronesia',
    capital: 'palikir',

    isoCodes: 'FM/FSM',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/1280px-Flag_of_the_Federated_States_of_Micronesia.svg.png',
    code: '+691'
  },
  {

    country: 'moldova',
    capital: 'chisinau',
    isoCodes: 'MD MDA',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1280px-Flag_of_Moldova.svg.png',
    code: '+373'
  },
  {
    country: 'monaco',
    capital: 'monaco',
    isoCodes: 'MC/MCO',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/800px-Flag_of_Monaco.svg.png',
    code: '+377'
  },
  {

    country: 'mongolia',
    capital: 'ulaanbaatar',
    isoCodes: 'MN/MNG',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/1280px-Flag_of_Mongolia.svg.png',
    code: '+976'
  },
  {
    country: 'montserrat',
    capital: 'plymouth',
    isoCodes: 'MS/MSR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Montserrat.svg/250px-Flag_of_Montserrat.svg.png',
    code: '+1-664'
  },
  {
    country: 'morocco',
    capital: 'rabat',
    isoCodes: 'MA/MAR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1024px-Flag_of_Morocco.svg.png',
    code: '+212'
  },
  {
    country: 'mozambique',
    capital: 'maputo',
    isoCodes: 'MZ/MOZ',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/1024px-Flag_of_Mozambique.svg.png',
    code: '+258'
  },
  {
    country: 'myanmar',
    capital: 'rangoon',

    isoCodes: 'MM/MMR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/1024px-Flag_of_Myanmar.svg.png',
    code: '+95'
  },
  {

    country: 'namibia',
    capital: 'windhoek',
    isoCodes: 'NA/NAM',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/1024px-Flag_of_Namibia.svg.png',
    code: '+264'
  },
  {

    country: 'nauru',
    capital: 'No capital',
    isoCodes: 'NR/NRU',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/1280px-Flag_of_Nauru.svg.png',
    code: '+674'
  },
  {
    country: 'nepal',
    capital: 'kathmandu',

    isoCodes: 'NP/NPL',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/800px-Flag_of_Nepal.svg.png',
    code: '+977'
  },
  {

    country: 'netherlands',
    capital: 'amsterdam',

    isoCodes: 'NL/NLD',
    code: '+31',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1024px-Flag_of_the_Netherlands.svg.png',
  },
  {
    country: 'netherlands antilles',
    capital: 'willemstad',
    isoCodes: 'AN/ANT',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Flag_of_the_Netherlands_Antilles_%281959%E2%80%931986%29.svg/1024px-Flag_of_the_Netherlands_Antilles_%281959%E2%80%931986%29.svg.png',
    code: '+599'
  },
  {

    country: 'new caledonia',
    capital: 'noumea',
    isoCodes: 'NC/NCL',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png',
    code: '+687'
  },
  {

    country: 'new zealand',
    capital: 'wellington',
    isoCodes: 'NZ/NZL',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/800px-Flag_of_New_Zealand.svg.png',
    code: '+64'
  },
  {
    country: 'nicaragua',
    capital: 'managua',
    isoCodes: 'NI/NIC',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/255px-Flag_of_Nicaragua.svg.png',
    code: '+505'

  },
  {

    country: 'niger',
    capital: 'niamey',
    isoCodes: 'NE/NER',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/800px-Flag_of_Niger.svg.png',
    code: '+227'
  },
  {

    country: 'nigeria',
    capital: 'abuja',
    isoCodes: 'NG/NGA',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1280px-Flag_of_Nigeria.svg.png',
    code: '+234'
  },
  {
    country: 'niue',
    capital: 'alofi',
    isoCodes: 'NU/NIU',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Niue.svg/1280px-Flag_of_Niue.svg.png',
    code: "+683"
  },

  {

    country: 'northern mariana islands',
    capital: 'saipan',
    isoCodes: 'MP/MNP',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_the_Northern_Mariana_Islands.svg/1280px-Flag_of_the_Northern_Mariana_Islands.svg.png',
    code: '+1-670'
  },
  {

    country: 'norway',
    capital: 'Oslo',
    isoCodes: 'NO/NOR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/800px-Flag_of_Norway.svg.png',
    code: '+47'
  },



  {

    country: 'democratic republic of the congo',
    capital: 'kinshasa',
    isoCodes: 'CD/COD',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/800px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png',
    code: '+243'
  },


  {

    country: 'macau',
    capital: 'macau',
    isoCodes: 'MO/MAC',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/1024px-Flag_of_Macau.svg.png",
    code: '+853'
  },
  {

    country: 'antarctica',
    capital: 'antarctica',
    isoCodes: 'AQ/ATA',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_the_Antarctic_Treaty.svg/1024px-Flag_of_the_Antarctic_Treaty.svg.png",
    code: '+672'
  },


  {

    country: 'heard island and mcDonald islands',
    capital: 'No capital',
    isoCodes: '',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.svg.png",
    code: 'No country code'
  },
  {

    country: 'saint helena',
    capital: 'jamestown',
    isoCodes: 'SH/SHN',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Saint_Helena.svg/1280px-Flag_of_Saint_Helena.svg.png",
    code: '+290'
  },
  {
    country: 'south georgia and the south sandwich islands',
    capital: 'king edward point',
    isoCodes: 'GS/SGS',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg/255px-Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg.png",
    code: '+500'
  },
  {
    country: 'guernsey',
    capital: 'saint peter port',
    isoCodes: 'GG/GGY',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Guernsey.svg/1024px-Flag_of_Guernsey.svg.png",
    code: '+44-1481'
  },
  {
    country: 'serbia',
    capital: 'belgrade',
    isoCodes: 'RS/SRB',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1024px-Flag_of_Serbia.svg.png",
    code: '+381'
  },
  {
    country: 'saint barthélemy',
    capital: 'Gustavia',
    isoCodes: 'BL/BLM',
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png",
    code: '+590'
  },
  {
    country: 'montenegro',
    capital: 'podgorica',
    isoCodes: 'ME/MNE',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/255px-Flag_of_Montenegro.svg.png",
    code: '+382'
  },
  {
    country: 'jersey',
    capital: 'saint helier',
    isoCodes: 'JE/JEY',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Jersey.svg/1024px-Flag_of_Jersey.svg.png",
    code: '+44-1534'
  },
  {
    country: 'qatar',
    capital: 'doha',
    isoCodes: 'QA/QAT',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1280px-Flag_of_Qatar.svg.png',
    code: '+974'
  },

  {
    country: 'oman',
    capital: 'muscat',
    isoCodes: 'OM/OMN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/1280px-Flag_of_Oman.svg.png',
    code: '+968'
  },
  {
    country: 'pakistan',
    capital: 'islamabad',
    isoCodes: 'PK/PAK',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1024px-Flag_of_Pakistan.svg.png',
    code: '+92'
  },
  {
    country: 'palau',
    capital: 'koror',
    isoCodes: 'PW/PLW',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/1024px-Flag_of_Palau.svg.png',
    code: '+680'
  },
  {
    country: 'palestinian',
    capital: 'east jerusalem',
    isoCodes: 'PS/PSE',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/1280px-Flag_of_Palestine.svg.png',
    code: '+970'
  },
  {
    country: 'panama',
    capital: 'panama',
    isoCodes: 'PA/PAN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/1024px-Flag_of_Panama.svg.png',
    code: '+507'
  },
  {
    country: 'papua new guinea',
    capital: 'port moresby',
    isoCodes: 'PG/PNG',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/800px-Flag_of_Papua_New_Guinea.svg.png',
    code: '+675'
  },
  {

    country: 'paraguay',
    capital: 'asuncion',
    isoCodes: 'PY/PRY',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1024px-Flag_of_Paraguay.svg.png',
    code: '+595'
  },
  {

    country: 'peru',
    capital: 'lima',
    isoCodes: '',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1024px-Flag_of_Peru.svg.png',
    code: '+51'
  },
  {
    country: 'philippines',
    capital: 'manila',
    isoCodes: 'PH/PHL',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/255px-Flag_of_the_Philippines.svg.png',
    code: '+63'
  },
  {
    country: 'pitcairn',
    capital: 'adamstown',
    isoCodes: 'PN/PCN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Coat_of_arms_of_the_Pitcairn_Islands.svg/220px-Coat_of_arms_of_the_Pitcairn_Islands.svg.png',
    code: '+46'
  },
  {

    country: 'poland',
    capital: 'warsaw',
    isoCodes: 'PL/POL',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1024px-Flag_of_Poland.svg.png',
    code: '+48'
  },
  {
    country: 'portugal',
    capital: 'lisbon',
    isoCodes: 'PT/PRT',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/600px-Flag_of_Portugal.svg.png',
    code: '+351'
  },
  {
    country: 'puerto rico',
    capital: 'san juan',
    isoCodes: 'PR/PRI',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/1024px-Flag_of_Puerto_Rico.svg.png',
    code: '+1-787, +1-939'
  },
  {
    country: 'reunion',
    capital: 'saint-denis',
    isoCodes: 'RE/REU',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png',
    code: '+262'
  },
  {

    country: 'romania',
    capital: 'bucharest',
    isoCodes: 'RO/ROU',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1024px-Flag_of_Romania.svg.png',
    code: '+40'
  },
  {
    country: 'russia',
    capital: 'moscow',
    isoCodes: 'RU/RUS',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1024px-Flag_of_Russia.svg.png',
    code: '+7'
  },
  {

    country: 'rwanda',
    capital: 'kigali',
    isoCodes: 'RW/RWA',
    code: '+250',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/255px-Flag_of_Rwanda.svg.png'
  },

  {
    country: 'saint martin',
    capital: 'marigot',
    isoCodes: 'MF/MAF',
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png",
    code: '+590'
  },



  {

    country: 'saint kitts and nevis',
    capital: 'basseterre',
    isoCodes: 'KN/KNA',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/255px-Flag_of_Saint_Kitts_and_Nevis.svg.png',
    code: '+1-869'
  },

  {
    country: 'saint lucia',
    capital: 'castries',
    isoCodes: 'LC/LCA',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/1280px-Flag_of_Saint_Lucia.svg.png',
    code: '+1-758'
  },
  {
    country: 'saint pierre and miquelon',
    capital: 'saint-pierre',
    isoCodes: 'PM/SPM',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png',
    code: '+508'
  },
  {
    country: 'saint vincent and the grenadines',
    capital: 'kingstown',
    isoCodes: 'VC/VCT',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/1024px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png',
    code: '+1-784'
  },
  {
    country: 'san marino',
    capital: 'san marino',
    isoCodes: 'SM/SMR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/227px-Flag_of_San_Marino.svg.png',
    code: '+378'
  },
  {

    country: 'sao tome and principe',
    capital: 'sao tome',
    isoCodes: 'ST/STP',
    code: '+239',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Sao_Tome_and_Principe.svg/1280px-Flag_of_Sao_Tome_and_Principe.svg.png'
  },
  {
    country: 'saudi arabia',
    capital: 'riyadh',
    isoCodes: 'SA/SAU',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1024px-Flag_of_Saudi_Arabia.svg.png',
    code: '+966'
  },
  {
    country: 'senegal',
    capital: 'dakar',
    isoCodes: 'SN/SEN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1024px-Flag_of_Senegal.svg.png',
    code: '+221'
  },
  {
    country: 'seychelles',
    capital: 'victoria',
    isoCodes: 'SC/SYC',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/1280px-Flag_of_Seychelles.svg.png',
    code: '+248'
  },
  {
    country: 'sierra leone',
    capital: 'freetown',
    isoCodes: 'SL/SLE',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/1024px-Flag_of_Sierra_Leone.svg.png',
    code: '+232'
  },
  {
    country: 'singapore',
    capital: 'singapore',
    isoCodes: 'SG/SGP',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1024px-Flag_of_Singapore.svg.png',
    code: '+65	'
  },
  {

    country: 'slovakia',
    capital: 'bratislava',
    isoCodes: 'SK/SVK',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/512px-Flag_of_Slovakia.svg.png',
    code: '+421'
  },
  {

    country: 'slovenia',
    capital: 'ljubljana',
    isoCodes: 'SI/SVN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1280px-Flag_of_Slovenia.svg.png',
    code: '+386'
  },
  {
    country: 'solomon islands',
    capital: 'honiara',
    isoCodes: 'SB/SLB',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/1280px-Flag_of_the_Solomon_Islands.svg.png',
    code: '+677'
  },

  {
    country: 'somalia',
    capital: 'mogadishu',
    isoCodes: 'SO/SOM',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/1024px-Flag_of_Somalia.svg.png',
    code: '+252'
  },
  {
    country: 'south africa',
    capital: 'pretoria',
    isoCodes: 'ZA/ZAF',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/255px-Flag_of_South_Africa.svg.png',
    code: '+27'
  },
  {

    country: 'spain',
    capital: 'madrid',
    isoCodes: 'ES/ESP',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/750px-Bandera_de_Espa%C3%B1a.svg.png',
    code: '+34'
  },
  {
    country: 'sri lanka',
    capital: 'colombo',
    isoCodes: 'LK/LKA',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1280px-Flag_of_Sri_Lanka.svg.png',
    code: '+94'
  },
  {
    country: 'sudan',
    capital: 'khartoum',
    isoCodes: 'SD/SDN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/1280px-Flag_of_Sudan.svg.png',
    code: '+249'
  },
  {

    country: 'suriname',
    capital: 'paramaribo',
    isoCodes: 'SR/SUR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/255px-Flag_of_Suriname.svg.png',
    code: '+597'
  },
  {
    country: 'svalbard and jan mayen',
    capital: 'longyearbyen',
    isoCodes: 'SJ/SJM',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Proposed_flag_of_Svalbard%2C_Norway_%281930%29.svg/220px-Proposed_flag_of_Svalbard%2C_Norway_%281930%29.svg.png',
    code: '+47'
  },

  {

    country: 'sweden',
    capital: 'stockholm',
    isoCodes: 'SE/SWE',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1024px-Flag_of_Sweden.svg.png',
    code: '+46'
  },
  {
    country: 'switzerland',
    capital: 'bern',
    isoCodes: 'CH / CHE	',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/800px-Flag_of_Switzerland_%28Pantone%29.svg.png',
    code: '+41'
  },
  {
    country: 'syria',
    capital: 'damascus',
    isoCodes: 'SY/SYR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/1024px-Flag_of_Syria.svg.png',
    code: '+963'
  },


  {

    country: 'south sudan',
    capital: 'juba',
    isoCodes: 'SS/SSD',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/800px-Flag_of_South_Sudan.svg.png",
    code: '+211'
  },

  {

    country: 'taiwan',
    capital: 'taipei',
    isoCodes: 'TW/TWN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1024px-Flag_of_the_Republic_of_China.svg.png',
    code: '+886'
  },
  {
    country: 'Tajikistan',
    capital: 'dushanbe',
    isoCodes: 'TJ/TJK',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/1280px-Flag_of_Tajikistan.svg.png',

    code: '+992'
  },
  {

    country: 'tanzania',
    capital: 'dodoma city',
    isoCodes: 'TZ/TZA',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/1024px-Flag_of_Tanzania.svg.png',
    code: '+255'
  },
  {

    country: 'thailand',
    capital: 'bangkok',
    isoCodes: 'TH/THA',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1024px-Flag_of_Thailand.svg.png',
    code: '+66'
  },
  {

    country: 'togo',
    capital: 'lome',
    isoCodes: 'TG/TGO',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/1024px-Flag_of_Togo.svg.png',
    code: '+228'
  },
  {

    country: 'tokelau',
    capital: 'no capital',
    isoCodes: 'TK/TKL',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Tokelau.svg/1280px-Flag_of_Tokelau.svg.png',
    code: '+690'
  },
  {

    country: 'tonga',
    capital: "nuku'alofa",
    isoCodes: 'TO/TON',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/1280px-Flag_of_Tonga.svg.png',
    code: '+676'
  },
  {

    country: 'trinidad and tobago',
    capital: 'port-of-spain',
    isoCodes: 'TT/TTO',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/1024px-Flag_of_Trinidad_and_Tobago.svg.png',
    code: '+1-868'
  },
  {
    country: 'tunisia',
    capital: 'tunis',
    isoCodes: 'TN/TUN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1024px-Flag_of_Tunisia.svg.png',
    code: '+216'
  },
  {
    country: 'turkey',
    capital: 'ankara',
    isoCodes: 'TR/TUR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1024px-Flag_of_Turkey.svg.png',
    code: '+90'
  },
  {

    country: 'turkmenistan',
    capital: 'ashgabat',
    isoCodes: 'TM/TKM',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/1024px-Flag_of_Turkmenistan.svg.png',
    code: '+993'
  },
  {
    country: 'turks and caicos islands',
    capital: 'grand turk',
    isoCodes: 'TC/TCA',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg/1280px-Flag_of_the_Turks_and_Caicos_Islands.svg.png',
    code: '+1-649'
  },
  {
    country: 'tuvalu',
    capital: 'funafuti',
    isoCodes: 'TV/TUV',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/1280px-Flag_of_Tuvalu.svg.png',
    code: '+688'

  },

  {
    country: 'uganda',
    capital: 'kampala',
    isoCodes: 'UG/UGA',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/1024px-Flag_of_Uganda.svg.png',
    code: '+256'
  },
  {
    country: 'ukraine',
    capital: 'kiev',
    isoCodes: 'UA/UKR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Ukraine_%28pantone_colors%29.svg/1024px-Flag_of_Ukraine_%28pantone_colors%29.svg.png',
    code: '+380'
  },
  {
    country: 'united arab emirates',
    capital: 'abu dhabi',
    isoCodes: 'AE/ARE',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png',
    code: '+971'
  },
  {
    country: 'united kingdom',
    capital: 'london',
    isoCodes: 'GB/GBR',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png',
    code: '+44'
  },
  {
    country: 'united states',
    capital: 'washington dc',
    isoCodes: 'US/USA',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png',
    code: '+1'
  },
  {

    country: 'United States Minor Outlying Islands',
    capital: 'Washington DC',
    isoCodes: 'US/UMI',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png',
    code: '+1'
  },
  {

    country: 'uruguay',
    capital: 'montevideo',
    isoCodes: 'UY/URY',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1024px-Flag_of_Uruguay.svg.png',
    code: '+598'
  },
  {
    country: 'uzbekistan',
    capital: 'tashkent (toshkent)',
    isoCodes: 'UZ/UZB',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png',
    code: '+998'
  },
  {

    country: 'u.s. virgin islands',
    capital: 'charlotte amalie',
    isoCodes: 'VI/VIR',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/255px-Flag_of_the_United_States_Virgin_Islands.svg.png',
    code: '+1-340'
  },
  {
    country: 'vanuatu',
    capital: 'port-vila',
    isoCodes: 'VU/VUT',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Vanuatu_%28official%29.svg/250px-Flag_of_Vanuatu_%28official%29.svg.png',
    code: '+678'
  },

  {

    country: 'republic of kosovo',
    capital: 'pristina',
    isoCodes: '',
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/800px-Flag_of_Kosovo.svg.png",
    code: "+383"
  },
  {
    country: 'vatican city',
    capital: 'vatican city',
    isoCodes: 'VA/VAT',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_the_Vatican_City.svg/500px-Flag_of_the_Vatican_City.svg.png',
    code: '+379'
  },
  {
    country: 'venezuela',
    capital: 'caracas',
    isoCodes: 'VE/VEN',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1024px-Flag_of_Venezuela.svg.png',
    code: '+58'
  },
  {

    country: 'vietnam',
    capital: 'hanoi',
    isoCodes: 'VN/VNM',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1024px-Flag_of_Vietnam.svg.png',
    code: '+84'
  },
  {

    country: 'wallis and futuna',
    capital: 'mata-Utu (on Ile Uvea)',
    isoCodes: 'WF/WLF',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png',
    code: '+681'
  },

  {

    country: 'western sahara',
    capital: 'Laayoune',
    isoCodes: 'EH/ESH',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg/1280px-Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg.png',
    code: '+212'
  },

  {
    country: 'yemen',
    capital: 'sanaa',
    isoCodes: 'YE/YEM',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/1024px-Flag_of_Yemen.svg.png',
    code: '+967'
  },
  {
    country: 'zambia',
    capital: 'lusaka',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/1024px-Flag_of_Zambia.svg.png',
    code: '+260',
    isoCodes: 'ZM/ZMB'
  },
  {

    country: 'zimbabwe',
    capital: 'harare',
    isoCodes: 'ZW/ZWE',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/1280px-Flag_of_Zimbabwe.svg.png',
    code: '+263'
  },

]