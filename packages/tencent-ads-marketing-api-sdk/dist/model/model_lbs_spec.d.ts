import type { CrossCityRule, CustomLocationRule, LbsType, PoiRule } from "../model/index";
export interface LbsSpec {
    lbs_type?: LbsType;
    cross_city_rule?: CrossCityRule;
    poi_rule?: PoiRule;
    custom_location_rule?: CustomLocationRule;
}
