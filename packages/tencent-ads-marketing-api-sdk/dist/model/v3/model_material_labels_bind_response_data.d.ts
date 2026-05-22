import type { FailReason } from "../v3/index";
export interface MaterialLabelsBindResponseData {
    success_id_list?: string[];
    fail_id_list?: string[];
    fail_reason_list?: FailReason[];
}
