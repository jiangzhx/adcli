// Generated from github.com/bububa/kwai-marketing-api/model/report/account_report_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import { jsonMarshal } from "../types";

export interface AccountReportRequestInit {}

export class AccountReportRequest implements PostRequest, AccountReportRequestInit {


  constructor(init: AccountReportRequestInit = {}) {

  }

  path() {
    return "v1/report/account_report";
  }

  encode() {
    return jsonMarshal({

    });
  }
}
