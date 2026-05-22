import type { BillingEvent, UnsupportType } from "../model/index";
export interface UnsupportBillingSpecAdpermit {
    site_set?: string[];
    billing_event?: BillingEvent;
    min_price?: number;
    max_price?: number;
    unsupport_type?: UnsupportType;
}
