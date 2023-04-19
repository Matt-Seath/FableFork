export function log() {
    console.log('log');
}

export const randomItem = <T>(list: T[]) => {
    const value = Math.floor(Math.random() * list.length)
   return list[value]
}

export const setAll = <T, K>(obj: T, val: K) => {
    Object.keys(obj as any).forEach(function(index) {
        (obj as any)[index] = val
    });
}

export const setNull =<V>(obj: V) => {
    setAll(obj, null);
}