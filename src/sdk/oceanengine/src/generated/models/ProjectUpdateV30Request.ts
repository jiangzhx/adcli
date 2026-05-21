// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ProjectUpdateV30AigcDynamicCreativeSwitch, ProjectUpdateV30AudienceExtend, ProjectUpdateV30AutoExtendTraffic, ProjectUpdateV30DownloadMode, ProjectUpdateV30RequestAudience, ProjectUpdateV30RequestBlueFlowPackage, ProjectUpdateV30RequestDeliverySetting, ProjectUpdateV30RequestDpaProductTargetInner, ProjectUpdateV30RequestKeywordsInner, ProjectUpdateV30RequestRelatedProduct, ProjectUpdateV30RequestTrackUrlSetting, ProjectUpdateV30StarAutoDeliverySwitch, ProjectUpdateV30StarAutoMaterialAdditionSwitch, ProjectUpdateV30UlinkUrlType } from "../models";

export interface ProjectUpdateV30Request {
  advertiser_id: number;
  aigc_dynamic_creative_switch?: ProjectUpdateV30AigcDynamicCreativeSwitch;
  audience?: ProjectUpdateV30RequestAudience;
  audience_extend?: ProjectUpdateV30AudienceExtend;
  auto_extend_traffic?: ProjectUpdateV30AutoExtendTraffic;
  blue_flow_package?: ProjectUpdateV30RequestBlueFlowPackage;
  delivery_setting?: ProjectUpdateV30RequestDeliverySetting;
  download_mode?: ProjectUpdateV30DownloadMode;
  dpa_product_target?: ProjectUpdateV30RequestDpaProductTargetInner[];
  keywords?: ProjectUpdateV30RequestKeywordsInner[];
  name?: string;
  open_url?: string;
  open_url_field?: string;
  open_url_params?: string;
  project_id: number;
  related_product?: ProjectUpdateV30RequestRelatedProduct;
  search_bid_ratio?: number;
  star_auto_delivery_switch?: ProjectUpdateV30StarAutoDeliverySwitch;
  star_auto_material_addition_switch?: ProjectUpdateV30StarAutoMaterialAdditionSwitch;
  track_url_setting?: ProjectUpdateV30RequestTrackUrlSetting;
  ulink_url?: string;
  ulink_url_type?: ProjectUpdateV30UlinkUrlType;
}

