// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_organization_account_relation_get_list_struct.go
// Do not edit manually.

import type { CommentDataStruct } from "../v3/index";

export interface OrganizationAccountRelationGetListStruct {
  account_id?: number | string;
  corporation_name?: string;
  is_bid?: boolean;
  is_mp?: boolean;
  is_adx?: boolean;
  comment_list?: CommentDataStruct[];
}

