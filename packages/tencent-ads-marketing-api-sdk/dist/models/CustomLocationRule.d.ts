import type { AreaSpec, CustomLocationDateRange, FrequencySpec, LbsPoiType } from "../models";
export interface CustomLocationRule {
    poi_type?: LbsPoiType;
    date_range?: CustomLocationDateRange;
    frequency_spec?: FrequencySpec;
    area_list?: AreaSpec[];
}
