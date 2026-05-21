// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsEbpSubjectListV30DataCompanyBasicInfosStatus, ToolsEbpSubjectListV30ResponseDataCompanyBasicInfosInnerAccountParam, ToolsEbpSubjectListV30ResponseDataCompanyBasicInfosInnerCompanyBasicInfo, ToolsEbpSubjectListV30ResponseDataCompanyBasicInfosInnerQualificationInfo } from "../models";

export interface ToolsEbpSubjectListV30ResponseDataCompanyBasicInfosInner {
  account_param: ToolsEbpSubjectListV30ResponseDataCompanyBasicInfosInnerAccountParam;
  company_basic_info?: ToolsEbpSubjectListV30ResponseDataCompanyBasicInfosInnerCompanyBasicInfo;
  group_id: number;
  qualification_info?: ToolsEbpSubjectListV30ResponseDataCompanyBasicInfosInnerQualificationInfo;
  qualification_type: number;
  status: ToolsEbpSubjectListV30DataCompanyBasicInfosStatus;
}

