function commonEnd(a, b) {
    if (a.length >= 1 && b.length >= 1) return (a[0] == b[0] || a[a.length - 1] == b[b.length - 1])
    return false
}