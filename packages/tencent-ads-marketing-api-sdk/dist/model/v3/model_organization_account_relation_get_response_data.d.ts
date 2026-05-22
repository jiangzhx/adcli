import type { CursorPageInfo, OrganizationAccountRelationGetListStruct, PageInfo } from "../v3/index";
export interface OrganizationAccountRelationGetResponseData {
    list?: OrganizationAccountRelationGetListStruct[];
    page_info?: PageInfo;
    cursor_page_info?: CursorPageInfo;
}
