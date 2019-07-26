function partitionOn(pred, items) {
    var i = 0;
    var count = 0;
    while (i < items.length - count) {
        if (pred(items[i])) {
            items.push(items.splice(i, 1)[0]);
            count++;
            continue;
        }
        i++;
    }
    return items.length-count;
}