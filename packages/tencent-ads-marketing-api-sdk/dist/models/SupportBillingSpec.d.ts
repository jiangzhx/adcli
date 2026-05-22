import type { BillingEvent } from "../models";
export interface SupportBillingSpec {
    billing_event?: BillingEvent;
    min_price?: number;
    max_price?: number;
}
