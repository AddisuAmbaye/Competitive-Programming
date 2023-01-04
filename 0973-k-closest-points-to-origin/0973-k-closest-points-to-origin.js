var kClosest = function(points, k) {
    let sorted = points.map((p, idx) => {
        let dist = (p[0]**2 + p[1]**2)**0.5;
        return [dist, idx];
    });
    sorted.sort((a,b) => a[0] - b[0]);
    let res = [];
    for (let i = 0; i < k; i++) {
        let idx = sorted[i][1];
        res.push(points[idx]);
    }
    return res;
};