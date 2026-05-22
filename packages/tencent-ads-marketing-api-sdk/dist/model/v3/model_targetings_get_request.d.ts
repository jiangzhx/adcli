import type { FilteringStruct } from "../v3/index";
export interface TargetingsGetRequest {
    account_id?: number | string;
    filtering?: FilteringStruct[];
    page?: number;
    page_size?: number;
}
