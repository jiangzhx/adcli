import type { AuthListStruct, Conf } from "../model/index";
export interface PromotedObjectAuthorizationGetResponseData {
    list?: AuthListStruct[];
    page_info?: Conf;
}
