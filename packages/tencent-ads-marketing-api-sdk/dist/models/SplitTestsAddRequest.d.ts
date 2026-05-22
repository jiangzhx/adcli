export interface SplitTestsAddRequest {
    account_id?: number | string;
    split_test_name?: string;
    begin_time?: number;
    end_time?: number;
    adgroup_id_list?: number[];
    smart_expand_enabled?: boolean;
}
