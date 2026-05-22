import type { Comparator } from "../models";
export interface FrequencySpec {
    comparator?: Comparator;
    frequency_min_value?: number;
    frequency_max_value?: number;
}
