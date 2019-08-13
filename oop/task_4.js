// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function (string) {
    let arr = string.split('.');
    let start = this;
    for (let i = 0; i < arr.length; i++) {
        if (start[arr[i]] == null) {
            return undefined;
        } else {
            start = start[arr[i]];
        }
    }
    return start;
}

var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

console.log(obj.hash('person.history.homeStreet'));
