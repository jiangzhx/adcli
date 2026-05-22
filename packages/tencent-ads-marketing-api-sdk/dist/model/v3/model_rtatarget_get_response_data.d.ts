import type { RtaTargetGetRecord } from "../v3/index";
export interface RtatargetGetResponseData {
    Total?: number;
    Page?: number;
    Size?: number;
    Records?: RtaTargetGetRecord[];
}
