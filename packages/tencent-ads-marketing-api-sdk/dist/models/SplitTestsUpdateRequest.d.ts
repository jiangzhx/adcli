import type { SplitTestStatus } from "../models";
export interface SplitTestsUpdateRequest {
    account_id?: number | string;
    split_test_id?: number | string;
    split_test_status?: SplitTestStatus;
    split_test_name?: string;
    adgroup_id_list?: number[];
}
