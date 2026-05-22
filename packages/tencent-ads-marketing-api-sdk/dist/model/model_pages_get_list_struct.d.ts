import type { DestinationTypeRead, LandingPageFengyeSubType, PageStatus, PlayableType } from "../model/index";
export interface PagesGetListStruct {
    page_id?: number | string;
    page_name?: string;
    preview_url?: string;
    created_time?: number;
    last_modified_time?: number;
    promoted_object_id?: string;
    product_catalog_id?: number | string;
    page_type?: DestinationTypeRead;
    playable_type?: PlayableType;
    page_status?: PageStatus;
    fengye_sub_type?: LandingPageFengyeSubType;
    owner_uid?: number;
    quote_creative_material?: boolean;
    disable_code?: number;
    disable_message?: string;
}
