import type { PointStruct } from "../models";
export interface DetailTargetDetailStruct {
    expand_targeting_opened?: boolean;
    score?: number;
    trends?: PointStruct[];
    conclusion?: string;
}
