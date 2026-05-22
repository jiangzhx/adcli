import type { CompeteIntenseTrendStruct, TrafficSufficiencyTrendStruct } from "../model/index";
export interface CompeteSurroundingsStruct {
    display_flag?: boolean;
    traffic_sufficiency?: TrafficSufficiencyTrendStruct;
    compete_intense?: CompeteIntenseTrendStruct;
}
