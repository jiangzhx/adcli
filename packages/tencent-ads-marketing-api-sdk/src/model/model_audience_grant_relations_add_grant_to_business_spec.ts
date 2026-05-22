// Generated from tencentad/marketing-api-go-sdk pkg/model/model_audience_grant_relations_add_grant_to_business_spec.go
// Do not edit manually.

import type { AccountPermission, AudienceGrantScopeType, GrantBusinessPermission } from "../model/index";

export interface AudienceGrantRelationsAddGrantToBusinessSpec {
  grant_business_id?: number | string;
  grant_scope_type?: AudienceGrantScopeType;
  grant_business_permission?: GrantBusinessPermission;
  grant_account_permission?: AccountPermission[];
}

