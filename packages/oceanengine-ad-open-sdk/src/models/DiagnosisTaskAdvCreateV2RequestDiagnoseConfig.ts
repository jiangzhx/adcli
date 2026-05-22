// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { DiagnosisTaskAdvCreateV2DiagnoseConfigAudienceAge, DiagnosisTaskAdvCreateV2DiagnoseConfigAudienceGender, DiagnosisTaskAdvCreateV2DiagnoseConfigAudienceNetwork, DiagnosisTaskAdvCreateV2DiagnoseConfigExternalAction, DiagnosisTaskAdvCreateV2DiagnoseConfigPlatform, DiagnosisTaskAdvCreateV2DiagnoseConfigPricingType } from "../models";

export interface DiagnosisTaskAdvCreateV2RequestDiagnoseConfig {
  audience_age?: DiagnosisTaskAdvCreateV2DiagnoseConfigAudienceAge[];
  audience_gender?: DiagnosisTaskAdvCreateV2DiagnoseConfigAudienceGender;
  audience_network?: DiagnosisTaskAdvCreateV2DiagnoseConfigAudienceNetwork[];
  audience_region?: number[];
  budget?: number;
  cost_cap?: boolean;
  cpa_bid?: number;
  cpc_bid?: number;
  cus_name?: string;
  external_action?: DiagnosisTaskAdvCreateV2DiagnoseConfigExternalAction;
  nobid?: boolean;
  platform?: DiagnosisTaskAdvCreateV2DiagnoseConfigPlatform;
  pricing_type?: DiagnosisTaskAdvCreateV2DiagnoseConfigPricingType;
  target_cost?: boolean;
}

