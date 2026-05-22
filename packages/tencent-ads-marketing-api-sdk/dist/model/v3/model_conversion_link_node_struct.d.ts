import type { ConversionInfoStruct, ConversionLinkNodeDataSource, OgStruct, RoiOgStruct } from "../v3/index";
export interface ConversionLinkNodeStruct {
    conversion_link_node_id?: number | string;
    conversion_link_node_name?: string;
    conversion_link_node_index?: number;
    conversion_link_action_type?: string[];
    carrier_id?: number | string;
    carrier_name?: string;
    data_source?: ConversionLinkNodeDataSource;
    og_id?: number | string[];
    og_list?: OgStruct[];
    roi_og_id?: number | string[];
    roi_og_list?: RoiOgStruct[];
    conversion_info?: ConversionInfoStruct[];
}
