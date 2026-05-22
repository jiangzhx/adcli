import type { SingleUpdateFail } from "../model/index";
export interface DataSourceDispatchUpdateResponseData {
    success_count?: number;
    fail_list?: SingleUpdateFail[];
}
