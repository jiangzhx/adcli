import type { FinderObjectStruct, JumpinfoComponent, VisibilityCode } from "../v3/index";
export interface FinderAdObjectListGetListStruct {
    finder_ad_object_id?: number | string;
    finder_object?: FinderObjectStruct;
    dynamic_creative_id?: number | string;
    visibility_code?: VisibilityCode;
    jump_info?: JumpinfoComponent;
    ad_export_id?: string;
}
