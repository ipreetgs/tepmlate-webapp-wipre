let name = 'machine name';
let machine = {
    'machine name': 10000,
    [name]: 'server',
};

console.log(machine[name]); // server
console.log(machine['machine hours']); // 10000