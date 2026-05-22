// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_subject_list_v3_0_response_data_company_basic_infos_inner_company_basic_info.go
// Do not edit manually.

import type { ToolsEbpSubjectListV30DataCompanyBasicInfosCompanyBasicInfoStatus } from "../models/index";

export interface ToolsEbpSubjectListV30ResponseDataCompanyBasicInfosInnerCompanyBasicInfo {
  check_type: number;
  company_id: number | string;
  company_name: string;
  qualification_serial: string;
  qualification_type: number;
  status: ToolsEbpSubjectListV30DataCompanyBasicInfosCompanyBasicInfoStatus;
}

