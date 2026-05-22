import type { CursorPageInfo, OrganizationAccountRelationGetListStruct, PageInfo } from "../models";
export interface OrganizationAccountRelationGetResponseData {
    list?: OrganizationAccountRelationGetListStruct[];
    page_info?: PageInfo;
    cursor_page_info?: CursorPageInfo;
}
