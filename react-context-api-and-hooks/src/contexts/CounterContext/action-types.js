const prefix = `CounterContext`; //utilizando o prefixo é possível saber de qual contexto veio a ação e corrigir erros facilmente.

export const INCREASE = `${prefix}/INCREASE`;
export const DECREASE = `${prefix}/DECREASE`;
export const RESET = `${prefix}/RESET`;
export const SET_COUNTER = `${prefix}/SET_COUNTER`;
export const ASYNC_INCREASE_START = `${prefix}/ASYNC_INCREASE_START`;
export const ASYNC_INCREASE_END = `${prefix}/ASYNC_INCREASE_END`;
export const ASYNC_INCREASE_ERROR = `${prefix}/ASYNC_INCREASE_ERROR`;
