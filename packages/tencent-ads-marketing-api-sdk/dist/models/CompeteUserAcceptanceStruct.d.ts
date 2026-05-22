import type { CompeteAttributionStruct } from "../models";
export interface CompeteUserAcceptanceStruct {
    score?: number;
    acceptance?: CompeteAttributionStruct[];
    conclusion?: string;
    ratio?: number;
}
