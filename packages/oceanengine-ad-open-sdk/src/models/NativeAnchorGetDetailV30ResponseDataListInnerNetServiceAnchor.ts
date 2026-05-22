// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { NativeAnchorGetDetailV30DataListNetServiceAnchorNetServiceType, NativeAnchorGetDetailV30ResponseDataListInnerNetServiceAnchorAppImagesInner, NativeAnchorGetDetailV30ResponseDataListInnerNetServiceAnchorHeadImageListInner, NativeAnchorGetDetailV30ResponseDataListInnerNetServiceAnchorIconImagesInner } from "../models";

export interface NativeAnchorGetDetailV30ResponseDataListInnerNetServiceAnchor {
  anchor_image_mode?: number;
  android_anchor_title?: string;
  android_download_url?: string;
  app_description?: string;
  app_images?: NativeAnchorGetDetailV30ResponseDataListInnerNetServiceAnchorAppImagesInner[];
  app_open_url?: string;
  app_tags?: string[];
  guide_text?: string;
  harmony_anchor_title?: string;
  harmony_download_url?: string;
  head_image_list?: NativeAnchorGetDetailV30ResponseDataListInnerNetServiceAnchorHeadImageListInner[];
  icon_images?: NativeAnchorGetDetailV30ResponseDataListInnerNetServiceAnchorIconImagesInner[];
  instance_id?: number | string;
  ios_anchor_title?: string;
  ios_download_url?: string;
  micro_app_name?: string;
  micro_app_path?: string;
  micro_app_user_name?: string;
  net_service_type?: NativeAnchorGetDetailV30DataListNetServiceAnchorNetServiceType;
  novel_chapter?: string;
  path_param?: string;
  platform_type?: number;
  quick_app_id?: number | string;
  wechat_external_url?: string;
  wechat_package_id?: number | string;
}

