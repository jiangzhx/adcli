import type { BackupsJumpinfoStruct, BidwordMatchType, BidwordPauseType, BidwordStatus, UseGroupPriceType } from "../models";
export interface BidwordGetListStruct {
    bidword_id?: number | string;
    campaign_id?: number | string;
    adgroup_id?: number | string;
    bidword?: string;
    bid_price?: number;
    match_type?: BidwordMatchType;
    configured_status?: BidwordPauseType;
    bidword_status?: BidwordStatus;
    use_group_price?: UseGroupPriceType;
    audit_msg?: string;
    created_time?: number;
    last_modified_time?: number;
    pc_landing_page_info?: BackupsJumpinfoStruct[];
    mobile_landing_page_info?: BackupsJumpinfoStruct[];
}
