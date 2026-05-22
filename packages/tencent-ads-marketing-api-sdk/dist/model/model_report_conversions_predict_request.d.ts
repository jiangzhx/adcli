import type { FilteringStruct } from "../model/index";
export interface ReportConversionsPredictRequest {
    filtering?: FilteringStruct[];
    account_id?: number | string;
}
