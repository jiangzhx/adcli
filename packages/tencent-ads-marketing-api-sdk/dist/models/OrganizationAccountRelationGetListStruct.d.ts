import type { CommentDataStruct } from "../models";
export interface OrganizationAccountRelationGetListStruct {
    account_id?: number | string;
    corporation_name?: string;
    is_bid?: boolean;
    is_mp?: boolean;
    is_adx?: boolean;
    comment_list?: CommentDataStruct[];
}
