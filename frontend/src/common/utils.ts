export function log() {
    console.log('log');
}

export const RandomItem = (list: any[]) => {
    const value = Math.floor(Math.random() * list.length)
   return list[value]
}