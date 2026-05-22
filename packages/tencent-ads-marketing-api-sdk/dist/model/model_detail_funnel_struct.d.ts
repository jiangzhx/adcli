import type { CompeteWinRateFunnelStruct, CpaFunnelStruct, CtrFunnelStruct, CvrFunnelStruct, ExposureCountFunnelStruct, TargetingWidenessRateFunnelStruct } from "../model/index";
export interface DetailFunnelStruct {
    targeting_wideness_rate?: TargetingWidenessRateFunnelStruct;
    compete_win_rate?: CompeteWinRateFunnelStruct;
    exposure_count?: ExposureCountFunnelStruct;
    ctr?: CtrFunnelStruct;
    cvr?: CvrFunnelStruct;
    cpa?: CpaFunnelStruct;
}
