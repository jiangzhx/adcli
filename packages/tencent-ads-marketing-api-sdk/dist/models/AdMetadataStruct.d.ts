import type { BidMode, ProductInfoStruct, PromotedObjectType } from "../models";
export interface AdMetadataStruct {
    product_infos?: ProductInfoStruct[];
    site_sets?: string[];
    automatic_site_enabled?: boolean;
    promoted_object_type?: PromotedObjectType;
    bid_mode?: BidMode;
}
