import type { CanvasType, PageElementsStruct, PageStatus, PageType, ShareContentSpec, WechatPageResourceStatus, WechatPageSourceType } from "../models";
export interface WechatPagesGetListStruct {
    page_id?: number | string;
    page_name?: string;
    created_time?: number;
    last_modified_time?: number;
    page_template_id?: number | string;
    page_elements_spec_list?: PageElementsStruct[];
    share_content_spec?: ShareContentSpec;
    preview_url?: string;
    page_type?: PageType;
    source_type?: WechatPageSourceType;
    video_resource_status?: WechatPageResourceStatus;
    canvas_type?: CanvasType;
    owner_uid?: number;
    page_status?: PageStatus;
}
