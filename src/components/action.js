export const INC_COUNTER = 'INC_COUNTER';
export const DEC_COUNTER = 'DEC_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

export const incCounter = (data) => {
    return { type: INC_COUNTER, data }
}

export const decCounter = (data) => {
    return { type: DEC_COUNTER, data }
}

export const resetCounter = (data) => {
    return { type: RESET_COUNTER, data }
}