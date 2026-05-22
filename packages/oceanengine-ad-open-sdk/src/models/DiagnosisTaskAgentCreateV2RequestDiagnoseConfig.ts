// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { DiagnosisTaskAgentCreateV2DiagnoseConfigAudienceAge, DiagnosisTaskAgentCreateV2DiagnoseConfigAudienceGender, DiagnosisTaskAgentCreateV2DiagnoseConfigAudienceNetwork, DiagnosisTaskAgentCreateV2DiagnoseConfigExternalAction, DiagnosisTaskAgentCreateV2DiagnoseConfigPlatform, DiagnosisTaskAgentCreateV2DiagnoseConfigPricingType } from "../models";

export interface DiagnosisTaskAgentCreateV2RequestDiagnoseConfig {
  audience_age?: DiagnosisTaskAgentCreateV2DiagnoseConfigAudienceAge[];
  audience_gender?: DiagnosisTaskAgentCreateV2DiagnoseConfigAudienceGender;
  audience_network?: DiagnosisTaskAgentCreateV2DiagnoseConfigAudienceNetwork[];
  audience_region?: number[];
  budget?: number;
  cost_cap?: boolean;
  cpa_bid?: number;
  cpc_bid?: number;
  cus_name?: string;
  external_action?: DiagnosisTaskAgentCreateV2DiagnoseConfigExternalAction;
  nobid?: boolean;
  platform?: DiagnosisTaskAgentCreateV2DiagnoseConfigPlatform;
  pricing_type?: DiagnosisTaskAgentCreateV2DiagnoseConfigPricingType;
  target_cost?: boolean;
}

