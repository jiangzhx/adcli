import type { PointStruct } from "../model/index";
export interface DetailTargetDetailStruct {
    expand_targeting_opened?: boolean;
    score?: number;
    trends?: PointStruct[];
    conclusion?: string;
}
