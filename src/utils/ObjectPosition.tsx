export const objectPosition = (array: any[], id: string) => {
    return array.findIndex(obj => obj.id === id);
}