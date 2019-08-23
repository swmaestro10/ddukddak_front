export const FETCH_CODE = 'FETCH_CODE';
export const FETCH_TERMINAL = 'FETCH_TERMINAL';

export function fetchCode(code, workspace){
    return {
        type : FETCH_CODE,
        payload : [code, workspace]
    }
}

export function fetchTerminal(set){
	return {
		type : FETCH_TERMINAL,
		payload : set
	}
}
