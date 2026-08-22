// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/app/app.go
// Do not edit manually.

import type { KuaishouId } from "../../types";

export interface App {
  account_id?: KuaishouId;
  app_detail_img?: string;
  app_icon_url?: string;
  app_id?: KuaishouId;
  app_privacy_url?: string;
  apply_age?: number;
  audit_serial_number?: number;
  category?: number;
  compatibility?: string;
  contact_email?: string;
  contact_name?: string;
  contact_tel?: string;
  description?: string;
  developer?: string;
  location?: string;
  ios_app_id?: string;
  offline_app_stores?: string;
  online_earn_type?: number;
  package_id?: KuaishouId;
  package_name?: string;
  package_size?: number;
  permission_information?: number[];
  platform?: string;
  privacy_id?: KuaishouId;
  privacy_type?: number;
  real_app_name?: string;
  real_app_version?: string;
  release_type?: number;
  source_type?: number;
  app_source?: AppSource[];
  app_status?: number;
  put_status?: number;
  review_detail?: string;
  review_status?: number;
  sensitive_permission_desc?: string;
  share_account_count?: number;
  trace_activation?: number;
  update_time?: number;
  url?: string;
  use_sdk?: number;
  version_code?: number;
  share_type?: number;
  function_introduction?: string;
  record_number?: string;
  document_number?: string;
  service_category?: string;
  network_type?: number;
  offline_app_letter_url?: string;
}

export interface AppSource {
  account_id?: KuaishouId;
  account_name?: string;
}

export interface AppPrivacyInfo {
  privacy_id?: KuaishouId;
  url?: string;
}

export interface PackageInfo {
  package_id?: KuaishouId;
  app_name?: string;
  blob_store_key?: string;
  sensitive_permission_desc?: string;
}
