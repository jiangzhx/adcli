import type { BillingEvent, UnsupportType } from "../models";
export interface UnsupportBillingSpecAdpermit {
    site_set?: string[];
    billing_event?: BillingEvent;
    min_price?: number;
    max_price?: number;
    unsupport_type?: UnsupportType;
}
