export function getItem(key: string) {
    const res = localStorage.getItem(key)
    return res ? JSON.parse(res) : ''
}

export function setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
}