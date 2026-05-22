import type { ConversionLinkAssetNodeStruct, ConversionLinkFirstCategoryType, ConversionLinkSecondCategoryType, LinkLandingPageAccess } from "../v3/index";
export interface ConversionLinkAssetsGetListStruct {
    conversion_link_asset_id?: number | string;
    version?: number;
    name?: string;
    marketing_carrier_name?: string;
    marketing_carrier_id?: string;
    first_category_type?: ConversionLinkFirstCategoryType;
    first_category_name?: string;
    second_category_type?: ConversionLinkSecondCategoryType;
    second_category_name?: string;
    landing_page_access?: LinkLandingPageAccess;
    conversion_link_nodes?: ConversionLinkAssetNodeStruct[];
    optional_og_nodes_index?: number[];
    status?: number;
    source?: number;
    create_time?: string;
}
