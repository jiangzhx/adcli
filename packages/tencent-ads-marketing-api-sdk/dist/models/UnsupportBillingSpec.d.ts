import type { BillingEvent, UnsupportType } from "../models";
export interface UnsupportBillingSpec {
    site_set?: string[];
    billing_event?: BillingEvent;
    min_price?: number;
    max_price?: number;
    unsupport_type?: UnsupportType;
}
