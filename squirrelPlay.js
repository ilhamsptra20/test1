function squirrelPlay (temp, isSummer) {
    if (isSummer && temp >= 60 && temp <= 100) return true
    if (!isSummer && temp >= 60 && temp <= 90) return true
    return false
}