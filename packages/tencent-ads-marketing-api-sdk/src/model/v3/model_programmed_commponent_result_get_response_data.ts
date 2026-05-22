// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_programmed_commponent_result_get_response_data.go
// Do not edit manually.

import type { DeriveDataVersion, DeriveProductGetStruct } from "../v3/index";

export interface ProgrammedCommponentResultGetResponseData {
  material_derive_id?: number | string;
  derive_data_version?: DeriveDataVersion;
  dynamic_creative_id?: number | string;
  adgroup_id?: number | string;
  list?: DeriveProductGetStruct[];
}

