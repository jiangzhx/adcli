// 由 oceanengine/ad_open_sdk_go models/model_cg_transfer_query_transfer_balance_v3_0_response_data_accont_amount_detail_list_inner.go 生成
// 不要手动编辑。

import type { CgTransferQueryTransferBalanceV30ResponseDataAccontAmountDetailListInnerCapitalDetailListInner } from "../models/index";

export interface CgTransferQueryTransferBalanceV30ResponseDataAccontAmountDetailListInner {
  account_id: number | string;
  capital_detail_list: CgTransferQueryTransferBalanceV30ResponseDataAccontAmountDetailListInnerCapitalDetailListInner[];
  deposit_amount: number;
  total_transfer_amount: number;
}

