
export const chunkArr = (arr) => {
    return Array.from({ length: Math.ceil(arr.length / 2) }, (v, i) => arr.slice(i * 2, i * 2 + 2))
}
