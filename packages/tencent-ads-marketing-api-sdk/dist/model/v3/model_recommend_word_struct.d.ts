import type { SysStatus } from "../v3/index";
export interface RecommendWordStruct {
    recommend_word?: string;
    status?: SysStatus;
    audit_msg?: string;
}
