//create a map
const testMap=new Map()
console.log(testMap)
//from arrays
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  testMap = new Map(countries)

  //checking key in map

  console.log(testMap.has('Finland'))

  