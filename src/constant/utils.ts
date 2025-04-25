/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */


export function formatSelectOptions(option: any){
    return {value: option?.type, label: option?.type?.replaceAll("_"," "), id: option?.id}
}