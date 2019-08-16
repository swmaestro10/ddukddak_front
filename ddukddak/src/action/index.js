export const FETCH_CODE = 'FETCH_CODE';

export function fetchCode(code){
    return {
        type : FETCH_CODE,
        payload : code
    }
}