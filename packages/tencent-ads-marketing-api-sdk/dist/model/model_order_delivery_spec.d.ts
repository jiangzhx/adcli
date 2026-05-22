import type { DeliveryDetailStruct, ExpressCompany } from "../model/index";
export interface OrderDeliverySpec {
    delivery_tracking_number?: string;
    express_company?: ExpressCompany;
    delivery_info_list?: DeliveryDetailStruct[];
}
