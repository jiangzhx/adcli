import type { ExpressCompany } from "../model/index";
export interface EcommerceOrderUpdateRequest {
    account_id?: number | string;
    ecommerce_order_id?: string;
    delivery_tracking_number?: string;
    express_company?: ExpressCompany;
}
