// 由 oceanengine/ad_open_sdk_go models/model_query_invoice_v2_response_data.go 生成
// 不要手动编辑。

import type { QueryInvoiceV2ResponseDataInvoiceInfoListInner, QueryInvoiceV2ResponseDataPageInfo } from "../models/index";

export interface QueryInvoiceV2ResponseData {
  invoice_info_list: QueryInvoiceV2ResponseDataInvoiceInfoListInner[];
  page_info?: QueryInvoiceV2ResponseDataPageInfo;
}

