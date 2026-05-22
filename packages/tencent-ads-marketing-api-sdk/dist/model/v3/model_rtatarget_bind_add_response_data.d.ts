import type { RtaTargetBindAddRecordError, RtaTargetBindAddRecordSuccess } from "../v3/index";
export interface RtatargetBindAddResponseData {
    success?: RtaTargetBindAddRecordSuccess[];
    error?: RtaTargetBindAddRecordError[];
}
