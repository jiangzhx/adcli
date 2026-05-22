import type { DeliveryDetailStruct, ExpressCompany } from "../models";
export interface DeliverySpec {
    delivery_tracking_number?: string;
    express_company?: ExpressCompany;
    delivery_info_list?: DeliveryDetailStruct[];
}
