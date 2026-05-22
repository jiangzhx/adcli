import type { IllegalComplaintStatus } from "../models";
export interface AdvertiserIllegalComplaint {
    illegal_order_id?: string;
    advertiser_account_id?: number | string;
    advertiser_name?: string;
    first_industry?: string;
    second_industry?: string;
    action_type?: number;
    illegal_time?: string;
    illegal_level?: number;
    illegal_reason?: string;
    complaint_status?: IllegalComplaintStatus;
    reject_reason?: string;
    reject_evidence_list?: string[];
}
