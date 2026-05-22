// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { NativeAnchorUpdateV30AnchorInfoNetServiceAnchorNetServiceType, NativeAnchorUpdateV30RequestAnchorInfoNetServiceAnchorAppImagesInner, NativeAnchorUpdateV30RequestAnchorInfoNetServiceAnchorHeadImageListInner, NativeAnchorUpdateV30RequestAnchorInfoNetServiceAnchorIconImagesInner } from "../models";

export interface NativeAnchorUpdateV30RequestAnchorInfoNetServiceAnchor {
  anchor_image_mode?: number;
  android_anchor_title?: string;
  android_download_url?: string;
  app_description?: string;
  app_images?: NativeAnchorUpdateV30RequestAnchorInfoNetServiceAnchorAppImagesInner[];
  app_open_url?: string;
  app_tags?: string[];
  guide_text?: string;
  harmony_anchor_title?: string;
  harmony_download_url?: string;
  head_image_list?: NativeAnchorUpdateV30RequestAnchorInfoNetServiceAnchorHeadImageListInner[];
  icon_images?: NativeAnchorUpdateV30RequestAnchorInfoNetServiceAnchorIconImagesInner[];
  instance_id?: number;
  ios_anchor_title?: string;
  ios_download_url?: string;
  net_service_type?: NativeAnchorUpdateV30AnchorInfoNetServiceAnchorNetServiceType;
  novel_chapter?: string;
  path_param?: string;
  platform_type?: number;
  quick_app_id?: number;
  wechat_external_url?: string;
  wechat_package_id?: number;
}

