import type { PointStruct } from "../model/index";
export interface TrafficSufficiencyTrendStruct {
    score?: number;
    trends?: PointStruct[];
    conclusion?: string;
}
