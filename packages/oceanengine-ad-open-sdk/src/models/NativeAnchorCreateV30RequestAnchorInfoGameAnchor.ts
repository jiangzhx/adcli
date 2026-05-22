// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { NativeAnchorCreateV30AnchorInfoGameAnchorGameType, NativeAnchorCreateV30RequestAnchorInfoGameAnchorAppImagesInner, NativeAnchorCreateV30RequestAnchorInfoGameAnchorGamePackageListInner, NativeAnchorCreateV30RequestAnchorInfoGameAnchorHeadImageListInner, NativeAnchorCreateV30RequestAnchorInfoGameAnchorIconImagesInner } from "../models";

export interface NativeAnchorCreateV30RequestAnchorInfoGameAnchor {
  anchor_image_mode?: number;
  android_anchor_title?: string;
  android_download_url?: string;
  app_images?: NativeAnchorCreateV30RequestAnchorInfoGameAnchorAppImagesInner[];
  app_open_url?: string;
  app_tags?: string[];
  game_bonus?: boolean;
  game_charatoristic?: string;
  game_description?: string;
  game_package_list?: NativeAnchorCreateV30RequestAnchorInfoGameAnchorGamePackageListInner[];
  game_type?: NativeAnchorCreateV30AnchorInfoGameAnchorGameType;
  guide_text?: string;
  harmony_download_url?: string;
  head_image_list?: NativeAnchorCreateV30RequestAnchorInfoGameAnchorHeadImageListInner[];
  icon_images?: NativeAnchorCreateV30RequestAnchorInfoGameAnchorIconImagesInner[];
  instance_id?: number;
  ios_anchor_title?: string;
  ios_download_url?: string;
  other_description?: string;
  path_param?: string;
  platform_type?: number;
}

