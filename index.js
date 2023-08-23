// Code your solution here
function findMatching(names, string) {
    return names.filter((name) => {
        if (name.toLowerCase() === string.toLowerCase()) {
            return true;
        }
    })
}

function fuzzyMatch(names, string) {
    return names.filter((name) => {
        return (name.startsWith(string));
    })
}

function matchName(drivers, string) {
    return drivers.filter((driver) => {
        return driver.name === string;
    })
}