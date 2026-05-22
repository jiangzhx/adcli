import type { Data } from "../models";
export interface Result {
    code?: number;
    message?: string;
    data?: Data;
}
