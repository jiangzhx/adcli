// Generated from tencentad/marketing-api-go-sdk pkg/model/model_audience_grant_relations_add_request.go
// Do not edit manually.

import type { AudienceGrantRelationsAddGrantSpec, AudienceGrantType } from "../model/index";

export interface AudienceGrantRelationsAddRequest {
  account_id?: number | string;
  audience_id_list?: number[];
  grant_type?: AudienceGrantType;
  grant_spec?: AudienceGrantRelationsAddGrantSpec;
}

