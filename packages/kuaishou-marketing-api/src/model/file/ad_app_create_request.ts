// Generated from github.com/bububa/kwai-marketing-api/model/file/ad_app_create_request.go
// Do not edit manually.

import type { UploadRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdAppCreateRequestInit {
  advertiser_id?: KuaishouId;
  file?: UploadField;
  app_version?: string;
  app_name?: string;
  image_token?: string;
  package_name?: string;
  platform?: number;
  url?: string;
  use_sdk?: number;
  app_privacy_url?: string;
  permission_information?: string;
  real_app_version?: string;
  package_size?: number;
  app_detail_image_token?: string;
}

export class AdAppCreateRequest implements UploadRequest, AdAppCreateRequestInit {
  advertiser_id?: KuaishouId;
  file?: UploadField;
  app_version?: string;
  app_name?: string;
  image_token?: string;
  package_name?: string;
  platform?: number;
  url?: string;
  use_sdk?: number;
  app_privacy_url?: string;
  permission_information?: string;
  real_app_version?: string;
  package_size?: number;
  app_detail_image_token?: string;

  constructor(init: AdAppCreateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.file = init.file;
    this.app_version = init.app_version;
    this.app_name = init.app_name;
    this.image_token = init.image_token;
    this.package_name = init.package_name;
    this.platform = init.platform;
    this.url = init.url;
    this.use_sdk = init.use_sdk;
    this.app_privacy_url = init.app_privacy_url;
    this.permission_information = init.permission_information;
    this.real_app_version = init.real_app_version;
    this.package_size = init.package_size;
    this.app_detail_image_token = init.app_detail_image_token;
  }

  path() {
    return "v1/file/ad/app/create";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      file: this.file,
      app_version: this.app_version,
      app_name: this.app_name,
      image_token: this.image_token,
      package_name: this.package_name,
      platform: this.platform,
      url: this.url,
      use_sdk: this.use_sdk,
      app_privacy_url: this.app_privacy_url,
      permission_information: this.permission_information,
      real_app_version: this.real_app_version,
      package_size: this.package_size,
      app_detail_image_token: this.app_detail_image_token,
    });
  }
}
