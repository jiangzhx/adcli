import type { AuditStatus } from "../models";
export interface AuditRejectItem {
    feed_id?: number | string;
    product_id?: string;
    system_status?: AuditStatus;
    reject_message?: string;
}
