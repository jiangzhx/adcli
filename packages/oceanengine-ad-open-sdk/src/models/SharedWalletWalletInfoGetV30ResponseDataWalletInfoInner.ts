// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { SharedWalletWalletInfoGetV30DataWalletInfoWalletType, SharedWalletWalletInfoGetV30ResponseDataWalletInfoInnerCommonWalletInfo, SharedWalletWalletInfoGetV30ResponseDataWalletInfoInnerMainWalletInfo, SharedWalletWalletInfoGetV30ResponseDataWalletInfoInnerSubWalletInfo } from "../models";

export interface SharedWalletWalletInfoGetV30ResponseDataWalletInfoInner {
  common_wallet_info?: SharedWalletWalletInfoGetV30ResponseDataWalletInfoInnerCommonWalletInfo;
  main_wallet_info?: SharedWalletWalletInfoGetV30ResponseDataWalletInfoInnerMainWalletInfo;
  sub_wallet_info?: SharedWalletWalletInfoGetV30ResponseDataWalletInfoInnerSubWalletInfo;
  wallet_id?: number | string;
  wallet_type?: SharedWalletWalletInfoGetV30DataWalletInfoWalletType;
}

