import { Difficult } from '../models';

export const keyFromDifficult = (difficult: Difficult): string =>
    Object.keys(Difficult)[Object.values(Difficult).indexOf(difficult)];
