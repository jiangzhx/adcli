import type { PointStruct } from "../models";
export interface TrafficSufficiencyTrendStruct {
    score?: number;
    trends?: PointStruct[];
    conclusion?: string;
}
