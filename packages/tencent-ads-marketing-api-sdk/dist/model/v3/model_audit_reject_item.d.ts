import type { AuditStatus } from "../v3/index";
export interface AuditRejectItem {
    feed_id?: number | string;
    product_id?: string;
    system_status?: AuditStatus;
    reject_message?: string;
}
