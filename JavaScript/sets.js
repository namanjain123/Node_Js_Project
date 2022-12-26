const companies = new Set()
console.log(companies)

const lang=[
    'naman',
    'jain',
    'new',
    'latest'
]

const setOf=new Set(lang)
console.log(setOf)

// Adding an element to a set

setOf.add('new set')
console.log(setOf)

// Addition from a set to new set

companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
for (const company of companies) {
  setOf.add(company)
}
console.log(setOf)

//clearing the set

companies.clear()
console.log(companies)

