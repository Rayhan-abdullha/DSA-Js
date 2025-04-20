const employees =[
    {
        id: 1,
        name: 'rayhan',
    },
    {
        id: 2,
        name: 'nazim',
    },
    {
        id: 3,
        name: 'messi',
    }
]
const nameEmploy = ['rayhan', 'Messi']

function filterEmployees(employees, name) {
    if (!employees.length || !name.length) {
        return 'required'
    }

    const nameSet = new Set(name.map(n => n.toLowerCase()))

    return employees.filter(em => nameSet.has(em.name.toLowerCase()))
}
const res = filterEmployees(employees, nameEmploy)
console.log(res)