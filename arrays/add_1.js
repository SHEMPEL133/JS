/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    return A.reduce(function (prev, current) {
        var arr = [];
        current = current.split('');
        for (var i = 0; i < prev.length; i++) {
            var id = current.indexOf(prev[i]);
            if ( id >= 0){
                arr.push(prev[i]);
                current.splice(id,1);
            }
        }
        return arr;
    })
};

