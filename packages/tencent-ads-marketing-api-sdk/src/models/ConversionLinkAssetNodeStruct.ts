// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ActionType, ConvInfoStruct, NodeOgStruct, NodeRoiOgStruct } from "../models";

export interface ConversionLinkAssetNodeStruct {
  conversion_link_node_id?: number | string;
  conversion_link_node_name?: string;
  conversion_link_node_index?: number;
  conversion_link_action_type?: ActionType;
  carrier_id?: number | string;
  carrier_name?: string;
  og_id?: number | string[];
  og_list?: NodeOgStruct[];
  roi_og_id?: number | string[];
  roi_og_list?: NodeRoiOgStruct[];
  conversion_info?: ConvInfoStruct[];
  og_status?: number;
  node_status?: number;
}

