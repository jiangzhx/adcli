import type { MaterialAddResultStruct } from "../models";
export interface WatermarksAddResponseData {
    total_count?: number;
    processing_count?: number;
    success_count?: number;
    failed_count?: number;
    results?: MaterialAddResultStruct[];
}
