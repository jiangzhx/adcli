// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { NativeAnchorUpdateV30AnchorInfoGameAnchorGameType, NativeAnchorUpdateV30RequestAnchorInfoGameAnchorAppImagesInner, NativeAnchorUpdateV30RequestAnchorInfoGameAnchorGamePackageListInner, NativeAnchorUpdateV30RequestAnchorInfoGameAnchorHeadImageListInner, NativeAnchorUpdateV30RequestAnchorInfoGameAnchorIconImagesInner } from "../models";

export interface NativeAnchorUpdateV30RequestAnchorInfoGameAnchor {
  anchor_image_mode?: number;
  android_anchor_title?: string;
  android_download_url?: string;
  app_images?: NativeAnchorUpdateV30RequestAnchorInfoGameAnchorAppImagesInner[];
  app_open_url?: string;
  app_tags?: string[];
  game_bonus?: boolean;
  game_charatoristic?: string;
  game_description?: string;
  game_package_list?: NativeAnchorUpdateV30RequestAnchorInfoGameAnchorGamePackageListInner[];
  game_type?: NativeAnchorUpdateV30AnchorInfoGameAnchorGameType;
  guide_text?: string;
  harmony_download_url?: string;
  head_image_list?: NativeAnchorUpdateV30RequestAnchorInfoGameAnchorHeadImageListInner[];
  icon_images?: NativeAnchorUpdateV30RequestAnchorInfoGameAnchorIconImagesInner[];
  instance_id?: number;
  ios_anchor_title?: string;
  ios_download_url?: string;
  other_description?: string;
  path_param?: string;
  platform_type?: number;
}

