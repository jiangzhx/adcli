import type { SysStatus } from "../models";
export interface RecommendWordStruct {
    recommend_word?: string;
    status?: SysStatus;
    audit_msg?: string;
}
