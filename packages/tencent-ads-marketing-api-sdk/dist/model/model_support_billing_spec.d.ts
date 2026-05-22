import type { BillingEvent } from "../model/index";
export interface SupportBillingSpec {
    billing_event?: BillingEvent;
    min_price?: number;
    max_price?: number;
}
