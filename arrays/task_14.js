function prefill(n, v) {
    if (!isFinite(n) || n < 0 || typeof n == 'boolean' || (!Number.isInteger(n) && n!=0)) {
        throw new TypeError(n + " is invalid");
    }
    n = parseInt(n);
    var arr = [];
    for(var i =0; i<n; i++){
        arr[i] = v;
    }
    return arr;
    // return new Array(n+1).join(v);
}