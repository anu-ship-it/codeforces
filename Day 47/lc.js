function maximumWeight(intervals) {
  const n = intervals.length;
  const arr = intervals.map((v, idx) => ({
    l: v[0],
    r: v[1],
    w: v[2],
    idx
  }));

  arr.sort((a, b) => a.r - b.r || a.l - b.l || a.idx - b.idx);

  const rArr = arr.map(x => x.r);
  function upperBound(target) {
    let lo = 0, hi = n;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (rArr[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }
  const pArr = new Array(n);
  for (let i = 0; i < n; i++) {
    pArr[i] = upperBound(arr[i].l);
  }
  function insertSorted(set, idx) {
    if (set === null) return [idx];

    const len = set.length;
    const res = new Array(len + 1);
    let j = 0;
    let inserted = false;

    for (let i = 0; i < len; i++) {
      if (!inserted && idx < set[i]) {
        res[j++] = idx;
        inserted = true;
      }
      res[j++] = set[i];
    }

    if (!inserted) res[j] = idx;
    return res;
  }
  function lexLess(a, b) {
    if (b === null) return true;
    if (a === null) return false;

    const m = Math.min(a.length, b.length);
    for (let i = 0; i < m; i++) {
      if (a[i] < b[i]) return true;
      if (a[i] > b[i]) return false;
    }
    return a.length < b.length;
  }

  let prevW = new Array(n + 1).fill(0);
  let prevS = new Array(n + 1).fill(null);

  let bestW = -1;
  let bestS = null;

  for (let c = 1; c <= 4; c++) {
    const currW = new Array(n + 1).fill(-1);
    const currS = new Array(n + 1).fill(null);

    for (let i = 1; i <= n; i++) {
      // Option 1: skip arr[i - 1].
      let w = currW[i - 1];
      let s = currS[i - 1];

      // Option 2: take arr[i - 1].
      const interval = arr[i - 1];
      const p = pArr[i - 1];
      const pw = prevW[p];

      if (pw >= 0) {
        const candW = pw + interval.w;
        const candS = insertSorted(prevS[p], interval.idx);

        if (w < 0 || candW > w || (candW === w && lexLess(candS, s))) {
          w = candW;
          s = candS;
        }
      }

      currW[i] = w;
      currS[i] = s;
    }

    const w = currW[n];
    const s = currS[n];

    if (w >= 0 && (bestW < 0 || w > bestW || (w === bestW && lexLess(s, bestS)))) {
      bestW = w;
      bestS = s;
    }

    prevW = currW;
    prevS = currS;
  }

  return bestS || [];
}