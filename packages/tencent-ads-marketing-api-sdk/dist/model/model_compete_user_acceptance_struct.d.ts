import type { CompeteAttributionStruct } from "../model/index";
export interface CompeteUserAcceptanceStruct {
    score?: number;
    acceptance?: CompeteAttributionStruct[];
    conclusion?: string;
    ratio?: number;
}
