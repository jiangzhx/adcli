import type { CustomerProfileStruct, LocalStoreOpeningStatus, OpeningHours, PeakPeriod } from "../v3/index";
export interface LocalStoreBizInfoStructRsp {
    poi_id?: string;
    customer_profile?: CustomerProfileStruct;
    customer_per_cost?: number;
    first_category_id?: number | string;
    second_category_id?: number | string;
    third_category_id?: number | string;
    fourth_category_id?: number | string;
    first_category_name?: string;
    second_category_name?: string;
    third_category_name?: string;
    fourth_category_name?: string;
    peak_period?: PeakPeriod[];
    opening_hours?: OpeningHours[];
    telephone?: string;
    special_service?: string[];
    opening_status?: LocalStoreOpeningStatus;
    intro?: string;
    hide_poi?: boolean;
}
