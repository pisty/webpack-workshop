/* webpack behind the scene */

let myModules = [
    function() {
        return (a, b) => a + b;
    },
    function() {
        const sum = myModules[0]();
        const total = sum(10, 5);
        console.log(total);
    }
];

let entryPointIndex = 1;
myModules[entryPointIndex]();
