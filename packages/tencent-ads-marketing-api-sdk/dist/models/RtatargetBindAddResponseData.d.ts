import type { RtaTargetBindAddRecordError, RtaTargetBindAddRecordSuccess } from "../models";
export interface RtatargetBindAddResponseData {
    success?: RtaTargetBindAddRecordSuccess[];
    error?: RtaTargetBindAddRecordError[];
}
