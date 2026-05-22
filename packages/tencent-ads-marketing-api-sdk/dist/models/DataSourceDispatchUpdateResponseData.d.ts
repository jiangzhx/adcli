import type { SingleUpdateFail } from "../models";
export interface DataSourceDispatchUpdateResponseData {
    success_count?: number;
    fail_list?: SingleUpdateFail[];
}
