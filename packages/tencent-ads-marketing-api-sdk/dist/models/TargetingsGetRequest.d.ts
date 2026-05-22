import type { FilteringStruct } from "../models";
export interface TargetingsGetRequest {
    account_id?: number | string;
    filtering?: FilteringStruct[];
    page?: number;
    page_size?: number;
}
