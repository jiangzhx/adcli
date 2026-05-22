import type { AudienceGrantRelationsGetGrantAccountPermission, AudienceGrantScopeType, GrantBusinessPermission } from "../model/index";
export interface AudienceGrantRelationsGetGrantToBusinessSpec {
    grant_business_id?: number | string;
    grant_scope_type?: AudienceGrantScopeType;
    grant_business_permission?: GrantBusinessPermission;
    grant_account_permission?: AudienceGrantRelationsGetGrantAccountPermission;
}
