export const FETCH_CODE = 'FETCH_CODE';

export function fetchCode(code, workspace){
    return {
        type : FETCH_CODE,
        payload : [code, workspace]
    }
}