// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_ad_account_certification.go
// Do not edit manually.

import type { AdAccountCertificationFile, AdAccountCertificationImage } from "../v3/index";

export interface AdAccountCertification {
  certification_code?: string;
  certification_id?: number | string;
  certification_file_list?: AdAccountCertificationFile[];
  certification_image_list?: AdAccountCertificationImage[];
}

