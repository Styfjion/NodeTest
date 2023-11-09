function findTheLongestBalancedSubstring(s: string): number {
    let result = 0
    const count = [0, 0]
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            count[1]++
            result = Math.max(result, Math.min(count[0], count[1]) * 2)
        } else if (i === 0 || s[i - 1] === '1') {
            count[0] = 1
            count[1] = 0
        } else {
            count[0]++
        }
    }
    return result
}

findTheLongestBalancedSubstring('1101')
