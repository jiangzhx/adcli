---
title: 返回码
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/errors
doc_id: tencent_ads_v3_0_docs_errors
source_id: tencent_ads_v3_0_docs_errors
---
## 返回码

| 返回码 | 提示消息 | 描述 |
| --- | --- | --- |
| 11000 | Access token is expired. | 您的 access_token 已过期，请通过 oauth/token 接口获取最新 token |
| 11002 | Access token is invalid. | 您的 access_token 无效，请通过 oauth/authorize 接口获取 token。 |
| 11004 | Access token is malformed. | 您的 access_token 格式不正确，请通过 oauth/authorize 接口获取 token |
| 11005 | Access token is empty. | access_token 为必填字段，请传入正确的 access_token |
| 11007 | The client_id is invalid. | 应用 id 无效，请检查 access_token 正确性。 |
| 11008 | Application request limit has been exceeded. | 该应用的请求次数已达限制，请稍后重试 |
| 11009 | Authorization code is expired. | 授权码过期，请重新发起授权流程。 |
| 11010 | Refresh token is malformed. | refresh_token 格式错误，请检查 refresh_token 正确性。 |
| 11011 | Authorization code is malformed. | 授权码格式错误，请检查 authorization_code 正确性。 |
| 11012 | Refresh token is expired. | refresh_token 过期，请重新发起授权流程 |
| 11013 | Authorization code can only be used once. | 授权码只能使用一次，请重新发起授权流程 |
| 11014 | The API you requested is out of the scope of authority. | 您请求的接口超出了授权范围，请在开发者开通对应权限后，重新发起授权 |
| 11016 | Application has reached the request limit per second. | 应用程序已达到每秒的请求限制，请稍后再试 |
| 11017 | Application has reached the request limit per minute. | 应用请求已达分钟频次上限，请登陆开发者后台查看当前接口对应分配的频次，并在要求范围内请求接口。 |
| 11018 | Application has reached the request limit per day. | 应用请求已达天频次上限，请 1 天后重试，或在官网提交工单申请开通更多频次配额。 |
| 11019 | Your request is much too frequent. | 您的请求过于频繁或主体/开发者的频控已达到上限 |
| 11020 | Access token of the stress-test is invalid. | 压测的访问令牌无效 |
| 11022 | User token has reached the request limit | 实名认证令牌使用超频 |
| 11030 | The Access_Token you are currently using has a permanent validity period, which poses a security risk.Plase check:https://developers.e.qq.com/v3.0/pages/news/info/20260123 | 您当前使用的 Access_Token 有效期为永久，存在安全风险，请登录开发者官网配完成存量开发者应用访问令牌（Access Token）有效期更新，详细见：https://developers.e.qq.com/v3.0/pages/news/info/20260123 |
| 11101 | Your request is missing a required parameter which is user_token | 请求缺失实名认证令牌，获取方式参考 https://docs.qq.com/doc/DSVdkdk1LQ1hOam5n |
| 11102 | User token is invalid | 实名认证令牌无效或已过期 |
| 11103 | The user with user_token is not exist or has not completed the real-name authentication | 实名认证令牌对应的操作人不存在或者未完成实名认证 |
| 11104 | User token has not completed organization verification, not finish account {PARAM} | 实名认证令牌操作的账号未完成组织认证，未完成的账户 id：{PARAM} |
| 12000 | Your request is missing a required parameter which is one of access_token, timestamp and nonce. | 您的请求缺少必须参数：access_token,timestamp,nonce |
| 12003 | JSON string is malformed. | JSON 字符串格式错误，请调整参数后重试 |
| 12007 | The API you requested is unknown. Please check your URL and http method. | 您请求未知的接口，请检查您的 URL 和 HTTP 方法。 |
| 12008 | Parameter 'fields' must be array. | 参数 fields 必须为数组，请调整参数后重试 |
| 12009 | Tried accessing nonexisting field in the parameter 'fields' you provided. | 参数 fields 中有不存在的字段，请调整参数后重试 |
| 12010 | The api you requested does not support idempotence. | 您请求的接口不支持幂等。 |
| 12011 | The number of sub requests has reached the limit. | 批量请求的子请求个数超过限制 |
| 12100 | The nonce has been used before. | nonce 已被使用，请更换 nonce |
| 12101 | The timestamp is expired. | 时间戳过期，请确认发起请求时的 timestamp 字段赋值逻辑 |
| 12201 | Parameter 'account_id' is invalid. | account_id 参数无效，请校验当前 token 是否具有操作当前 account_id 的权限。 |
| 12203 | The resource owner is not permitted to operate this 'account_id'. | 资源所有者未允许操作此帐号 id，请确认当前 token 是否具有操作此 account_id 的权限。 |
| 12204 | Parameter 'organization_id' is invalid. | organization_id 参数无效，请校验当前 token 是否具有操作当前 organization_id 的权限。 |
| 12700 | The resource you specified is being modified. Please try again later. | 其他请求正在同时更新你请求的资源，为了保证数据一致性，请稍后重试 |
| 12701 | The account has been banned from creating new ads. If you have any questions, please contact online customer service or email ads_ss(Tencent Advertising Appeal Center) | 账户已被禁止新建广告，如有疑问请联系在线客服或邮件 ads_ss(腾讯广告申诉中心) |
| 12807 | check sso login fail | 未登录 |
| 12810 | miss sso login param: {PARAM} | 缺少登录校验相关参数: {PARAM} |
| 18001 | Your request is missing a required parameter. The required parameter is '{PARAM}'. | 缺失必填参数{PARAM}，请传入必填参数 |
| 18002 | Parameter '{PARAM}' must be {PARAM} . | 参数{PARAM}必须是{PARAM}类型 |
| 18003 | The value you specified for '{PARAM}' is invalid. Valid values must be not greater than {PARAM}. | 参数{PARAM}无效，取值需不大于{PARAM} |
| 18004 | The value you specified for '{PARAM}' is invalid. Valid values must be not less than {PARAM} . | 参数{PARAM}无效，取值需不小于{PARAM} |
| 18009 | Parameter '{PARAM}' must be one of the following values: [{PARAM}]. | 参数%s 的取值需在[{PARAM}]中 |
| 18012 | Your request contains too few values for '{PARAM}'.This parameter must have a minimum of {PARAM} value(s). | 您的请求包含的{PARAM}值太少，此参数最少可包含{PARAM}值 |
| 18014 | Parameter '{PARAM}' has too many decimal places. The maximum number of decimal places is {PARAM}. | 参数{PARAM}长度小于最小限制{PARAM}，请调整参数大小 |
| 18015 | Super clients are not allowed to invoke v3.0 interfaces | 超级应用不允许调用 3.0 接口 |
| 31002 | Parameter \'{PARAM}\' must be {PARAM}. | 参数{PARAM}取值范围是{PARAM} |
| 31057 | Parameter \'{PARAM}\' cannot be earlier than \'{PARAM}\ | 参数'{PARAM}'不能早于'{PARAM}' |
| 32211 | The advertiser is inactive. | 广告主帐号当前不可用，请确认当前广告主状态是否正确 |
| 32562 | The value of the parameter \'{PARAM}\' is not supported for the adcreative_template_id, site_set and promoted_object_type you specified. | 您指定的 adcreative_template_id，site_set 和 promote_object_type 不支持参数{PARAM}的值 |
| 33109 | Parameters \'is_deleted\' and \'last_modified_time\' in filtering must be used together. | 参数 is_deleted 和参数 last_modified_time 必需一起使用 |
| 34109 | Parameter {PARAM} is invalid | 参数{PARAM}无效 |
| 50003 | file extension invalid | 无效的文件类型 |
| 50004 | file size exceeds limit | 文件大小超过限制 |
| 50005 | audience id invalid | audience_id 无效 |
| 50006 | audience user count is not support operation '{PARAM}' | 人群当前覆盖数不支持此操作 |
| 50007 | audience name duplicated. | 人群名称重复 |
| 50008 | quota is not enough,quotaType:{PARAM0},quotaValue:{PARAM1},quotaConsumed:{PARAM2} | 配额不足 |
| 50009 | non-leaf tag delete forbidden | 不允许删除非叶子结点标签 |
| 50010 | contains no permission data provider tag | 包含没有权限的 data provider 标签 |
| 50011 | contains multiple data provider tag | 包含多个 data provider 的标签 |
| 50012 | contains no targeting permission data provider tag | 包含不允许定向的 data provider 标签 |
| 50013 | audience type '{PARAM}' do not support operation | 人群类型不支持此操作 |
| 50014 | audience status '{PARAM}' do not support operation | 人群状态不支持此操作 |
| 50015 | you do not have permission of audience | 没有此人群的权限 |
| 50016 | Your request contains params '{PARAM}' that are mutually exclusive. Not more than one | 参数互斥 |
| 50017 | outer_audience_id was used for a custom_tag, tag_id is {PARAM} | 人群的 ouerId 和标签的 tagCode 不能重复 |
| 50018 | request more frequently | 请求过于频繁,请稍后操作 |
| 50019 | tag total count exceeds limit | 标签总数超过上限，不能创建 |
| 50020 | tag level count exceeds limit | 标签层级超过上限，不能创建 |
| 50021 | advertiser's opeartor info error | 广告主关联的运营人员信息有 |
| 50022 | has associate grant relation | 存在授权关系 |
| 50023 | has associate ad or targeting | 存在关联的广告或者定向 |
| 50024 | has associate lookalike audience | 存在关联的 LOOKALIKE 人群 |
| 50025 | has associate combine audience | 存在关联的 COMBINE 人群 |
| 50026 | contains business grant scope type | 存在 BUSINESS 授权类型 |
| 50027 | contains account scope grant | 存在账号间人群授权 |
| 50028 | has no associate grant relation | 不存在授权关系 |
| 50029 | operator_id invalid. | operator_id 不合法. |
| 50030 | has associate tdc compound audience | 存在关联的 TDC COMPOUND 人群 |
| 50031 | file not ready | 文件尚未准备好 |
| 50032 | rule total count exceeds limit '{PARAM}' | 规则总数超过上限，不能创建 |
| 50033 | tag binding total count exceeds limit '{PARAM}'. | 标签绑定总数超过上限，不能绑定 |
| 50035 | account id required | account_id 字段缺失 |
| 50036 | audience name required. | 人群名称缺失 |
| 50037 | lookalike number required. | lookalike number 字段缺失 |
| 50038 | file required. | 文件缺失 |
| 50039 | account id invalid | account_id 无效 |
| 50040 | dmp_mid invalid. | 无效 DMP 客户 id |
| 50041 | file receive error | 文件接收异常 |
| 50042 | audience name length exceeds limit. | 人群名称长度超过限制 |
| 50043 | lookalike segment target number not in valid range. | e 扩展目标人群数不在有效范围内 |
| 50044 | audience description length exceeds limit. | 人群描述长度超过限制 |
| 50045 | parent tag id invalid | parent_tag_id 无效 |
| 50046 | tag id invalid | tag_id 无效 |
| 50047 | id type invalid | id_type 字段无效 |
| 50048 | rule required. | rule 字段缺失 |
| 50049 | rule invalid. | 规则不合法 |
| 50050 | tagspace id invalid | tag_space_id 无效 |
| 50051 | order by field invalid | order by field 无效 |
| 50052 | seed audience is illegal | 种子人群规则不合法 |
| 50053 | seed audience id required. | seed audience id 字段缺失 |
| 51001 | We are unable to process your request fetching reports at this time. Please retry your request in one minute. If you encounter this error repeatedly, please contact our dedicated operation team. | 抱歉暂时无法处理您的请求，请稍后再试。如果您重复收到此类提示，请联系我们的技术支持团队。 |
| 51002 | unknown protocol error. | 无效的数据协议 |
| 54032 | include_keyword has repeat element | 包含关键词重复 |
| 54034 | include_keyword has repeat element | 包含关键词重复 |
| 54180 | you are not allowed to use this appid '{PARAM}' | 你对这个 appId 没有使用权限 |
| 54300 | audience can not be reseted. {MSG} | 该人群无法重置 |
| 54301 | inlude keywords are illegal | 包含关键词无效 |
| 54302 | only contain one audience | 组合人群不能只包含一个人群 |
| 54303 | has empty id in campaign | 推广计划类型对应的 id 列表不能为空 |
| 54307 | the last file request was not completed | 上一个文件请求未完成 |
| 54309 | app_id not exist,tracking service response code:{PARAM0} | app_id not exist,tracking service response code:{PARAM0} |
| 60000 | We are unable to process your request at this time. Please retry your request. If you encounter this error repeatedly, please contact our dedicated operation team. | 我们目前无法处理您的请求。请重试您的请求。如果您反复遇到此错误，请联系我们的专业运营团队 |
| 60001 | The source of your request is illegal, please confirm. If you have any questions, please contact our technical support. | 调用方没有权限 |
| 60002 | The account does not exist, please check the account. | 账户不存在 |
| 60003 | Account role is incorrect, please check account. | 账户角色不正确 |
| 60004 | Account uid format is incorrect. | 头部账户 uid 格式不正确 |
| 60005 | A system frequency limit has been exceeded. | 请求频率超出限制 |
| 60006 | Part of leads failed. | 部分失败 |
| 60007 | Failed to get leads, please try again. | 获取线索失败 |
| 60008 | Parameter format error, please check if the field type is correct. | 参数格式错误，请检查字段类型是否正确 |
| 60009 | Parameter error, parameter content is empty. | 参数错误，参数内容为空 |
| 60010 | Parameter error, account id is required. | 参数错误，账户 id 必填 |
| 60011 | The parameter uid is inconsistent with the requested account. | 参数 uid 和请求账户不一致 |
| 60012 | Parameter error, exceeding page size. | 参数错误，超出页数大小 |
| 60013 | Parameter error, exceeding single page query size. | 参数错误，超出单页查询大小 |
| 60014 | Parameter error, The inquiry date is not filled in. | 参数错误，查询日期必填 |
| 60015 | Parameter error, date range cannot exceed one year. | 参数错误，日期范围不能超过一年 |
| 60016 | Parameter error, incorrect filter field name type. | 参数错误，过滤字段名类型不正确 |
| 60017 | Parameter error, incorrect filtering operation type. | 参数错误，过滤操作类型不正确 |
| 60018 | Parameter error, the length of the filter value array is incorrect. | 参数错误，过滤取值数组长度不正确 |
| 60019 | Parameter error, wrong value format of filter value array. | 参数错误，过滤取值数组取值格式错误 |
| 60020 | Parameter error, the length of lastSearchAfterValue is incorrect. | 参数错误，lastSearchAfterValue 长度不正确 |
| 60021 | Parameter error, the parameters in the lastSearchAfterValue cannot all be converted to numbers. | 参数错误，lastSearchAfterValue 数组参数不能全部转成数字 |
| 60022 | Parameter error, the depth of page turning data exceeds the maximum limit, please use lastSearchAfterValue mode to query. | 参数错误，深度翻页数据超过了最大的限制，请使用 lastSearchAfterValue 模式查询 |
| 60023 | Parameter error, the list of leads cannot be empty. | 参数错误，线索列表不能为空 |
| 60024 | Parameter error, more than 100 lead data. | 参数错误，线索数据超过 100 个 |
| 60025 | The parameter is incorrect, lead_id cannot be empty. | 参数错误，回传状态线索 id 不能为空 |
| 60026 | Parameter error, leads_convert_type cannot be empty. | 参数错误，线索状态不能为空 |
| 60027 | Parameter error, leads_convert_type does not exist. | 参数错误，线索状态不存在 |
| 60028 | Parameter error, leads_ineffect_reason does not exist. | 参数错误，线索无效原因不存在 |
| 60029 | Parameter error, leads_intention_score does not exist. | 参数错误，线索评分不存在 |
| 60030 | 参数错误，线索状态和线索评分至少填写一个 | 参数错误，线索状态和线索评分至少填写一个 |
| 60031 | 参数错误，线索导入的列表必填 | 参数错误，线索导入的列表必填 |
| 60032 | 参数错误，线索数据超过最大的长度 | 参数错误，线索数据超过最大的长度 |
| 60033 | 参数错误，外部线索 id 不能为空 | 参数错误，外部线索 id 不能为空 |
| 60034 | 参数错误，外部线索 id 超过长度限制 | 参数错误，外部线索 id 超过长度限制 |
| 60035 | 参数错误，导入外部线索 id 重复 | 参数错误，导入外部线索 id 重复 |
| 60036 | 参数错误,线索类型必填 | 参数错误,线索类型必填 |
| 60037 | 参数错误,线索类型取值不正确 | 参数错误,线索类型取值不正确 |
| 60038 | 参数错误, 预约类型取值不正确 | 参数错误, 预约类型取值不正确 |
| 60039 | 参数错误，性别取值不正确 | 参数错误，性别取值不正确 |
| 60040 | Parameter error, leads_user_id, leads_tel, leads_qq and leads_wechat at least fill one. | 参数错误，线索用户 id、线索手机、QQ、微信号至少一个不为空 |
| 60041 | Parameter error, leads_tel exceeds max length. | 参数错误，手机超过长度限制 |
| 60042 | Parameter error, the value of leads_tel is not right. | 参数错误，手机格式不正确 |
| 60043 | Parameter error, the value of leads_qq is not right. | 参数错误，QQ 取值不正确 |
| 60044 | Parameter error, leads_wechat exceeds max length. | 参数错误，微信号超过长度限制 |
| 60045 | Parameter error, leads_user_id exceeds max length. | 参数错误，用户 id 超过长度限制 |
| 60046 | Parameter error, leads_name exceeds max length. | 参数错误，姓名超过长度限制 |
| 60047 | Parameter error, leads_area exceeds max length. | 参数错误，地区超过长度限制 |
| 60048 | Parameter error, leads_email exceeds max length. | 参数错误，邮箱超过长度限制 |
| 60049 | Parameter error, the value of leads_email is not right. | 参数错误，邮箱格式不正确 |
| 60050 | Parameter error, bundle exceeds max length. | 参数错误，其他信息超过长度限制 |
| 60051 | Parameter error, the value of bundle is not right. | 参数错误，其他信息格式错误 |
| 60052 | Parameter error, click_id exceeds max length. | 参数错误，点击 id 超过长度限制 |
| 60053 | Parameter error, outer_leads_convert_type is empty. | 参数错误，线索转化类型不能为空 |
| 60054 | Parameter error, outer_leads_convert_type exceeds max length. | 参数错误，线索转化类型超过长度限制 |
| 60055 | Parameter error, outer_leads_ineffect_reason exceeds max length. | 参数错误，线索无效原因超过长度限制 |
| 60056 | Parameter error, the list of leads cannot be empty. | 参数错误，线索回传的列表不能为空 |
| 60057 | Parameter error, leads in request param is duplicated. | 参数错误，请求参数中的线索重复 |
| 60058 | Parameter error, operator_id has no right to deal account_id's lead. | 参数错误，当前操作者没有回传外部线索账号的权限 |
| 60059 | Fail to import outer leads as leads already exist. Please remove duplicate leads first. | 导入外部线索校验发生错误，已经存在导入的外部线索，请先移除重复的线索 |
| 60060 | Not support report leads created 7 days ago. | 不支持回传 7 天前创建的线索 |
| 60061 | Leads don't exist. | 线索不存在 |
| 60062 | Fail to update leads. | 回传外部线索部分失败 |
| 60063 | Parameter error, outer_leads_convert_type can't not empty as outer_leads_ineffect_reason is filled. | 参数错误，填写了线索无效原因线索转化类型不能为空 |
| 60064 | Parameter error, leads_user_type can't not empty as leads_user_id is filled. | 参数错误，leads_user_id 填写了 leads_user_type 不能为空 |
| 60065 | Parameter error, the value of leads_user_type is not right. | 参数错误，leads_user_type 取值不正确 |
| 60066 | 参数错误，leads_user_wechat_appid 不能为空 | 参数错误，leads_user_wechat_appid 不能为空 |
| 60067 | 参数错误，至少填写一个需要修改的字段 | 参数错误，至少填写一个需要修改的字段 |
| 60068 | 参数错误，{PARAM}至少一个不为空 | 参数错误，{PARAM}至少一个不为空 |
| 60069 | 参数错误，{PARAM}不能为空 | 参数错误，{PARAM}不能为空 |
| 60070 | 参数错误，{PARAM}值不正确 | 参数错误，{PARAM}值不正确 |
| 60071 | 参数错误，{PARAM}值不匹配 | 参数错误，{PARAM}值不匹配 |
| 60072 | 参数错误，{PARAM}超过长度限制 | 参数错误，{PARAM}超过长度限制 |
| 60073 | 参数错误，{PARAM}格式错误 | 参数错误，{PARAM}格式错误 |
| 60074 | 当前日期暂无赔付数据 | 当前日期暂无赔付数据 |
| 60076 | 参数错误，回传标签信息中标签组与标签名必须同时填写 | 参数错误，回传标签信息中标签组与标签名必须同时填写 |
| 60077 | 每个账号最多创建 100 个标签分组 | 每个账号最多创建 100 个标签分组 |
| 60078 | 回传标签分组名不可与系统分组名相同 | 回传标签分组名不可与系统分组名相同 |
| 60079 | 参数错误，当前回传的标签值{PARAM}和系统已有其他标签组的标签值重复，请修改标签值后重新回传 | 参数错误，当前回传的标签值{PARAM}和系统已有其他标签组的标签值重复，请修改标签值后重新回传 |
| 60080 | 参数错误，不能设置子账号或者 MP 子客的行业体系，请设置其主账号或者直客的 | 参数错误，不能设置子账号或者 MP 子客的行业体系，请设置其主账号或者直客的 |
| 60081 | 参数错误，当前应用未授权外呼功能，请联系运营 | 参数错误，当前应用未授权外呼功能，请联系运营 |
| 60082 | 参数错误，被叫号码与线索号码不一致 | 参数错误，被叫号码与线索号码不一致 |
| 60083 | 中间号分配失败，暂无可用中间号 | 中间号分配失败，暂无可用中间号 |
| 60084 | 外呼受限, {PARAM} | 外呼受限, {PARAM} |
| 60085 | 上一个通话尚未结束，请稍后再试 | 上一个通话尚未结束，请稍后再试 |
| 60086 | websocket 断开，请重连 | websocket 断开，请重连 |
| 60087 | 由于运营商政策限制，仅支持使用手机号或者固定电话号码进行呼叫，请修改个人电话号码之后再进行呼叫 | 由于运营商政策限制，仅支持使用手机号或者固定电话号码进行呼叫，请修改个人电话号码之后再进行呼叫 |
| 62000 | We are unable to process your request fetching reports at this time. Please retry your request in one minute. If you encounter this error repeatedly, please contact our dedicated operation team. | 抱歉暂时无法处理您的请求，请稍后再试。如果您重复收到此类提示，请联系我们的技术支持团队。 |
| 62001 | agency not exist. | 服务商不存在。 |
| 62002 | lead not exist. | 线索不存在。 |
| 62003 | potential not exist. | 商机不存在 |
| 62004 | order not exist. | 订单不存在 |
| 62005 | contactInfo not exist. | 联系信息不存在 |
| 62006 | employee not exist. | 指定责任人不存在 |
| 62007 | team not exist. | 指定团队不存在 |
| 62008 | customer protection rules violated. | 不符合客保规则要求 |
| 64011 | The parameter {PARAM0} is invalid, the length of the value out of range{PARAM1} | The parameter {PARAM0} is invalid, the length of the value out of range{PARAM1} |
| 64012 | 参数解析失败，请检查参数格式 | 参数解析失败，请检查参数格式 |
| 64015 | The advertiser is inactive. | 广告主帐号当前不可用，请确认当前广告主状态是否正确 |
| 64016 | Request limit reached. Please retry after one minute. | 已达到请求限制。请在一分钟后重试。 |
| 64017 | An error occurred when calling the material service. The advertiser account is currently unavailable, please confirm whether the status of the current advertiser is correct. | 调用素材服务报错, 广告主帐号当前不可用，请确认当前广告主状态是否正确，比如新开户是否审核通过 |
| 64018 | The creative material is invalid: it could have been deleted or never existed. | 操作的对象不存在或已删除，请确认 account_id 是否可操作该对象 |
| 64019 | Image resize failed. Please adjust relative params. | 缩放图片失败，请调整相关参数 |
| 64020 | The value you specified for {PARAM} is invalid. Valid values must between {PARAM} AND {PARAM}. | 参数{PARAM}取值需在{PARAM}和{PARAM}之间 |
| 64021 | The current video shoud meet the following restrictions | 当前视频文件不符合要求 |
| 64022 | Your request contains too many values for {PARAM0}. This parameter can have a maximum of {PARAM1} value(s). | 您的请求包含的{PARAM2}值太多，此参数最多可包含{PARAM3}值 |
| 64023 | 解析视频文件超时，请稍后重新上传视频重试 | 解析视频文件超时，请稍后重新上传视频重试 |
| 64024 | Your request is missing a required parameter. The required parameter is {PARAM}. | 缺失必填参数 |
| 64025 | 视频文件解析 META 信息错误，暂不支持该视频上传 | 视频文件解析 META 信息错误，暂不支持该视频上传 |
| 64026 | The image could not be stored. | 存储图片失败，请检查图片类型、文件签名、上传方式和账户 id 等字段是否填写正确 |
| 64027 | The value of parameter {PARAM} contains disallowed characters. | The value of parameter {PARAM} contains disallowed characters. |
| 66000 | Catalog %s Not Found | 未找到商品目录 |
| 66001 | Catalog %s Not Granted | 当前广告主未授权该商品库资产 |
| 66002 | Catalog Name Duplicate | 商品库名称重复 |
| 66003 | Number of created catalogs reached the max limit per account. Catalog type is %s, Maximum number is %s. | 超过了一个账号可创建的商品库的最大个数限制 |
| 66004 | Vertical not exists | 未找到指定行业 |
| 66005 | Catalog type %s not supported by vertical %s | 指定行业暂不支持此商品库类型 |
| 66006 | Catalog Grant Failed | 商品库授权失败 |
| 66007 | Can't Find Any Vertical Catalog in Catalog %s | 给定商品库下不存在任何行业商品库 |
| 66008 | Series Not Able To Create Except For Standard Catalog | 非标准商品库不可创建商品系列 |
| 66009 | Series Name Duplicate | 商品系列名重复 |
| 66010 | Series Not Found | 商品系列不存在 |
| 66011 | Feed Download File Access Error | Feed 下载文件获取失败 |
| 66012 | Feed Entry URL Validate Error | Entry URL 校验失败 |
| 66013 | File Upload Error | 文件上传 HDFS 失败 |
| 66014 | Feed Creat Not Supported | Feed 创建不支持商品库类型 |
| 66015 | URL %s is not allowed | 不允许该 URL |
| 66016 | Feed name %s is duplicated | 数据源名称已经存在 |
| 66017 | Entry URL %s is duplicated | Entry URL 已经存在 |
| 66018 | Feed %s Not Found | 未找到商品文件 |
| 66019 | Feed %s Not Granted | 当前广告主未授权该商品文件资产 |
| 66020 | Feed %s Manually Trigger Frequency Exceeding The Upper Limit Today | 当日手动触发自动更新次数超过上限 |
| 66021 | Failed to lock with key | 尝试获取锁失败 |
| 66022 | Product not exist | 商品不存在 |
| 66023 | Product offline error | 商品下线失败 |
| 66024 | the ProductOuterId or ProductOuterIdlist can not be null | 商品 id 不能为空 |
| 66025 | L5 Failed to Get Next Route Info | L5 获取失败 |
| 66026 | COS Client Failed to Initialize | COS Client 获取失败 |
| 66027 | illegal parameter error | 参数与文档描述不符合 |
| 66028 | invalid template width or height | invalid template width or height |
| 66029 | Application has reached the request limit per minute. | 超过接口每分钟调用次数限制 |
| 66030 | Application has reached the request limit per day. | 超过接口每日调用次数限制 |
| 66031 | Your request is missing a required parameter. The required parameter is '%s'. | 缺少必填参数 |
| 66032 | Parameter '%s' must be %s. | 数据类型错误 |
| 66033 | The value you specified for '%s' is invalid. Valid values must be less than %s. | 参数大于最大值 |
| 66034 | The value you specified for '%s' is invalid. Valid values must be greater than %s. | 参数小于最小值 |
| 66035 | The parameter '%s' has too many characters. | 字符串长度过长 |
| 66036 | The parameter '%s' has too few characters. | 字符串长度过短 |
| 66037 | Parameter '%s' must be one of the following values: [%s] | 枚举值不在可选范围内 |
| 66038 | The type of the uploaded file is invalid. | 上传文件类型错误 |
| 66039 | Your request contains too many values for '%s'. This parameter can have a maximum of %s value(s). | 参数数组元素数量过多 |
| 66040 | Your request contains too few values for '%s'. This parameter must have a minimum of %s value(s) | 参数数组元素数量过少 |
| 66041 | Parameter 'account_id' is invalid. | account_id 无效 |
| 66042 | token not found error | api 请求 token 缺失 |
| 66043 | invalid token | token 参数无效 |
| 66044 | parameter error | 未知参数异常 |
| 66045 | PCM system busy. Please retry your request. If you encounter this error repeatedly, please contact our dedicated operation team. | PCM 服务系统繁忙，请稍后再试，如果您反复遇到此错误，请联系我们的技术支持团队。 |
| 66046 | action param value not exist | 参数值不存在 |
| 66047 | create audience permission denied | 数据源不可以被用来创建人群 |
| 66048 | actionSet create request too frequently | 数据源创建请求过于频繁,请稍后操作 |
| 66049 | visual track not exist | 可视化配置不存在 |
| 66050 | visual track already exist | 可视化配置已存在 |
| 66051 | quota is not enough,quotaType:%s,quotaValue:%s,quotaConsumed:%s | 配额不足 |
| 66052 | name duplicated with %s | 名称重复 |
| 66053 | Parameter '%s''s format must be 'yyyy-MM-dd HH:mm:ss' | 日期时间格式无效 |
| 66054 | Number of created data warehouses reached the max limit per account. Maximum number is %s. | 超过了一个账号可创建的数据仓库的最大个数限制 |
| 66055 | account_id(%s) and data_warehouse_id(%s) not found. | 账号 id 和数据仓库 id 不匹配 |
| 66056 | Interface not exist | 接口不存在 |
| 66057 | Permission denied | 没有权限 |
| 66058 | Product add field check fail{PARAM} | Product add field check fail{PARAM} |
| 66059 | Number of Series reached max limit | 商品系列数量超过限制 |
| 66060 | Series Definition Duplicate | 商品系列规则定义重复 |
| 66061 | accountId = {PARAM0} Not Able To Delete Series accountId = {PARAM1} | 当前登陆账号无此商品系列删除权限 |
| 66062 | series create failed | 商品系列创建失败 |
| 66063 | product_series's logic_operator is not valid | 商品系列逻辑操作符不合法 |
| 66064 | product_series's filter is empty | 商品系列过滤条件为空 |
| 66065 | this size of product_series's filters cannot be greater than {PARAM0} | 商品系列过滤条件数量超过限制 |
| 66066 | product_series's filter field is empty | 商品系列过滤条件的字段为空 |
| 66067 | product_series's filter field {PARAM0} not supported | 商品系列过滤条件的字段不支持 |
| 66068 | product_series's filter operator is empty | 商品系列过滤条件的操作符为空 |
| 66069 | product_series's filter values is empty | 商品系列过滤条件的值为空 |
| 66070 | product_series's filter values size cannot be greater than {PARAM0} | 商品系列过滤条件的值的数量超过限制 |
| 66071 | product_series's filter field value is empty | 商品系列过滤条件的字段值为空 |
| 66072 | product_series's filter field value range is empty | 商品系列过滤条件的区间字段值为空 |
| 66073 | product_series's filter field value range min/max is empty | 商品系列过滤条件的上下区间值为空 |
| 66074 | product_series's filter field value range min/max exclusive is empty | 商品系列过滤条件的是否包含上下区间值为空 |
| 66075 | product_series's filter field value range min/max is not valid | 商品系列过滤条件的上下区间值不合法 |
| 66076 | product_series's filter field against logic operator and | 商品系列过滤条件的字段和 and 逻辑操作符冲突 |
| 67001 | Parameter {PARAM} is invalid. | 参数{PARAM}非法 |
| 68002 | Application has reached the request limit! | 请求太频繁！ |
| 69000 | account balance not enough | 账户余额不足 |
| 69001 | invalid poi list | poilist 中存在无效的 poi,或者 poilist 的数量不在 1 ～ 10 的范围内 |
| 69002 | invalid begin time | 开始时间需要是当前时间的两天后 |
| 69003 | invalid poi city level | poi 所在城市等级不一致 |
| 69004 | invalid targeting gender age | 定向缺少必备参数性别或者年龄 |
| 69005 | invalid adtarget | 指定 adgroup 查询不到关系的定向 |
| 69006 | invalid review status | 审核未通过的广告才可以修改开始时间 |
| 71000 | Parameter '{PARAM}' is invalid. | 参数'{PARAM}'无效或不合法 |
| 71001 | The value you specified for {PARAM} is invalid. Valid values must be greater than {PARAM}. | 参数{PARAM}非法, 允许的值必须在{PARAM}以上 |
| 71002 | The value you specified for {PARAM} is invalid. Valid values must be less than {PARAM}. | 参数{PARAM}非法, 允许的值必须在{PARAM}以下 |
| 71003 | The API can only be used by a customer organization account. | 接口仅支持客户工作台组织 id 调用，请确保 token 为 3.0 组织 id 的 token |
| 71004 | The current token corresponds to an id {PARAM} that is not the customer organization id. Please make sure that the token is a customer organization id token. | 当前 token 对应 id{PARAM}不是客户工作台组织 id, 请确保 token 为客户工作台组织 id 的 token |
| 71005 | bm_mkt_api interface error, please contact our dedicated operation team, interface error code: {PARAM} | 业务单元服务接口错误，请联系我们的专业运营团队，接口错误码为: {PARAM} |
| 71006 | The parent organization id of the business unit can only be a group id or an entity id. | 业务单元的上级组织 id 只能是集团 id 或主体 id |
| 71007 | The entity already has a default business unit. | 主体下已存在默认业务单元 |
| 71008 | The number of business units under the entity cannot exceed {PARAM} | 主体下业务单元数量不能超过{PARAM}个 |
| 71009 | The number of business units under the group cannot exceed {PARAM} | 集团下业务单元数量不能超过{PARAM}个 |
| 71010 | The parameters are incorrect. Please check and try again, interface error code: {PARAM0} | {PARAM1} |
| 72000 | We are unable to process your request at this time. Please retry your request. If you encounter this error repeatedly, please contact our dedicated operation team. | 我们目前无法处理您的请求。请重试您的请求。如果您反复遇到此错误，请联系我们的专业运营团队 |
| 72001 | The source of your request is illegal, please confirm. If you have any questions, please contact our technical support. | 您的请求来源不合法，请检查确认。如有疑问，请联系我们的技术支持 |
| 72002 | The account does not exist, please check the account. | 账户不存在，请检查账户 |
| 72003 | Account role is incorrect, please check account. | 账户角色不正确，请检查账户 |
| 72004 | AccountId is not wechat account. | 账户不是微信账号 |
| 72005 | A system frequency limit has been exceeded. | 超过系统频率限制，请稍后再试 |
| 72006 | A system frequency limit has been exceeded. | 创建表单组件失败，请稍后再试 |
| 72007 | Parameter error, account id is required. | 参数错误，账户 id 必填 |
| 72008 | The parameter uid is inconsistent with the requested account. | 参数 uid 和请求账户不一致 |
| 72009 | Parameter format error, please check if the field type is correct. | 参数错误，请检查字段是否正确 |
| 72010 | Parameter items is verified error. | 参数 items 校验错误 |
| 72011 | Parameter items size has been exceeded. | 参数 items 长度超过限制 |
| 72012 | The select form input option value cannot be empty. | 表单下拉输入项选项值不能为空 |
| 72013 | The name of the form input cannot be repeated. | 表单输入项名称不能重复 |
| 72014 | Name or phone type form input cannot exceed 1. | 表单姓名或者手机类型输入项不能超过 1 个 |
| 72015 | Name type form input must have one. | 表单姓名类型输入项必须有一个 |
| 72016 | Phone type form input must have one. | 表单手机类型输入项必须有一个 |
| 72017 | Account status is not passed. | 账户状态未审核通过 |
| 72018 | Parameter error, component_id is required. | 参数错误，component_id 必填 |
| 72019 | Parameter error, account is not subAdvertiser. | 参数错误，账户不是子客 |
| 72020 | Parameter error, The select form input option values size num is exceed. | 参数错误，表单下拉选项数目超过了限制 |
| 72021 | Parameter error, The select form input option value content length is exceed. | 参数错误，表单下拉选项内容长度超过了最大限制 |
| 72022 | Parameter error, The select form input option value content must be string. | 参数错误，表单下拉选项内容必须是字符串 |
| 73000 | We are unable to process your request at this time. Please retry your request. If you encounter this error repeatedly, please contact our dedicated operation team. | 我们目前无法处理您的请求。请重试您的请求。如果您反复遇到此错误，请联系我们的专业运营团队 |
| 73001 | Your request is missing a required parameter. The required parameter is 'account_id'. | 您的请求缺少必需的参数，所需参数为 account_id |
| 73002 | Your request is missing a required parameter. The required parameter is 'max_text_length'. | 您的请求缺少必需的参数，所需参数为 max_text_length |
| 73003 | Parameter 'number' is invalid. | 参数 number 无效或者不合法，请检查该参数 |
| 73004 | Parameter 'max_text_length' is invalid. | 参数 max_text_length 无效或者不合法，请检查该参数 |
| 73005 | Your param 'category_first_level' is not exist in first industry id list. | 参数 category_first_level 所表示的一级行业不存在 |
| 73006 | Your param 'category_second_level' is not exist in second industry id list. | 参数 category_second_level 所表示的二级行业不存在 |
| 73007 | Your param 'category_first_level' does not contains 'category_second_level'. | 您的参数 category_first_level 的子行业列表中不存在您输入的 category_second_level |
| 73008 | Parameter 'filtering' must be one of the following values: [[0, 1], [0], [1]]. | 参数 filtering 不在可选值 [[0, 1], [0], [1]] 中 |
| 73009 | The parameter format is incorrect, please check the correctness of the request parameters. | 参数格式不正确，请检查请求参数的正确性 |
| 73010 | product catalog is not found | 商品库不存在 |
| 73011 | product catalog is not granted | 商品库未授权该广告主账户 |
| 73012 | product_catalog_id is required when product_outer_ids is not empty | 当传入商品 id 列表参数时，product_catalog_id 商品库 id 参数必填 |
| 73013 | exception occurred in verifying product catalog | 校验商品库异常 |
| 74000 | We are unable to process your request at this time. Please retry your request. If you encounter this error repeatedly, please contact our dedicated operation team. | 我们目前无法处理您的请求。请重试您的请求。如果您反复遇到此错误，请联系我们的专业运营团队 |
| 74001 | Your request is missing a required parameter. The required parameter is 'account_id'. | 您的请求缺少必需的参数，account_id 为必填字段 |
| 74002 | Your request is missing a required parameter. The required parameter is 'order_id'. | 您的请求缺少必需的参数，order_id 为必填字段 |
| 74003 | Your request parameter is error. Please check the parameter [filtering] and retry your request. | 您的请求中过滤条件有误，请核对后重试 |
| 75000 | We are unable to process your request at this time. Please retry your request. If you encounter this error repeatedly, please contact our dedicated operation team. | 我们目前无法处理您的请求。请重试您的请求。如果您反复遇到此错误，请联系我们的专业运营团队 |
| 75001 | Your request is missing required one more parameter. The required parameters 'account_id/signature/filename/videofile' are necessary. | 您的请求缺少必需的参数，所需参数'account_id' 'signature' 'filename' 'videofile' 都需填写 |
| 75002 | The 'videofile' you uploaded exceeds 100M, please adjust and upload again. | 您上传的'videofile' 超过了 100M，请调整后重新上传 |
| 75003 | Parameter'signature' verification failed, please regenerate the 32-bit md5 code corresponding to'videofile'. | 参数'signature'校验失败，请重新生成对应'videofile'的 32 位 md5 码 |
| 76000 | We are unable to process your request at this time. Please retry your request. If you encounter this error repeatedly, please contact our dedicated operation team. | 我们目前无法处理您的请求。请重试您的请求。如果您反复遇到此错误，请联系我们的专业运营团队 |
| 76001 | Your request is missing a required parameter. The required parameter is 'account_id'. | 您的请求缺少必需的参数,所需参数为 account_id |
| 76002 | Parameter 'video' must specify 'video_file' or 'video_id'. | 您的请求参数‘ video ’中必须指定‘ video_file ’或者'video_id' |
| 76003 | Video file verified code signature failed. | 视频文件 signature 校验失败 |
| 76004 | Video file upload failed. | 视频文件上传失败 |
| 76005 | Video file size exceeds limit, the max limit is '100M'. | 视频文件上传大小超过限制,文件限制为 100M 以下 |
| 76006 | Video file format verified failed, it just support 'mp4' or 'mov' or 'avi' . | 视频文件格式校验失败,格式应该为 mp4/mov/avi |
| 76007 | Video_id verified failed. | video_id 校验失败,无法找到对应视频 |
| 76008 | Job submit failed. | 任务提交失败，请重新尝试。 |
| 76009 | Task_id is not exists. | 任务 id 不存在 |
| 76010 | Task_id is expired. | 任务 id 已过期 |
| 76011 | Your request is missing a required parameter. | 您的请求缺少必要的参数 |
| 76012 | Your task is failed,please try again or contact us. | 您的任务执行失败,请重试或者联系我们 |
| 76013 | your account has no permission to execute this param only_subtitle_file | 您的账户没有权限提交 only_subtitle_file 字段 |
| 76014 | Required parameters missed, please check your input parameters. | 您的请求缺少必需的参数，请检查必传的入参 |
| 76030 | Your adjustment_type is a required parameter. | 您的请求缺少必需的参数,所需参数为 account_id |
| 76031 | Smart_adjustment,adcreative_template_id、promoted_object_type、campaign_type are required paramete. | 您的请求参数‘ video ’中必须指定‘ video_file ’或者'video_id' |
| 76032 | Smart_adjustment,automatic_site_enabled and site_set need oneVideo file verified code signature failed. | 视频文件 signature 校验失败 |
| 76033 | Manual_adjustment,size、size_adjustment_method、length_adjustment_method are required parameter. | 视频文件上传失败 |
| 76034 | Image file is null or file is invalid. | 视频文件上传大小超过限制,文件限制为 100M 以下 |
| 76035 | overflow_clip length is a required parameter. | 视频文件格式校验失败,格式应该为 mp4/mov/avi |
| 76036 | Can not get ads position by adcreative_template_id. | video_id 校验失败,无法找到对应视频 |
| 76037 | Video does not meet system requirement,system can not handle it. | 任务提交失败 |
| 76038 | Video_id is match ads system requirement,no need handle. | 任务 id 不存在 |
| 76041 | when size_adjustment_method is IMAGE,bg_image_id1 and bg_image_id2 is needed. | 当参数 size_adjustment_method 为 IMAGE 时，bg_image_id1、bg_image_id2 是必传的。 |
| 76042 | bg_image_id1 or bg_image_id2 can not find image url. | bg_image_id1 或 bg_image_id2 无法找到对应的图片 url。 |
| 76060 | voice speed value out of range,speed need in 50 to 200 range. | 语音速度 speed 参数超出范围，取值范围 50~200 |
| 76070 | video_id or video_url param need one. | 请求参数 video_file 和 video_id 必选其一。 |
| 76071 | capture number value out of range,number need in 1 to 12 range. | 参数 nubmer 超出限制，范围在 1~12。 |
| 77000 | system error,please retry later | 拓词接口请求异常,请稍后重试 |
| 77001 | Parameter account_id is invalid | 参数 account_id 无效或者不合法,请检查该参数 |
| 77002 | bidword length exceeds limit 40 bytes | 单个关键词长度超过限制,最大 40 个字节 |
| 77003 | Parameter 'bidword_list' size must in [1, 1000] | 参数 bidword_list 无效或者不合法，bidword_list 长度范围为[1,1000] |
| 77004 | Parameter 'sort_field' is invalid | 参数 order_by/sort_field 无效或者不合法,请检查该参数 |
| 77005 | Parameter 'site_type' is invalid | 参数 site_type 无效或者不合法,请检查该参数 |
| 77006 | Parameter is null | 参数为空 |
| 77007 | Required Parameter is null | 必填参数为空 |
| 77008 | site_sets is invalid | 版位集字段非法 |
| 77009 | recommend_category is invalid | 推荐类型字段非法 |
| 77010 | query_word is is null | 种子词字段为空 |
| 77011 | query_word is exceed max num 10 | 种子词最多为 10 个 |
| 77012 | business_point_id is null | 行业业务点 id 为空 |
| 77013 | business_point_id is invalid | 行业业务点 id 非法 |
| 77014 | campaign_id or adgroup_id is null | 当选择过滤广告词时计划 id 或组 id 为空 |
| 77015 | recommend_reasons is invalid | 推荐理由非法 |
| 77016 | order_by sort_field is null or invalid | 排序字段为空或为非法字段 |
| 77017 | order_by sort_type is null or invalid | 排序方式为空或为非法字段 |
| 77018 | include_word is exceed max num 10 | 包含词最多为 10 个 |
| 77019 | exclude_word is exceed max num 100 | 排除词最多为 100 个 |
| 77020 | single query_word length exceeds limit 40 bytes | 种子词单个词面长度超过限制,最大 40 个字节 |
| 77021 | single query_word is null | 种子词单个词面字段为空 |
| 77022 | single include_word is null | 包含词单个词面字段为空 |
| 77023 | single exclude_word is null | 排除词单个词面字段为空 |
| 77024 | single include_word length exceeds limit 40 bytes | 包含词单个词面长度超过限制,最大 40 个字节 |
| 77025 | single exclude_word length exceeds limit 40 bytes | 排除词单个词面长度超过限制,最大 40 个字节 |
| 77026 | site_sets is duplicate | 版位集字段重复 |
| 77027 | query_word is duplicate | 种子词里词面重复 |
| 77028 | include_word is duplicate | 包含词里词面重复 |
| 77029 | exclude_word is duplicate | 排除词里词面重复 |
| 77030 | recommend_reasons is duplicate | 推荐理由里理由重复 |
| 77031 | order_by exceed limit 1 | 排序字段结构长度超限制,最大 1 |
| 79002 | 策略名称重复，请重新填写 | 策略名称重复，请重新填写 |
| 80000 | Parameter '{PARAM}' is invalid. | 参数'{PARAM}'无效或不合法 |
| 80001 | The value you specified for {PARAM} is invalid. Valid values must be greater than {VALUE_LIMIT}. | 参数{PARAM}非法, 允许的值必须在{PARAM}以上 |
| 80002 | The value you specified for {PARAM} is invalid. Valid values must be less than {VALUE_LIMIT}. | 参数{PARAM}非法, 允许的值必须在{VALUE_LIMIT}以下 |
| 80003 | Your request is missing a required parameter. The required parameter is {PARAM}. | 请求缺少参数{PARAM}. |
| 80004 | agency_mkt_api interface error,please contact our dedicated operation team,interface error code: {PARAM} | 服务商管理服务接口口错误，请联系我们的专业运营团队，接口错误码为: {PARAM} |
| 80005 | Access token is expired. | 时间戳过期，请确认发起请求时的 timestamp 字段赋值逻辑 |
| 80006 | Auth token is invalid | 您的 access_token 格式不正确，请通过 oauth/authorize 接口获取 token |
| 80008 | uid is in blacklist | 账号在黑名单 |
| 90000 | review system busy. Please retry your request. If you encounter this error repeatedly, please contact our dedicated supporting team. | 审核服务系统繁忙，请稍后重试。如果您反复遇到此错误，请联系我们的技术支持团队。 |
| 90001 | Parameter error, element collection cannot be empty. | 参数错误，元素实体集合不能为空 |
| 90002 | Parameter error, elements size too large. | 参数错误，元素集合数目太大，请分批次调用 |
| 90003 | Parameter error, element type is not right. | 参数错误，element_type 字段取值不正确 |
| 90004 | Parameter error, element content is not right. | 参数错误，element_content 字段取值不正确。 |
| 90005 | Parameter error, account_id is not right. | 参数错误，account_id 字段取值不正确 |
| 90006 | Parameter error, account_id cannot be empty. | 参数错误，account_id 字段不能为空 |
| 90007 | Parameter error, element key is not right. | 参数错误，element_key 字段取值不正确。 |
| 90008 | Parameter error, supplement size too large. | 参数错误，supplement 集合数目太大，请分批次调用 |
| 90009 | Parameter error, supplement field is not support. | 参数错误，supplement 字段中 field 取值不正确。 |
| 90010 | Parameter error, supplement operator is not right. | 参数错误，supplement 字段中 operator 取值不正确。 |
| 90011 | Parameter error, supplement values is not right. | 参数错误，supplement 字段中 values 取值不正确。 |
| 90012 | Parameter error, supplement mini_program_id is not right. | 参数错误，supplement 字段中 mini_program_id 取值不正确。 |
| 90013 | Parameter error, supplement site_set is not right. | 参数错误，supplement 字段中 site_set 取值不正确。 |
| 90014 | Parameter error, supplement is_dynamic_creative is not right. | 参数错误，supplement 字段中 is_dynamic_creative 取值不正确。 |
| 90015 | Parameter error, ad_id_list collection cannot be empty. | 参数错误，创意 id 集合不能为空。 |
| 90016 | Parameter error, ad_id_list size too large. | 参数错误，创意 id 集合数目太大，请分批次调用。。 |
| 90017 | urge error, uid has no urge permission. | 催审失败，account_id 没有催审权限。 |
| 90018 | urge error, uid has no usable urge cnt today. | 催审失败，account_id 已到每日催审次数上限。 |
| 90019 | urge error, ad_id_list has no right ad_id. | 催审失败，ad_id 不存在。 |
| 90020 | Parameter error, can not find mdm_id with account_id. | 参数错误，查询不到对应的 mdm_id。 |
| 90021 | Parameter error, level is not right. | 参数错误，level 字段取值不正确。 |
| 90022 | Parameter error, time_dimension is not right. | 参数错误，time_dimension 字段取值不正确。 |
| 90023 | Parameter error, date_range is not right. | 参数错误，date_range 字段取值不正确。 |
| 90024 | Parameter error, creative_wideness_rate_line is not right. | 参数错误，creative_wideness_rate_line 字段取值不正确。 |
| 90026 | the element is now again reviewing，please wait for patien | 该元素正在复审中，请耐心等待 |
| 90027 | the account is not in white list，please contact your sales manager | 广告主不在元素申诉复审白名单内，请联系行业销售经理 |
| 90028 | please check the result of again review and modify it，otherwise it will not support to submit | 请根据复审结果修改，否则无法再次提交复审，仍有疑问请联系行业销售经理 |
| 90029 | current quota is zero，not support to submit again review，please contact your sales manager | 当前申诉复审配额为 0，无法提交复审，请联系行业销售经理 |
| 90030 | at most to submit three additional pictures，please try again | 最多提交 3 张附件图片，请修改 |
| 90031 | the element not support to again review，please contact your sales manager | 该元素不能进行申诉复审(非拒绝态/不符合投放要求)，请联系运营或渠道经理 |
| 90032 | current quota is expire，not support to submit again review，please contact your sales manager | 当前配额有效期已失效，无法提交元素申诉复审，请联系行业销售经理 |
| 90033 | Parameter error, creative_id_list collection cannot be empty. | 参数错误，创意 id 集合不能为空 |
| 126000 | mp service is busy, please try again later. | 微信后台服务返回失败，请稍后再试，如果您反复遇到此错误，请联系我们的技术支持团队。 |
| 126002 | WeCom authorization not found | 该账户下未查询到企业微信授权信息 |
| 127000 | Your account has not reached the threshold, and this interface is temporarily unavailable | 您的账户未达到筛选工具的准入门槛，暂时无法使用此功能，准入标准参考'屏蔽/定投流量包准入条件' |
| 127001 | Each account (account_id) can create one asynchronous async task in five minutes at most, please try again later | 每账号（account_id）限制最多 5 分钟创建 1 个异步报表任务，请您稍后重试 |
| 127002 | Param 'date_range' is illegal | 'date_range'参数不合法 |
| 127003 | 'end_date' cannot be earlier than 'begin_date'. | 'end_date'不能小于'begin_date'. |
| 127004 | Param 'start_date' is illegal | 参数值'start_date'不合法. |
| 127005 | Offset is oversize, please use asynchronous interface. | 翻页过多，请使用异步报表下载全部数据 |
| 127006 | Param 'page_size' should be between 1 and 100 | page_size 参数值应在 1-100 之间 |
| 127007 | Param 'start_date' is illegal | 参数值'start_date'不合法. |
| 127008 | The gap between start_date and end_date should not exceed one year | 查询时间跨度不能超过 1 年 |
| 127011 | 客户端{PARAM0}命中限流策略：{PARAM1} | 客户端{PARAM0}命中限流策略：{PARAM1} |
| 127012 | pegasus return code{PARAM0}message{PARAM1} | pegasus return code{PARAM0}message{PARAM1} |
| 127013 | params error | 参数错误 |
| 127014 | 客户端{PARAM0}命中限流策略：{PARAM1} | 客户端{PARAM0}命中限流策略：{PARAM1} |
| 127015 | 客户端{PARAM0}命中限流策略:{PARAM1) | 客户端{PARAM0}命中限流策略:{PARAM1) |
| 127016 | 客户端{PARAM0}命中限流策略：{PARAM1} | 客户端{PARAM0}命中限流策略：{PARAM1} |
| 127017 | 客户端{PARAM0}命中限流策略：{PARAM1} | 客户端{PARAM0}命中限流策略：{PARAM1} |
| 128000 | We are unable to process your request at this time. Please retry your request. If you encounter this error repeatedly, please contact our dedicated operation team. | 我们目前无法处理您的请求。请重试您的请求。如果您反复遇到此错误，请联系我们的专业运营团队 |
| 128001 | Your request is missing required parameter(s), please check and try again | 您的请求缺少必需的参数，请检查后重试 |
| 128002 | The account has no operation authority for this catalog, please check and try again | 当前账户对此商品库无操作权限，请检查后重试 |
| 129001 | Invalid request params. | 请求参数检验不通过 |
| 130001 | Failed to synthesize the image, product data path not found. | 图片合成失败，商品缺少模版中所需信息 |
| 130002 | Failed to mat image. | 抠图失败 |
| 130003 | Image composition service is abnormal. | 调用图片渲染生成服务失败，请重试 |
| 130004 | Upload image failed. | 图片上传投放端失败，请重试 |
| 130005 | No product found, please use other product. | 未找到商品，请使用其他商品 |
| 130006 | Invalid request params. | 请求参数检验不通过 |
| 130007 | Template is not found or do not support template size. | 模板不存在或者不支持模板尺寸 |
| 130008 | Invalid template content. | 使用的模版不可用 |
| 131001 | param flow_type invalid | 请求参数 flow_type 无效 |
| 131002 | param query empty | 请求参数 query 为空 |
| 131003 | param query.uid empty | 请求参数 query.uid 为空 |
| 131004 | param query.keyword and query.sku_id_list empty | 请求参数 query.keyword 和 query.sku_id_list 均为空 |
| 131005 | do query err | 执行查询错误，请联系开发人员排查 |
| 132000 | We are unable to process your request at this time. Please retry your request. If you encounter this error repeatedly, please contact our dedicated operation team. | 系统繁忙，请稍后重试。如果您反复遇到此错误，请联系我们的运营团队。 |
| 132001 | {PARAM} interface error, please contact our dedicated operation team, interface error code: {PARAM}. | {PARAM}接口错误，请联系我们的专业运营团队，接口错误码为{PARAM} |
| 132002 | Customer service interface error, please contact our dedicated operation team, interface error code: {PARAM}. | 客户服务接口错误，请联系我们的专业运营团队，接口错误码为{PARAM} |
| 132003 | Whitelist service interface error, please contact our dedicated operation team, interface error code: {PARAM}. | 白名单服务接口错误，请联系我们的专业运营团队，接口错误码为{PARAM} |
| 132004 | Review service interface error, please contact our dedicated operation team, interface error code: {PARAM}. | 审核服务接口错误，请联系我们的专业运营团队，接口错误码为{PARAM} |
| 132005 | Creative service interface error, please contact our dedicated operation team, interface error code: {PARAM}. | 创意中心服务接口错误，请联系我们的专业运营团队，接口错误码为{PARAM} |
| 132006 | Ad service interface error, please contact our dedicated operation team, interface error code: {PARAM}. | 投放服务接口错误，请联系我们的专业运营团队，接口错误码为{PARAM} |
| 132007 | Finance service interface error, please contact our dedicated operation team, interface error code: {PARAM}. | 财务服务接口错误，请联系我们的专业运营团队，接口错误码为{PARAM} |
| 132100 | Your request is missing a required parameter '{PARAM}'. | 您的请求缺失必填参数'{PARAM}' |
| 132101 | The type of parameter '{PARAM}' must be {PARAM}. | 参数'{PARAM}'类型应是{PARAM} |
| 132102 | Parameter '{PARAM}' is invalid or illegal. | 参数{PARAM}无效或不合法 |
| 132103 | Parameter '{PARAM}' cannot be an empty string. | 参数'{PARAM}'不能为空字符串 |
| 132104 | Parameter '{PARAM}' is illegal. | 参数'{PARAM}'非法，请确认是否符合该字段正则要求 |
| 132105 | Parameter '{PARAM}' must be one of '{PARAM}'. | 参数'{PARAM}'必须是'{PARAM}'之一 |
| 132106 | Parameter '{PARAM}' must be less than or equal to {PARAM}. | 参数'{PARAM}'数值必须小于或等于{PARAM} |
| 132107 | Parameter '{PARAM}' must be greater than or equal to {PARAM}. | 参数'{PARAM}'数值必须大于或等于{PARAM} |
| 132108 | Parameter '{PARAM}' has too many characters, the length of the value cannot be greater than the max length {PARAM}. | 参数'{PARAM}'字符数不能超出最大限制{PARAM} |
| 132109 | Parameter '{PARAM}' has too few characters, the length of the value cannot be less than the min length {PARAM}. | 参数'{PARAM}'字符数不能低于最小限制{PARAM} |
| 132110 | Parameter '{PARAM}' contains too many values, it must have a maximum of {PARAM} value(s). | 参数'{PARAM}'值太多，最多可包含{PARAM}个值 |
| 132111 | Parameter '{PARAM}' contains too few values, it must have a minimum of {PARAM} value(s). | 参数'{PARAM}'值太少，最少可包含{PARAM}个值 |
| 132112 | Parameter 'system_industry_id' is illegal, please refer to the appendix industry id. | system_industry_id 参数非法，请参照附录行业分类 |
| 132113 | Parameter 'area_code' is illegal, please refer to the appendix area code. | area_code 参数非法，请参照附录地域码 |
| 132114 | Parameter 'qualification_code' is illegal, please refer to the appendix qualification code. | qualification_code 参数非法，请参照附录资质类型 |
| 132115 | Parameter 'account_id' can't be empty when the API used by a business manager account. | BM 账户调该接口时，参数 account_id 不能为空 |
| 132116 | Normal pagination mode only supports querying the first {PARAM} data, please use cursor pagination mode instead. | 普通分页模式仅支持查询前{PARAM}条数据，请改用 search_after 模式 |
| 132117 | The expand field(s) '{PARAM}' of qualification code '{PARAM}' are not supported. | 资质编码'{PARAM}'不支持扩展字段'{PARAM}' |
| 132118 | The expand field(s) '{PARAM}' of qualification code '{PARAM}' are required and cannot be empty string. | 资质编码'{PARAM}'的扩展字段'{PARAM}'必填且不能为空字符串 |
| 132119 | The expand field '{PARAM}' of qualification code '{PARAM}' must be one of '{PARAM}'. | 资质编码'{PARAM}'的扩展字段'{PARAM}'必须是'{PARAM}'之一 |
| 132120 | The expand field '{PARAM}' of qualification code '{PARAM}' can contain up to {PARAM} characters. | 资质编码'{PARAM}'的扩展字段'{PARAM}'最多包含{PARAM}个字符 |
| 132300 | Your login information incomplete, please initiate authorization again. | 您的登陆态信息不完整，请重新发起授权 |
| 132301 | You are not permitted to do this request. | 您当前无权执行此请求 |
| 132306 | This API is only allowed to operate on {PARAM} accounts. | 此接口仅允许操作{PARAM}账号 |
| 132307 | The API is only available for {PARAM} tokens. | 此接口仅允许{PARAM}token 使用 |
| 132310 | The API is not allowed to use by wechat agency accounts. | 此接口不允许微信服务商账号使用 |
| 132311 | Your current role is not permitted to request this API. | 您当前的角色无权请求此接口 |
| 132312 | Agency operators are not permitted to operate this advertiser, please contact agency administrator. | 服务商运营人员无权操作此广告账号，请联系服务商管理员。 |
| 132313 | Agency operators are not permitted to operate this '{PARAM}', can only 'AD_QUALIFICATION' permitted, please contact agency administrator. | 服务商运营人员无权操作此'{PARAM}'，仅可操作'广告资质'，请联系服务商管理员。 |
| 132314 | Agency operators are not permitted to modify the parameter(s) '{PARAM}', please contact agency administrator. | 服务商运营人员无权修改参数'{PARAM}'，请联系服务商管理员。 |
| 132315 | Wechat account is not permitted to modify the parameter(s) '{PARAM}'. | 微信账号不允许修改参数'{PARAM}' |
| 132316 | The {PARAM} is invalid, it could have been deleted or never existed or is not accessible to you. | {PARAM}无效，可能已被删除、从未存在过或您无权访问 |
| 132317 | The image in '{PARAM}' does not exist or is not accessible to you. | {PARAM}中的图片不存在或您无权访问 |
| 132318 | This parameter is not permitted on this {PARAM}, the sign is {PARAM}. | 您没有权限操作指定参数，参数名：{PARAM}，对应的白名单标识：{PARAM}，请联系您的运营经理申请此白名单权限 |
| 132400 | Account {PARAM} does not exist. | 账户{PARAM}不存在 |
| 132401 | Account {PARAM} is not an advertiser. | 账户{PARAM}不是广告主 |
| 132402 | Account {PARAM} is not an agency. | 账户{PARAM}不是服务商 |
| 132403 | Account {PARAM0} is not a business manager. | 账户{PARAM0}不是 BM |
| 132404 | The advertiser {PARAM} is inactive. | 广告主账号{PARAM}当前不可用，请确认账号状态是否正常 |
| 132405 | The agency {PARAM} is inactive. | 服务商账号{PARAM}当前不可用，请确认账号状态是否正常 |
| 132406 | The business manager {PARAM} is inactive. | BM 账号{PARAM}当前不可用，请确认账号状态是否正常 |
| 132407 | Advertiser's corporation info is incomplete, please check ['corporation_name', 'certification_number']. | 账户主体信息不完整 |
| 132408 | Advertiser's corporation info is invalid, please check ['corporation_name', 'certification_number']. | 账户主体信息不合法 |
| 132409 | Advertiser's corporation info is not allowed to be modified. | 账户主体信息不允许变更 |
| 132410 | Failed to create advertiser, please contact our dedicated operation team. | 账号创建失败，请联系我们的技术支持团队处理 |
| 132411 | Operation failed due to closure policy. | 受封闭政策限制，操作失败。 |
| 132412 | The number of this customer's advertiser added today under this agency has reached the maximum limit. | 该服务商下该客户今日开户数量已达上限 |
| 132413 | You must delete all industry qualifications before you update the parameter 'system_industry_id'. | 在更新参数 system_industry_id 之前，必须删除所有行业资质 |
| 132414 | This 'system_industry_id' is not allowed to update for JD advertiser. | 京东敏感行业禁止修改到综合电商-综合电商行业 |
| 132415 | New version must be greater than the current version. | 版本必须比当前版本新，请更新后重试 |
| 132416 | Your request differs from a previous request with the same X-Request-Id. | 您的请求参数与之前具有相同 X-Request-Id 的请求不同，请更新参数后重试 |
| 132417 | You cannot modify the parameter(s) '{PARAM}' when advertiser's system_status is 'CUSTOMER_STATUS_NORMAL'. | 当广告账号的 system_status 为 CUSTOMER_STATUS_NORMAL 时，您无法修改参数'{PARAM}' |
| 132418 | The 'daily_budget' can only be set when the advertiser becomes active. | 只有生效帐户才能设置日预算 |
| 132419 | The 'daily_budget' was greater than the maximum allowed. | 日预算太大，请调整日预算大小 |
| 132420 | The 'daily_budget' was less than the minimum allowed. | 日预算太小，请调整日预算大小 |
| 132421 | The difference between 'daily_budget' and the current daily budget must be higher than {PARAM} cents. | 日预算每次更新必须大于{PARAM}分 |
| 132422 | You cannot provide different icp images for the same website domain. | 相同推广链接域名下不能提供不同的 icp 图片，请确认 icp 图片正确性 |
| 132423 | Due to the current corporation's presence on the Tencent advertising blacklist, new advertising accounts are not allowed, please consult our dedicated operation team for specific reasons. | 当前主体已被加入至腾讯广告黑名单，不允许新增广告账号，具体原因请咨询我们的专业运营团队 |
| 132424 | The number of accounts under the current entity has exceeded the maximum allowable limit, and no further account openings are supported. If you have any questions, please contact the Tencent Advertising Sales Operations Manager. | 当前主体下账户数已超过最大可开账户数限制，不支持继续开户。如有疑问，请联系腾讯广告销售运营经理。 |
| 132425 | Due to risk control requirements, the accounts that have been approved cannot modify system_industry_id. | 账户曾经审核通过，基于风控要求，开户行业不能修改 |
| 132426 | Only advertiser can modify parameter 'operation_mode', agency employees are not permitted. | 只有广告主可以发起修改参数'operation_mode'，代理商员工无权修改 |
| 132427 | You cannot modify the parameter 'operation_mode' for direct advertiser. | 直客账户不支持修改参数'operation_mode' |
| 132428 | You cannot modify the parameter 'operation_mode' when advertiser's system_status is not CUSTOMER_STATUS_NORMAL or balance is not zero. | 账户不是有效状态或资金余额不为 0，您无法修改参数'operation_mode' |
| 132501 | The number of your qualifications has reached the maximum limit '{PARAM}'. | 您的资质数量已达上限'{PARAM}' |
| 132502 | The number of your qualifications page has reached the maximum limit '{PARAM}'. | 您的资质页数已达上限'{PARAM}' |
| 132503 | The number of your qualifications page has not reached the minimum limit '{PARAM}'. | 您的资质页数未达下限'{PARAM}' |
| 132504 | The industry qualification cannot be created when the advertiser's system_status is CUSTOMER_STATUS_NORMAL. | 当广告帐号的 system_status 为 CUSTOMER_STATUS_NORMAL 时，无法创建行业资质 |
| 132505 | The parameter 'industry_id' is not allowed to be different from the advertiser's system_industry_id. | 参数 industry_id 需与开户时填写的 system_industry_id 相同 |
| 132506 | The parameter 'industry_id' of the industry qualification is not allowed to be different from other industry qualifications. | 不同行业资质的 industry_id 需一致 |
| 132507 | The qualification cannot be modified when the qualification_status is QUALIFICATION_STATUS_NORMAL. | 当 qualification_status 为 QUALIFICATION_STATUS_NORMAL 时，不允许修改资质 |
| 132508 | Batch deletion of qualifications failed, the following qualification ids do not belong to the current account: {PARAM}, please confirm and delete. | 资质批量删除失败，以下资质 id 不属于当前账户：{PARAM}，请确认后删除。 |
| 132509 | The qualification image is duplicated, and the qualification update failed. | 资质图片重复，资质更新失败。 |
| 132510 | The qualification image is empty | 资质图片为空，请上传图片 |
| 132511 | The qualification image is large than '{PARAM}' | 资质图片大小不可超过'{PARAM}' |
| 132512 | The qualification image format is invalid | 资质图片格式错误 |
| 132513 | The qualification image upload fail | 资质图片上传失败 |
| 132514 | The MD5 value specified in the request did not match the MD5 value calculated by the server. | 文件签名校验失败，请确认上传文件与对应 MD5 是否匹配 |
| 132515 | The qualification image validation fail. | 资质图片 MD5 校验错误 |
| 361005 | object not exist | 暂时无法获取所需信息，请稍后重试 |
| 1000000 | We are unable to process your request at this time. Please retry your request. If you encounter this error repeatedly, please contact our dedicated supporting team. | 系统繁忙，请稍后重试。如果您反复遇到此错误，请联系我们的技术支持团队。 |
| 1000001 | Params {PARAM} error, please check the request params. | 参数 {PARAM} 错误，请稍后重试。 |
| 1000002 | Network error, please check the request params. | 网络错误，请稍后重试。 |
| 1000003 | A system frequency limit has been exceeded. | 超过系统频率限制，请稍后再试。 |
| 1000009 | Your wechat official account does not have a profile image. | 您的微信公众号找不到头像图片。 |
| 1000012 | The resource owner is not permitted to perform this operation. | 资源所有者未允许执行此操作，请确认操作者角色与资源关系的正确性。 |
| 1000054 | MP account type is not allowed to call this interface. Please check if the token is correct. | MP 账户类型不能调用此接口 |
| 1000284 | Request has reached the system request limit per second. | 请求已达系统秒频次上限，请稍后重试 |
| 1050009 | The number of tasks created has reached the upper limit. Please retry after ten minutes. | 创建的任务数达到上限。请在十分钟后重试。 |
| 1340071 | get seq id error | 获取 SeqId 异常，请稍后几分钟重试 |
| 1670008 | The dynamic creative ad is retrying | 动态创意广告创建重试中 |
| 1670009 | The dynamic creative status is not support retry | 动态创意当前状态不支持重试 |
| 1700015 | Smart delivery platform should be the same in {PARAM} and {PARAM}. | 不支持在自动投放版项目中手动新建广告 |
| 1800113 | Account service is busy, please try again later. | 账户服务异常，请稍后重试 |
| 1800222 | bid_coefficient of siteset search_scene must be greater than or equal to 1. | 搜索场景的分版位出价系数不允许低于 1。 |
| 1800260 | This operation is not permitted on this myapp_auth_key. | 你所指定的 api 授权 id 没有权限拉取该应用下的渠道包，请检查该授权是否正确。 |
| 1800261 | The App is not found, please check whether the Android app is correct. | 请求指定的应用宝 APP id 不存在或对应应用已下架，请检查该应用宝 APP id 是否正确或对应应用状态是否正常。 |
| 1800266 | The pages is invalid, please use another page instead. | 当前广告上使用的落地页 id 不合法，请检查落地页 id 对应的落地页是否不存在或者已删除。 |
| 1800269 | Your request is missing a required parameter. The required parameter is \'{PARAM0}\'. | {PARAM1}必填，请传入必填参数 |
| 1800270 | current brand is not supported. | 您使用创意形式、版位和商品类型组合不支持当前品牌形象类型。 |
| 1800278 | Your request must include at least one of image_component_options,image3_component_options,video_component_options. | 请添加 1:1 单图、16:9 图片、16:9 视频其中任何一种素材。 |
| 1800286 | The LandingPage Component id :{PARAM} is invalid, please use another page instead. | 当前广告上使用的落地页组件 id :{PARAM} 不合法，请检查落地页 id 对应的落地页是否不存在或者已删除。 |
| 1800293 | Missing some of these parameters: 'page_spec/wechat_channels_spec/live_notice_id'. | 您的请求缺失部分参数: 'page_spec/wechat_channels_spec/live_notice_id'。 |
| 1800294 | Current creative_template_id not support The option SIMPLE_CANVAS_SUB_TYPE_DEFAULT of simple_canvas_sub_type. | 当前创意形式下简版原生页不支持使用默认模板类型，请修改 simple_canvas_sub_type 参数后重试请求。 |
| 1800295 | The param 'page_spec/page_id' is empty. | 请求参数中的落地页 id 参数为空，请传入合法的落地页 id 并重试请求。 |
| 1800296 | The params 'page_type' and 'link_page_type' in param 'landing_page_options' should be the same. | 使用动态创意配置多组落地页时，请求参数 'landing_page_options' 中的 'page_type' 和 'link_page_type' 需要使用相同的落地页类型。 |
| 1800297 | LANDING_PAGE_TYPE_UNKNOWN is not allowed to use when param 'promoted_object_type' is PROMOTED_OBJECT_TYPE_APP_ANDROID or PROMOTED_OBJECT_TYPE_APP_IOS. | 自定义落地页类型在推广安卓应用或者推广 IOS 应用时使用受限，请联系运营申请开通 'landing_page_free' 或者 'PAGE_TYPE_DEFAULT' 白名单后重试。 |
| 1800298 | Your request contains too many values for PAGE_TYPE_DEFAULT in param 'landing_page_options'. | 在动态创意配置多组落地页时，安卓默认落地页/App Store 下载页仅允许使用一组。 |
| 1800300 | brand is requied for siteset: {PARAM}. | 当前选择的版位: {PARAM}，品牌形象必填。 |
| 1800307 | The adgroup you specified does not exist or has been deleted. Please confirm whether this account has the permission to operate the adgroup and check the status of the adgroup. | 您指定的广告组不存在或者已删除，请确认该账号是否有操作广告组的权限和广告组状态。 |
| 1800313 | The param 'filtering' must include 'page_type' or 'platform' for current 'promoted_object_type'. | 当前推广目标类型下，必须在 filtering 请求参数中增加 page_type 或者 platform 筛选条件，请求修改请求参数后重试。 |
| 1800320 | Xijing page maker service is unable to process your request at this time. Please retry your request. | 落地页自动生成量级过大导致广告创建失败，请重试。若持续失败，请考虑减少创意数量后重试。 |
| 1800325 | Parameter \'{PARAM0}\' is not exist or has been deleted. | {PARAM1}不存在或者已删除，请更换后重试。 |
| 1800335 | This phone component doesn't exist, please check. | 当前广告上使用的电话组件 id :{PARAM} 不合法，请检查 id 对应的电话组件是否不存在或者已删除。 |
| 1800368 | dynamic_creative: {PARAM} not exits or already deleted. | 动态创意: {PARAM} 不存在或已删除。 |
| 1800385 | creatives of same adgroup exceed limit: {PARAM}. | 该广告下对应的创意已达到数量上限（{PARAM}个），请删除现有创意后再次创建。 |
| 1800387 | expand creative count will exceed limit. | 创意创建失败：创意素材组合数量将超过上限，请减少素材数量或减少开启创意数。 |
| 1800390 | The param 'filtering' must include 'page_type' field. | 'filtering' 请求参数中未使用 'page_type' 过滤字段，或者 'page_type' 过滤字段的值不合法，请修改 'filtering' 请求参数后重试请求。 |
| 1800400 | The '{PARAM}' of jump_info item is empty. | 跳转信息中的 '{PARAM}' 参数为空，请修改请求参数后重试。 |
| 1800426 | The modification of the adgroup for this data version is not allowed. | 该数据版本的广告不允许修改。 |
| 1800428 | There is a similar ad {PARAM0} to this ad. Please modify the relevant parameters and resubmit. | 该广告存在相似广告{PARAM0}，请修改相关参数重新提交 |
| 1800437 | button_text of all button_text components must be same | 行动按钮组件中的所有按钮文案必须保持一致 |
| 1800438 | The number of text link components can have two situations: Not used /Equals to with the number of landing page components. | 文字链组件数量可以有两种情况: 不使用/和落地页组件数量一致 |
| 1800439 | The number of action button components can have three situations: Not used / One without a landing page /Equals to the number of landing page components. | 行动按钮组件数量可以有三种情况: 不使用/一个不包含落地页/和落地页组件数量一致 |
| 1800441 | The dynamic_creative with dynamic_creative id: {PARAM} is duplicated. | 创意与创意 id: {PARAM} 重复，请修改。 |
| 1800531 | The {PARAM} cannot be empty when marketing_carrier_type of adgroup is MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION. | 当广告组的营销载体类型为视频号直播预约（MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION）时，请求参数中的 {PARAM} 字段不能为空。 |
| 1800533 | The params 'live_notice_id' in param 'landing_page_options' should be the same. | 使用动态创意配置多组落地页时，选择的直播预约信息需要保持一致。 |
| 1800545 | deletion of promoted product is not supported, please delete the adgroups first. | 不支持删除已推广的产品，请先删除推广该产品的广告。 |
| 1800564 | Invalid id of wechat mini game. Please double check the mini game id. | 微信小游戏 id 填写错误，请检查。 |
| 1800569 | Param 'componet_value' is repeated, existed component id: {PARAM}. | 已存在内容完全一致的组件，id: {PARAM}，请直接选择该组件进行投放。 |
| 1800579 | 未达到门槛，不允许访问报表数据 | 未达到门槛，不允许访问报表数据 |
| 1800581 | Creative component with related dynamic creative cannot be deleted. | 当前创意组件存在关联创意，请先将组件从对应创意中删除，才能执行删除操作；创意 id：{PARAM} |
| 1800596 | No matched wechat accounts found, please change your request then try again. | 未查询到相关视频号信息，请修改后重试。 |
| 1800599 | Wechat channels live reserve id cannot be empty. | 推广视频号直播预约时，视频号直播预约 id（page_spec/wechat_channels_spec/live_notice_id）不能为空，请修改请求参数后重试。 |
| 1800787 | AdGroup of automatic delivery accepts exactly one DynamicCreative. | 自动投放广告仅支持单创意投放 |
| 1800818 | Unauthenticated, currently not supported for use. Please go to ADQ to complete identity verification. | 未通过身份验证，暂不支持使用，请前往 ADQ 完成身份验证. |
| 1800850 | Specialized joint budget rule can not be used. Please choose other rules. | 自动投放专用联合预算，无法在非自动投放广告中使用，请选择其他预算组 |
| 1800880 | The current ad settings, {PARAM0} are all the same, but the number of ads with different {PARAM1} has reached the upper limit of {PARAM2} and cannot be created. Please modify/delete the existing ads. | 当前广告的设置内容，{PARAM0}均一致，而{PARAM1}不同的广告已达到{PARAM2}个上限，无法创建，请修改/删除已有广告。 |
| 1800884 | The number of your dynamic_creatives has reached the limit. | 创意的个数已达上限，您可通过删除无效的创意进行管理 |
| 1800888 | {PARAM}, unable to trace the component. | 以下资源，无法溯源组件：{PARAM}，请替换，如果是 1X1 图片，尽量使用 800*800 400kb 以下大小 |
| 1800899 | at least one of account_id or organization_id is set. | 推广帐号 id 或业务单元 id 至少被设置一项。 |
| 1800900 | account_id and organization_id cannot be set at the same time. | 推广账号 id 和业务单元 id 不能被同时设置。 |
| 1800925 | The number of your creatives has reached the limit. | 账户的创意数已达上限，请删除部分创意再新建 |
| 1800992 | The current ad's settings are similar to existing ads and cannot be created. Please modify the settings ({PARAM0}) or go to view existing ads ({PARAM1}) | 当前广告的设置内容和已有广告相似，无法创建，请修改设置（{PARAM0}）或 前往查看已有广告（{PARAM1}） |
| 1800993 | The industry you are in does not allow placing an app advertisement | 您所在的行业不允许投放应用 |
| 1801038 | The newly created {PARAM0} component has a high similarity with component id: {PARAM1}. It is recommended to increase creative diversity and consider using an existing component. Please make the necessary modifications and resubmit. | 当前新建{PARAM0}组件与组件 id：{PARAM1} 相似度较高，建议提升创意多样性，建议使用已有组件，请修改后重新提交 |
| 1801104 | The following custom_audience package have expired ({PARAM0}), please clear them in time. | 以下人群包已失效({PARAM0})，请及时清除。 |
| 1801105 | The old version of lookalike custom_audience package has been offline ({PARAM0}), please clear it in time. If you need to use custom_audience expansion capability, you can create a new custom_audience package to expand and bind advertising. | 旧版拓展人群包已下线({PARAM0})，请及时清除。如需要使用人群拓展能力，可新建人群包进行拓展后，绑定广告投放。 |
| 1801106 | Current conversion id does not contain link info. Please use a conversion with link information. | 当前转化 id 不包含链路信息，请使用带有链路信息的转化。 |
| 1801108 | The request parameters are invalid, please check the parameters. | 请求参数非法，请检查传参。 |
| 1801179 | Adjustment failed. Please check and increase your available balance and budget. | 调整不生效，系统将根据出价情况预估所需预算。为避免预算限制导致广告无法起量等问题，请您检查并提高可用余额与预算。 |
| 1801290 | Adjustment failed. Please check and increase your available balance and budget. | 调整不生效，系统将根据出价情况预估所需预算。为避免预算限制导致广告无法起量等问题，请您检查并提高可用余额与预算。 |
| 1801318 | This audit data {PARAM} has been cleaned. | 当前审核数据{PARAM}已被清理。 |
| 1801319 | In smart_delivery_scene_spec.conversion_id_list, one conversion_id with optimization_goal = {PARAM} is required. | 转化 id 选择有误，该场景需要选择目标为{PARAM}的转化 id。请先联系运营升级转化归因到最新版本，请参照：https://datanexus.qq.com/doc/develop/manual/new_conversion_switch |
| 1801320 | In smart_delivery_scene_spec.conversion_id_list, one conversion_id with optimization_goal = {PARAM} and deep_worth_optimization_goal = {PARAM} is required. | 转化 id 选择有误，该场景需要选择浅层为{PARAM}，深层为{PARAM}的转化 id。请先联系运营升级转化归因到最新版本，请参照：https://datanexus.qq.com/doc/develop/manual/new_conversion_switch |
| 1801327 | Concurrently adding components with the same param 'componet_value' is not allowed. | 不允许并发使用相同组件内容来创建组件。 |
| 1801330 | If smart_delivery_goal = {PARAM}, in smart_delivery_scene_spec.smart_delivery_goal_spec, only {PARAM} can be and should be used. | 当 smart_delivery_goal = {PARAM} 时，在 smart_delivery_scene_spec.smart_delivery_goal_spec 结构中，必须且仅可使用 {PARAM}。 |
| 1901403 | The parameter "material_derive_id" is required, when the "auto_derived_program_creative_switch" is true. | 自动衍生功能开启时，衍生 id（material_derive_id）必填。 |
| 1901408 | The operation-related capabilities are still open in grayscale. If you need to use, you can contact our operations staff. (whitelist: '{PARAM0}') | 该操作相关能力还在灰度开放中，如果您需要使用可以联系我们的运营人员（白名单：{PARAM1}） |
| 1901439 | Duplication of all image id in the component is not allowed in multi-picture components. Please modify and resubmit. | 多图组件内不允许组件内所有素材都重复，请修改后重新提交 |
| 1901440 | Video file is too large, limit is {PARAM}. | 视频文件大小超过了可以支持的上限 {PARAM}，请更新文件后再试 |
| 1901443 | The Harmony app does not support user action set | 鸿蒙应用投放不支持精准匹配归因，请修改为全网归因 |
| 1901444 | The selected dynamiccreative does not belong to the selected adgroup. | 所选动态创意不属于所选广告组，该动态创意对应的广告组 id 为{PARAM}。 |
| 1901445 | The number of assets that can be queried is limited to 20,000 at most. If you need to query more, please adjust the query conditions. | 查询资产数量受限，最多 20000 条。如需查询更多，请调整查询条件。 |
| 1901446 | You are not permitted to use SITE_SET_CHANNELS,SITE_SET_MOMENTS,SITE_SET_WECHAT by Insufficient margin | 当前账户保证金不足，不允许投放视频号、朋友圈、公众号版位 |
| 1901468 | The currently used {PARAM0}, component id: {PARAM1} is in the process of duplicate detection and cannot be associated with creatives temporarily. | 当前使用的{PARAM0},组件 id：{PARAM1} 正在重复度检测中，暂不可关联创意，请等待检测成功后重试 |
| 1901469 | The currently used {PARAM0}, component id: {PARAM1} failed the duplicate detection. To improve creative diversity, it is recommended to use existing components. Please modify and resubmit. | 当前使用的{PARAM0},组件 id：{PARAM1} 重复度检测不通过，为了提升创意多样性，建议使用已有组件，请修改后重新提交 |
| 1901493 | smart delivery report interface not support site_set data,please remove "site_set" from group_by fields | 智能投放报表不支持查询分版位数据，请在 groupby 中移除 site_set |
| 1901515 | Adjustment failed. Please check and increase your available balance and budget. | 调整不生效，系统将根据出价情况预估所需预算。为避免预算限制导致广告无法起量等问题，请您检查并提高可用余额与预算。 |
| 1901526 | The current user has not registered as an advertiser | 当前使用的 QQ 或者微信号未注册成为广告主 |
| 1901527 | In smart_delivery_scene_spec.conversion_id_list, one conversion_id with optimization_goal = {PARAM0} and deep_worth_optimization_goal = {PARAM1} is required. | 转化 id 选择有误，该场景需要选择浅层为{PARAM2}，深层为{PARAM3}的转化 id。请先联系运营升级转化归因到最新版本，请参照：https://datanexus.qq.com/doc/develop/manual/new_conversion_switch |
| 1901532 | 请求的参数包含不合法的值：{PARAM0} | 请求的参数包含不合法的值：{PARAM1} |
| 1901533 | deploy fail, reason: {PARAM0} | 部署失败, 原因为 {PARAM0} |
| 1901534 | dpadmin The action was unsuccessful，season：{PARAM0} | 操作失败：{PARAM0} |
| 1901535 | parameter expected_roi_mix_factor and GOAL_1DAY_PURCHASE_MONETIZATION_ROAS must use together. | “混变系数”和“首日混合变现 ROI ”优化目标需要同时使用。 |
| 1901536 | The expected_roi_mix_factor param is only applicable to version 3.0. | “混变系数”只适用于 3.0 版本。 |
| 1901537 | The optimization goal of using "GOAL_1DAY_PURCHASE_MONETIZATION_ROAS" must have {PARAM} whitelist permission. | 使用“首日混合变现 ROI ”优化目标必须拥有 {PARAM} 白名单权限。 |
| 1901538 | invalid product series name in mini-store component: must be 1-12 characters | 小店商品组件中商品系列名称不合法。 |
| 1901539 | Cannot enable both WeChat Shop and Quick Access components when more than 1 official account is configured | 小店商品组件与快捷组件组件同时开启时，官方账号仅支持配置 1 个 |
| 1901540 | The verification code generation failed. Please try again later | 服务器繁忙，生成验证码失败，请稍后再试 |
| 1901541 | The captcha is incorrect | 图片验证码不正确 |
| 1901542 | This phone has reached the limit for sending verification codes. Please try again the next day | 此手机发送检验码已经达到上限，请在 24 小时后重试 |
| 1901543 | Mobile phone number cannot be empty | 手机号码不能为空 |
| 1901546 | Failed to obtain {PARAM0} element information, failed element ids: {PARAM2} | 获取{PARAM1}素材信息失败，获取失败素材 id 列表：{PARAM2} |
| 1901548 | The universal_link_url is not registered, please contact the operations personnel to make an application for registration. | 输入的通用链接未备案，请联系您的运营人员申请备案。 |
| 1901551 | Adjustment failed. Please check and increase your available balance and budget. | 调整不生效，系统将根据出价情况预估所需预算。为避免预算限制导致广告无法起量等问题，请您检查并提高可用余额与预算。 |
| 1901552 | Failed to obtain daily account consumption. | 获取账号日消耗失败。 |
| 1901553 | Failed to obtain daily budget for account. | 获取账号日预算失败。 |
| 1901554 | Failed to obtain account balance. | 获取账号余额失败。 |
| 1901555 | Parameter "{PARAM0}" contains unsupported or deleted value: {PARAM2}. | 参数"{PARAM1}"包含不存在或已删除值：{PARAM2}。 |
| 1901556 | Page data is updating, please retry. | 落地页数据更新中，请重试 |
| 1901557 | Verification code mismatch | 验证码不匹配 |
| 1901558 | The maximum number of verifications within one hour is 10. Please try again later | 一小时内验证次数最多为 10 次，请稍后再试 |
| 1901559 | The verification code cannot be empty | 验证码不能为空 |
| 1901560 | Failed to get siteset list, please confirm input parameter is correct. If you have any questions, please contact our technical support team. | 获取版位列表失败，请检查入参是否正确。如有疑问，请联系我们技术支持团队。 |
| 1901561 | The parameter {PARAM0} is invalid. please check the parameter and retry. | 获取绑定广告预览受众列表请求参数错误，请检查参数后重试。 |
| 1901562 | The WeChat Channels account you are promoting has been deactivated or does not exist. | 您投放的视频号帐号已注销或者不存在 |
| 1901563 | The backups can not be empty, and must not be {PARAM0} . | 当前落地页组件的兜底落地页不能为空，并且不能使用 {PARAM1} 作为兜底落地页。 |
| 1901564 | developer_id and login_name can't be empty at the same time | developer_id 和 login_name 不能同时为空 |
| 1901565 | add app too more | 创建的应用超过上限 |
| 1901566 | add app name has been exist | 该应用名已存在 |
| 1901567 | app created error | 创建应用发生异常，请联系技术人员 |
| 1901568 | add app permission_scope is invalid | 创建应用填写的权限信息有误 |
| 1901572 | the mapping relationship of car brand and series and vendor is not incorrect | 汽车品牌、厂商、车系的映射关系不正确 |
| 1901573 | The ADX account can only create ADX advertisements. | adx 账号只能创建 adx 广告。 |
| 1901587 | Activation email has been sent | 激活邮件已发送 |
| 1901588 | This phone number has already registered a developer account | 该手机号已经注册开发者账户 |
| 1901589 | This email has already registered a developer account | 该邮箱已经注册开发者账户 |
| 1901590 | Enterprise name cannot be empty | 企业名称不能为空 |
| 1901591 | Email activated | 邮箱已激活 |
| 1901601 | Maximun wildcards count: {PARAM0}. | 最多支持使用{PARAM0}个通配符，请修改。 |
| 1901608 | The current account has reached the maximum limit ({PARAM}) of WeChat/QQ id for preview. | 当前广告账户已到达在线预览可配置微信号/qq 数量上限：'{PARAM}'个，无法配置新账号。 |
| 1901609 | Sorry, this adgroup has reached the maximum limit ({PARAM}) of WeChat/QQ id for preview. | 抱歉，当前广告绑定的预览人数已达上限（{PARAM}）。 |
| 1901610 | Failed to get user info, please check login information | 获取用户 id 错误，请检查登录信息。 |
| 1901611 | Developer name is empty or illegal | 开发者姓名为空或者非法 |
| 1901612 | Enterprise name is empty or illegal | 企业名称为空或者非法 |
| 1901613 | Developer has reached the limit for creating accounts | 开发者创建账户达到上限 |
| 1901614 | Developer identity error | 开发者身份错误 |
| 1901615 | Parameter {PARAM0} must be later than {PARAM1} | 参数{PARAM2}的值必须晚于{PARAM3} |
| 1901617 | The WeChat Channels account you are promoting has been deactivated or does not exist. | 您投放的视频号帐号已注销或者不存在 |
| 1901621 | Parameter "component_id_filtering_mode" cannot be used when organization id is specified. | 参数“被共享组件读取方式”不能在指定组织时使用，只能用于指定账户的场景 |
| 1901622 | Current wechat store product set is not exists | 当前微信小店商品集合不存在 |
| 1901625 | Current dynamic creative is locked by other expansion execution. | 当前创意已经在展开中，不允许重复执行展开操作。 |
| 1901626 | You have reached the limit for sending activation emails within one day. Please try again after 24 hours | 您在一天内发送激活邮件的次数已达到上限，请在 24 小时后重试 |
| 1901627 | MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT_SET don't support this site set: {PARAM} | 微信小店商品集合不支持使用此版位: {PARAM} |
| 1901628 | MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT_SET don't support auto site set. | 微信小店商品集合不支持使用自动版位。 |
| 1901629 | The current account belongs to the pharmaceutical industry which has limitations in wechat mini program id. | 基于广告链路交易生态治理，进一步保障维护小程序用户权益，降低客诉，腾讯广告将于 2025 年 3 月 31 日开始，除附件所列二级开户节点外，所有实物商品类小程序均需通过 SaaS 「融合小店」小程序或「微信小店」开展经营。如有任何疑问，请联系所属行业经理或渠道经理咨询，谢谢！详见：https://doc.weixin.qq.com/doc/w3_AMQAlgbdAFw6wcJllwTQcqW8GIh78?scode=AJEAIQdfAAoS8tAmXgAMQAlgbdAFw |
| 1901630 | The number of wildcards should be less than {PARAMS}. | 使用的通配符数量不得大于{PARAMS}个 |
| 1901631 | Marshal smartdelivery sceneconfig error | 投放目标七彩石配置信息解析错误，请稍后重试 |
| 1901633 | Only marketing_sub_goal = MARKETING_SUB_GOAL_MINI_GAME_NEW_CUSTOMER_GROWTH is available in smart_delivery_platform = SMART_DELIVERY_PLATFORM_EDITION_MINI_GAME_PROMOTION | 小游戏跑量场景，新建项目只支持“新客增长”二级营销目的 |
| 1901634 | The current ad settings are highly similar to the audience coverage of existing ads. It cannot be created. Please modify the targeting settings or go to view existing ads ({PARAM0}) | 当前广告的设置内容和已有广告人群覆盖高度相似，无法创建，请修改定向设置或 前往查看已有广告（{PARAM0}） |
| 1901635 | The parameter '{PARAM}' can only be used by adx | 字段 ‘{PARAM}’，仅 adx 程序化可入参 |
| 1901636 | Create user fail | 开发者创建失败 |
| 1901637 | The current asset is not in frozen status, can not unfrozen | 当前资产处于非冻结状态，无法解冻 |
| 1901639 | MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT_SET don't support this template id: {PARAM} | 微信小店商品集合不支持使用此创意形式 id: {PARAM} |
| 1901640 | MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT_SET don't support "enable_breakthrough_siteset" | 微信小店商品集合不支持使用版位扩量。 |
| 1901641 | when smart_delivery_goal = SMART_DELIVERY_GOAL_WECHAT_STORE_SINGLE_PRODUCT_ORDER, smart_delivery_scene_spec.marketing_asset_outer_spec and smart_delivery_scene_spec.marketing_carrier_type is required | 单品全域销售目标下，小店商品库 id、商品 id 等信息必填 |
| 1901655 | The activation email has been changed. Please resend the activation email | 待激活邮箱已变更，请重新发送激活邮件 |
| 1901656 | The activation email has expired. Please resend the activation email | 激活邮件已失效，请重新发送激活邮件 |
| 1901657 | The login number has already been registered as a developer and cannot be re registered | 登录号已经注册成为开发者，无法重复注册 |
| 1901658 | {PARAM0} is not available for delivery. If you have any questions, please feel free to contact your manager. Thank you for your understanding and support. | 目前不可投放{PARAM1}，如有问题请随时联系您的经理，感谢您的理解与支持 |
| 1901665 | In the current request, the "{PARAM0}" parameter must be present, and there can only be one value. | 当前请求中，"{PARAM1}"参数必须存在，且只能有一个值。 |
| 1901666 | The parameter value of parameter {PARAM0} is incorrect. | 参数{PARAM1}的传参值错误，错误原因：{PARAM2} |
| 1901667 | wechat shop brand can only use wechat shop product landing page. | 使用微信小店店铺品牌形象时，需要使用微信小店商品落地页，并需要使用相同小店 |
| 1901668 | The jumpinfo_account_id of component should be unique. | 一个组件需使用同一个客户归属的落地页资产 |
| 1901670 | The marketing component {PARAM0} does not support the landing page type {PARAM1} in the organizational id dimension. | 营销组件{PARAM2}不支持组织 id 维度的落地页类型{PARAM3}。 |
| 1901675 | text link not support organization landing page type {PARAM0}. | 文字链不支持{PARAM1}落地页类型的高维。 |
| 1901679 | tracking_url_info.tracking_url the number of groups exceeds the limit | 监测链接组数超过限制 |
| 1901682 | UpdateCoverImageData Failed. uid {PARAM0} adcreativeId {PARAM1} | 更新创意高斯取色图接口错误，请稍后重试。uid {PARAM0} adcreativeId {PARAM1} |
| 1901683 | this component is not available | 此组件不可用，请选择其他组件 |
| 1901685 | brand attr values is abnormal, please contact us | 品牌属性值获取异常，请联系我们 |
| 1901686 | marketing component {PARAM0} not support organization landing page type {PARAM1}. | 营销组件{PARAM2}不支持{PARAM3}落地页类型的高维。 |
| 1901687 | Failed to get the business unit to which the placement material label belongs, please try again later. | 获取投放素材标签所属业务单元失败，请稍后重试。 |
| 1901689 | The current bid mode does not match the placement group set. Please check your input | 当前计费类型与所选版位不匹配，请检查您的输入 |
| 1901690 | The profile of the organization does not support marketing asset , please adjust and try again. | 业务单元下的朋友圈跳转，不支持营销资产，请调整后重试。 |
| 1901692 | adx adgroup not support optimization goal {PARAM0}. | ADX 直投广告不支持优化目标{PARAM1}。 |
| 1901693 | adx adgroup not support search site set. | ADX 直投广告不支持搜索版位。 |
| 1901694 | adx adgroup not support bid mode {PARAM0}. | ADX 直投广告不支持计费方式{PARAM1}。 |
| 1901695 | "wechat_channels_medium_long_video_roll" is not available for delivery. If you have any questions, please feel free to contact your manager. Thank you for your understanding and support. | 目前不可投放中长视频贴片广告，如有问题请随时联系您的经理，感谢您的理解与支持 |
| 1901699 | The wechat channel name you entered does not exist or has been deactivated. Please verify that the video account name is entered correctly. | 你填写的视频号名称不存在或已注销，请确认视频号名称填写是否正确。 |
| 1901700 | SellStrategyId is invalid: not exist or not authored | 售卖策略无效，请前往投放端【工具】-【投放管理】-【短剧售卖策略】确认售卖策略是否存在 |
| 1901701 | current brand is not support by all siteset, please choose: {PARAM}. | 当前选择品牌形象类型不支持所有版位，请选择：{PARAM}。 |
| 1901702 | The account_id and organization_id cannot be set at the same time. | 广告账号 id 和业务单元 id 不能同时输入。 |
| 1901703 | The account_id and organization_id cannot be empty at the same time. | 广告帐号 id 和业务单元 id 不可同时为空。 |
| 1901710 | The word count of the application name should not exceed 30 characters | 应用名称字数不超过 30 字 |
| 1901711 | Please provide real application information. If interface testing is required, it can be debugged directly through the sandbox environment | 请填写真实的应用信息，如需进行接口测试，可直接通过沙箱环境进行调试 |
| 1901712 | Lack of application introduction related information | 缺少应用介绍相关信息 |
| 1901713 | App redirect url error | 回调地址错误 |
| 1901714 | The word count of the application introduction should not exceed 256 words | 应用介绍字数不超过 256 字 |
| 1901715 | Missing application callback address | 缺少应用回调地址 |
| 1901716 | The validity period of Refresh Token needs to be greater than that of Access Token | Refresh Token 有效时长需要大于 Access Token 有效时长 |
| 1901717 | The wechat channel account is in the process of a cancellation request and cannot be used for advertising | 该视频号处于注销申请中，无法创建广告。 |
| 1901718 | Private applications can only operate advertisers, agents, business managers, TDC, TONE corresponding to registered accounts | 私有应用仅可操作注册账号对应的广告主、代理商、商务管家、TDC、TONE、有数账号，无法进行第三方授权操作，若需要操作其他广告账号请申请第三方开发者应用 |
| 1901719 | creative recommend timeout, please try again later. {PARAM0}. | 创意建议获取超时，请稍后重试。{PARAM1} |
| 1901721 | Repeatedly set value "{PARAM0}" in the intelligent modeling service. | 后效建模服务重复设置值"{PARAM1}" |
| 1901723 | Only official landing pages that contain full-screen consultation components can set custom parameters | 仅包含全屏咨询组件的官方落地页才可以设置自定义参数，落地页 id：{PARAM} |
| 1901724 | The field '{PARAM0}' image is larger than {PARAM1} kb and the system compression failed. Please use image smaller than {PARAM1} kb. | 当前{PARAM2}大于 {PARAM1} KB，且系统压缩失败，请上传小于 {PARAM1} KB 的{PARAM2} |
| 1901725 | Param 'componet_value' is repeated, existed component id: {PARAM}.The number of shared accounts for this component id has reached the limit of 100. Please contact the business unit administrator for further action and processing | 已经存在内容完全一致的组件，id: {PARAM}，该组件 id 共享的账户已达 100 个上限，请联系业务单元管理员进行操作处理。 |
| 1901728 | expected_roi_mix_mode only can use for {PARAM0} industry. | 混变模式字段只能用于“{PARAM1}”行业。 |
| 1901731 | The wechat channels account query failed, please retry or contact the professional operation team to deal with it. | 广告专用视频号状态查询失败，请稍后重试或联系我们的专业运营团队处理。 |
| 1901732 | The wechat channels account cache setting failed, please contact the professional operation team to deal with it. | 广告专用视频号缓存设置失败，请稍后重试或联系我们的专业运营团队处理。 |
| 1901733 | The submitted component cannot match the creative format. Please check whether the {PARAM0} component's material {PARAM1} {PARAM2} meets the requirements or replace the component. | 提交的组件无法匹配到创意形式，请检查{PARAM0}组件中素材{PARAM1}的{PARAM2}是否符合要求或更换组件 |
| 1901734 | The current marketing target type does not support parameter: {PARAM0}. | 当前推广产品类型不支持参数：{PARAM0} |
| 1901736 | The wechat mini program id or wechat official account id is incorrect, please check. | 微信小程序 id 或微信公众号 id 填写错误，请检查 |
| 1901737 | Current conversion link is not valid, please use PROMOTED_ASSET_TYPE_WECHAT_STORE_PRODUCT as promoted_asset_type. | 该链路不可用，需要选择「小店商品库」作为推广产品，谢谢！ |
| 1901738 | Current conversion link is not valid, please use PROMOTED_ASSET_TYPE_MEDICINE_INDUSTRY_COMMERCIAL as promoted_asset_type. | 该链路不可用，需要选择「两品一械库」作为推广产品，谢谢！ |
| 1901739 | Current industry is not valid. | 开户行业非玩具-休闲玩具节点，请联系所属行业经理或渠道经理咨询，谢谢！ |
| 1901740 | Current conversion link is not valid, please use wechat_shop mini_program. | 该链路不可用，请选择 SaaS 「融合小店」小程序或「微信小店」，谢谢！ |
| 1901741 | The current account belongs to the pharmaceutical industry which has limitations in wechat mini program id. | 基于广告链路交易生态治理，进一步保障维护小程序用户权益，降低客诉，腾讯广告将于 2025 年 3 月 31 日开始，除附件所列二级开户节点外，所有实物商品类小程序均需通过 SaaS 「融合小店」小程序或「微信小店」开展经营。如有任何疑问，请联系所属行业经理或渠道经理咨询，谢谢！详见：https://doc.weixin.qq.com/doc/w3_AMQAlgbdAFw6wcJllwTQcqW8GIh78?scode=AJEAIQdfAAoS8tAmXgAMQAlgbdAFw |
| 1901742 | Current conversion link is not valid, please use SaaS mini_program. | 该链路不可用，请选择 SaaS 两品一械小程序，谢谢！ |
| 1901744 | dynamic creative not support aigc component | 普通创意不能使用 aigc 创意组件 |
| 1901746 | component generation type {PARAM} not support for dynamic creative | 动态创意存在不支持的组件类型{{PARAM}} |
| 1901747 | The API you requested is beyond the authorized scope. Please try again after activating the permission. | 您请求的接口超出了授权范围，请在开通权限后重试 |
| 1901748 | The adgroup_id is not the smart delivery normal adgroup_id | 广告 id 不是智投播放广告 id |
| 1901749 | Interest behavior will be deprecated soon, please use comprehensive interest instead. | 兴趣行为即将下线，请使用综合兴趣 |
| 1901750 | user_id is empty | 用户 id 不能为空 |
| 1901751 | business_id is empty | business_id 不能为空 |
| 1901752 | action button jump info not existed. | 卡片广告行动按钮无跳转信息（暂定） |
| 1901753 | smartdeliveryProject.marketing_target_aigc_option not is marketing_target_aigc | 智投项目未开启智投 AI 创意开关 |
| 1901754 | Dynamic Creative does not support this component's generation type. Unsupported component ids: {PARAM}. | 动态创意不支持该组件的生成类型，不支持的组件 id 列表：{PARAM}。 |
| 1901756 | Behavior interest has been deprecated, please use comprehensive interest instead. | 兴趣行为已下线，请使用综合兴趣 |
| 1901757 | ad30_content must use expected_roi_mix_mode. | 阅读平台与阅读生态行业必须使用混变模式。 |
| 1901760 | Private application cannot have type | 私有应用应该无应用类型 |
| 1901761 | Missing application type parameter | 缺少应用类型参数 |
| 1901762 | Illegal application type parameter | 应用类型参数非法 |
| 1901763 | Developer not login | 开发者未登录 |
| 1901764 | Developer not found | 未查询到开发者 |
| 1901767 | The current component {PARAM0}‘ s {PARAM1} is required . | 当前‘{PARAM2}’组件的‘{PARAM3}’必填。 |
| 1901771 | There are illegal values ​​ in the list of provinces, cities, districts and counties in the regional orientation. Please check the parameters. | 地域定向里的省市区县列表存在非法值，请检查参数 |
| 1901772 | Using OPTIMIZATIONGOAL_R3 requires binding to the ruyi brand. | 投放种草（R3）需绑定如翼品牌。 |
| 1901773 | Store flow ad only supports bid mode CPM. | 门店通广告仅支持 CPM 出价方式 |
| 1901774 | Store flow ad does not support {PARAM0}. | 门店通广告不支持{PARAM1} |
| 1901775 | Store flow ad does not support modifying {PARAM0}. | 门店通广告不支持修改{PARAM1} |
| 1901776 | The targeting "interested area" of store flow only supports adding but not deleting. Not allow to delete aoi id: {PARAM0}. | 门店通广告地标定向只支持新增不支持删减，无法删除地标定向 id：{PARAM0} |
| 1901777 | The store flow ad parameter value "{PARAM0}" is illegal, please check. | 门店通广告参数值“{PARAM1}”不合法，请检查 |
| 1901778 | Store flow ad does not support restart/suspension. | 门店通广告不支持重新启动/暂停 |
| 1901779 | optimization goal r3 only support smart bid type SMART_BID_TYPE_SYSTEMATIC. | 种草(R3)优化目标只支持系统自动出价。 |
| 1901780 | Current dynamic creative is locked by other expansion execution，user_status cannot be modified. | 当前创意正在展开执行中，不允许修改创意暂停状态，请稍后重试。 |
| 1901781 | The total budget and delivery time of the store flow ad do not meet the package requirements. | 门店通广告设置的广告总预算与投放时间不符合套餐要求 |
| 1901782 | The current activity page type/page type is not currently supported | 暂不支持当前的活动页类型/页面类型 |
| 1901783 | The current developer type does not support the creation of third-party applications | 当前开发者类型不支持创建三方应用 |
| 1901784 | The current developer type does not support creating private applications | 当前开发者类型不支持创建私有应用 |
| 1901785 | The material_package_id: {PARAM} > 0 does not support AIGC | 已开启投放素材标签：{PARAM}，不支持 AIGC |
| 1901787 | creative_template_id required when dynamic_creative_type is DYNAMIC_CREATIVE_TYPE_COMMON. | 指定创意形式(dynamic_creative_type= DYNAMIC_CREATIVE_TYPE_COMMON)时必填创意形式 id（creative_template_id）。 |
| 1901788 | Current Account is limit，can not create or open Ad. | 由于账户主体触达账户数限制，账户被设置为关停状态，不支持新建/开启广告（历史在线广告不受影响）。你可至工作台/服务商账户列表-账户启用列查看详情或联系管理员调整设置。如有疑问可咨询对接腾讯广告运营或查看详细文档 https://doc.weixin.qq.com/doc/w3_AJoAcQaaACgCN6k72fRxNR4Gk0zlq?scode=AJEAIQdfAAoWOLF6wLAJoAcQaaACg&isEnterEdit=1 |
| 1901789 | update configured_status is not support for store flow creative. | 创意启停操作失败：门店通广告暂不支持操作创意启动/暂停。 |
| 1901792 | Get SmartDeliveryProjects length not equal 1 | 获取到的智投项目数量不是一个 |
| 1901793 | Create Aigc Task response nil | 创建 AIGC 任务调用返回为空指针 |
| 1901797 | Failed to update the information of the wechat channels account. | 视频号账户信息(头像、名字、简介)暂时不支持更新，如有疑问请联系我们的专业运营团队。 |
| 1901798 | Video channels content not support wechat channels ad accounts. | 视频号主页视频推广暂不支持使用广告专用视频号。 |
| 1901799 | The limit of video channels component is {PARAM}. | 视频号主页视频组件最多可填写{PARAM}个。 |
| 1901800 | Store flow ad must set {PARAM0}. | 门店通广告必须设置{PARAM1} |
| 1901801 | The combination of the marketing object and optimization goal you choose does not exist, please try it out. | 您选择的营销对象和优化目标组合不存在，请重试 |
| 1901802 | The ad used the materialpackageid and cannot be delivered in this creative_template_id. It is recommended that you choose another creative_template_id for delivery or refrain from using the materialpackageid. | 该广告绑定了“投放素材标签”，不可投放该创意类型，建议您选择其他创意类型投放或不使用“投放素材标签” |
| 1901805 | Smart delivery parameter definitions must be same under the account | 同账户智投投放目标的原子能力不允许存在差异配置 |
| 1901806 | smart delivery ecology scene project limit | 账户的项目数已达上限，请删除部分项目再新建 |
| 1901807 | To get the list of currently available creative_template_id, please enter the adgroup_id or support_site_set. | 为获取当前可用的创意形式列表，请输入广告组 id 或投放版位集合。 |
| 1901808 | When using image_list component with jump_info , app_deep_link_spec's app_id and wechat_mini_program_spec's mini_program_id must be same. | 多图多链组件的跳转链路必须一致，且应用直达 app_id 和小程序 id 必须相同。 |
| 1901809 | When using image_list component with jump_info, page_type must be one of PAGE_TYPE_APP_DEEP_LINK or PAGE_TYPE_WECHAT_MINI_PROGRAM, and backups's page type must be one of PAGE_TYPE_WECHAT_MINI_PROGRAM or PAGE_TYPE_H5. | 多图多链组件仅支持微信小程序落地页或应用直达落地页类型，且应用直达仅能使用微信小程序或 H5 落地页类型兜底。 |
| 1901810 | Only SITE_SET_MOMENTS with image_list creative_template（641，642，643，2277）can use image_list component with jump_info. | 仅朋友圈版位指定多图创意形式（641，642，643，2277）时可以使用多图多链组件。 |
| 1901811 | image_list component with jump_info can have one image_list value and one main_jump_info value. | 多图多链组件时，跳转数量需要与多图数量一致，且仅能使用一个图集和一个主跳转组件。 |
| 1901812 | Wechat moments site set does not support: {PARAM0}. Please change the billing method and try again. | 朋友圈版位不支持{PARAM1}计费方式，请更换计费方式后投放 |
| 1901817 | Wechat channels live does not support CHOSEN_BUTTON. | 视频号直播暂不支持"选择按钮" |
| 1901818 | The feeds used in this creative does not match the selected wechat channels account. | 该创意使用的动态的视频号和选择视频号不匹配。 |
| 1901820 | The mini program does support {PARAM} | 小程序端仅支持{PARAM} |
| 1901822 | This interface only supports private application authorization | 该接口仅支持私有应用授权 |
| 1901823 | Unable to operate applications in abnormal status | 无法操作非正常状态的应用 |
| 1901824 | Account type parameter error | 账户类型参数错误 |
| 1901825 | You cannot operate apps that do not belong to you | 无法操作不属于您的应用 |
| 1901826 | Private apps cannot perform third-party authorization operations. If you need to operate other advertising accounts, please apply for a third-party developer app. | 私有应用无法进行第三方授权操作，若需要操作其他广告账号请申请第三方开发者应用 |
| 1901827 | only allow batch editing of projects with the same delivery target | 仅允许批量修改使用同样投放目标的项目 |
| 1901828 | Contract ad financial information already exists uid:{PARAM0} cid:{PARAM1} | 合约广告财务信息已存在 uid:{PARAM0} cid:{PARAM1} |
| 1901829 | The contract ad financial information id for updating does not exist or has been deleted uid:{PARAM0} cid:{PARAM1} | 更新合约广告财务信息 id 不存在或已删除 uid:{PARAM0} cid:{PARAM1} |
| 1901830 | The page type is not supported to organization, please use another page type or change to account | 该落地页暂不支持新建至业务单元，请更换其他落地页类型或更换为新建至账户 |
| 1901832 | marketing asset id source id incorrect {PARAM} | 营销资产对应来源 id 的格式不正确,营销资产 id 为{PARAM} |
| 1901833 | aigc get text incorrect | aigc 获取智投创意文案不正确 |
| 1901834 | aigc get images fail | AIGC 返回图片失败 |
| 1901835 | prodcut get primary img fail | 调用商品详情获取商品主图失败 |
| 1901836 | In smart_delivery_scene_spec.conversion_id_list, one conversion_id with optimization_goal = {PARAM0} and deep_worth_advanced_goal = {PARAM1} is required. | 转化 id 选择有误，该场景需要选择浅层为{PARAM2}，深层为辅助 ROI {PARAM3}的转化 id。请先联系运营升级转化归因到最新版本，请参照：https://datanexus.qq.com/doc/develop/manual/new_conversion_switch |
| 1901837 | Only smart delivery ad supports using optimization goal '{PARAM0}' | 仅智投广告支持使用优化目标"{PARAM1}" |
| 1901841 | The current store status is in an abnormal state such as review/closure, and assets cannot be created | 当前店铺状态处于审核/关闭等异常状态，不可创建资产 |
| 1901854 | The wechat chanenls feed is not supported. | 您选择的视频号动态的组件类型不符合要求 |
| 1901856 | Param exist param finder_object_visibility | 「保存至视频号」功能对应字段已下线。具体可查看 api 公告：https://developers.e.qq.com/v3.0/pages/news/info/20250625 |
| 1901858 | The contract ad financial information id for deleting does not exist or has been deleted uid:{PARAM0} cid:{PARAM1} | 删除合约广告财务信息 id 不存在或已删除 uid:{PARAM0} cid:{PARAM1} |
| 1901859 | No advertiser found for the given UID | uid 对应的广告主不存在 |
| 1901860 | Campaign does not exist | 推广计划不存在 |
| 1901861 | The current project settings are highly similar to the audience coverage of existing projects. It cannot be created. Please modify the targeting settings or go to view existing projects ({PARAM0}) | 当前项目的设置内容和已有项目人群覆盖高度相似，无法创建，请修改定向设置或前往查看已有项目（{PARAM0}） |
| 1901862 | The WeChat Store items for the current project are similar to those of existing projects. Modify the WeChat Store item ({PARAM0}). | 当前项目设置的微信小店商品和已有项目相似，请修改微信小店商品（{PARAM0}） |
| 1901863 | There is a similar project {PARAM0} to this project. Please modify the relevant parameters and resubmit. | 该项目存在相似项目{PARAM0}，请修改相关参数重新提交 |
| 1901867 | Dynamic label is offline. | 「动态标签」已下线 |
| 1901868 | The limit of wxgame playable page component is {PARAM}. | 小游戏试玩组件最多可填写{PARAM}个。 |
| 1901869 | The current creative does not support modification into a multi wxgame playable page. You can create a new creative to support multi wxgame playable page. | 当前创意不支持修改为多组小游戏试玩页，可创建新创意以支持多组小游戏试玩页面。 |
| 1901872 | The current creative not support multi wxgame playable page, please create a new creative to use multi wxgame playable page. | 当前创意不允许更新为多组小游戏试玩页，请创建新的创意投放多组小游戏试玩页。 |
| 1901873 | Daily budget cannot be lower than daily consumption | 日预算不能低于日消耗 |
| 1901874 | The current operation does not support WeChat | 当前操作不支持微信 |
| 1901875 | Developer information parameters are illegal | 开发者信息参数非法 |
| 1901876 | Creative AIGC data anomaly detected. Please regenerate the AIGC data. | 创意 AIGC 数据异常，请在重新生成 AIGC 数据 |
| 1901877 | This creative type does not support disassociation of components. | 该创意类型不支持取消关联组件 |
| 1901879 | This creative does not contain components and does not support component disassociation." | 创意不包含组件，不支持取消组件关联 |
| 1901880 | The creative does not contain components to be deleted. | 创意不包含待删除组件 |
| 1901882 | Creative component deletion failed. Please go to Creative Management to delete it manually. | 组件与该创意关联关系取消失败，请前往创意管理手动删除 |
| 1901883 | post object failed, reson: {PARAM0} | 视频号动态发表失败，原因：{PARAM0} |
| 1901884 | hourly report date_range param error, start_date must equal end_date | 小时报表参数 date_range 错误，支持查询跨度为 1 天，start_date 需要等于 end_date |
| 1901885 | refresh component[{PARAM0}] failed. | 组件[{PARAM1}] 刷库失败。 |
| 1901886 | wechat shop id should the same as promoted asset. | 推广产品上的小店 id 和落地页小店 id 不一致。 |
| 1901889 | After disassociating from the component, the creative cannot be played completely." | 与组件取消关联后，创意无法完整播放 |
| 1901890 | The account under investment does not belong to the current business unit. | 在投账户不属于当前业务单元 |
| 1901891 | Current Site don't support power preview. | 当前版位不支持在线预览。 |
| 1901893 | Please use the search_adgroups/update API to update search ads. | 搜索广告请使用 search_adgroups/update 接口更新 |
| 1901894 | dynamic_creative_type should be dynamic_creative_type_program when aigc option opened. | 智投 AIGC 开关开启后不支持指定创意形式。 |
| 1901896 | Asset Task Err,Err info is {PARAM} | 推出产品任务错误，错误任务信息为{PARAM}. |
| 1901899 | Developer type does not support modifying application type | 开发者类型不支持修改应用类型 |
| 1901900 | You currently do not have permission to operate: {PARAM0}. | 您当前没有权限操作：{PARAM1} |
| 1901901 | smart delivery ecology scene project limit | 创建失败，单账户下最多允许创建{PARAM}个项目，请酌情删除存量项目后重新创建 |
| 1901902 | Supply ability promoted product configuration parse error | 推广产品供应能力配置解析错误 |
| 1901903 | Supply ability promoted product type match error | 推广产品供应能力类型匹配失败 |
| 1901904 | The creative template is not support by site position limit when use video channels content. | 创意的「视频号主页视频」创意形式无法在本广告的版位定投场景下支持，请更换创意形式后重新提交。 |
| 1901905 | The number of your play adgroups has reached the limit {PARAM0} | 到达单账户播放广告数量上限，单账户仅允许创建{PARAM0}条播放广告 |
| 1901906 | Component searcher rainbow config parse error | 组件检索服务配置解析失败 |
| 1901907 | The smart_delivery_aigc_option params is no longer supported. Upgrade to ProjectCreative | 智投 AI 创意开关已不支持使用，可升级成自动创意 |
| 1901908 | The smart_delivery_aigc_option param is MARKETING_TARGET_AIGC not use ProjectCreative | 智投 AI 创意开关已开启，不支持使用自动创意 |
| 1901911 | ErrExpansionDataVersionNotMatch | ExpansionDataVersion 不匹配错误 |
| 1901913 | The wechat channels siteset not support multi wxgame playable page. | 视频号版位暂不支持多组小游戏试玩页。 |
| 1901914 | Read resources error | 读取素材异常 |
| 1901915 | Resource and Component type mismatch | 素材和组件类型不匹配 |
| 1901916 | Inventory trend retrieval service exception, err_code: {PARAM0}. | 获取库存趋势服务异常，错误码: {PARAM0}。 |
| 1901917 | This app prohibits front-end operations | 该应用禁止前台操作 |
| 1901918 | App id illegal | 应用参数非法 |
| 1901919 | Get Smart Dc Approval Status MultiAccount {PARAM0} Invalid | 获取智投创意状态参数{PARAM0}非法 |
| 1901920 | Date selected in the inventory trend tool is out of range. | 库存趋势工具选择日期超出范围。 |
| 1901921 | Abnormal account status of service provider | 服务商账户状态异常，请参考文档完成服务商注册 https://docs.qq.com/doc/p/f8fd1484da5315b604e7e033e36336bf0df8ff0e。如有任何疑问，请联系我们的专业运营团队，谢谢！ |
| 1901922 | Service provider public verification failed | 服务商对公验证状态未通过，请参考文档完成对公验证 https://docs.qq.com/doc/p/f8fd1484da5315b604e7e033e36336bf0df8ff0e |
| 1901923 | This interface only supports the editing of search ads. | 该接口仅支持搜索广告的编辑 |
| 1901924 | PC channels only supports creative_template_id: 721/720/618 | PC 视频号仅支持以下创意形式: 721/720/618 |
| 1901925 | Brand type must be WECHAT_CHANNELS_PROFILE for PC channels | PC 视频号定投场景，头像跳转类型仅支持跳转视频号 |
| 1901926 | Floating Zone is requied for PC channels | PC 视频号定投场景浮层卡片必填 |
| 1901927 | Floating Zone type must be IMAGE_TEXT for PC channels | PC 视频号定投场景浮层卡片类型必须是图文 |
| 1901928 | When advertising in the Moments section on the celebrity/brand aggregation page and choosing a celebrity type, you need to read and accept the agreement before using the first comment reply. | 朋友圈版位投放明星/品牌聚合页，并选择明星类型，需要阅读并同意协议才可使用第一条评论回复。 |
| 1901929 | Your image id or video id: {PARAM0} ​​ failed the duplication check ​​. To enhance creative diversity, please use non-repetitive images or videos. You can view detailed duplication check results in the ​​ Material Management List ​​. | 您使用的图片 id 或者视频 id：{PARAM0} 相似度检测不通过，为了提升创意多样性，建议使用不相似的图片或者视频，可以去素材管理列表查看具体相似度检测详情 |
| 1901930 | The shop product landingpage is not support current marketing target type. Please switch to another landing page. | 该广告场景下的微信小店功能已下线，请更换其他落地页。 |
| 1901931 | Automated creative industry configuration admission errors | 自动创意行业配置准入错误 |
| 1901933 | The industry value exploration function only supports auction display ads. | 高价值人群探索功能只支持竞价展示广告使用 |
| 1901935 | The promotional product ({PARAM}) has already created a project. Please delete the promotional product before creating it again. | 推广产品（{PARAM}）已经创建过项目，请删除该推广产品再继续创建 |
| 1901936 | Your WeChat id does not support to create the wechat channels account for ads. | 您使用的微信号暂不支持创建广告专用视频号，如有疑问请联系我们的专业运营团队。 |
| 1901937 | Inventory Trend Tool Data Anomaly | 库存趋势工具数据异常 |
| 1901938 | Unknown workflow type | 未知的工作流类型 |
| 1901939 | Workflow parameter is empty | 工作流参数为空 |
| 1901940 | The industry configuration access verification fails, please contact the administrator | 行业配置准入校验失败，请联系管理员 |
| 1901941 | Failed to start workflow | 启动工作流失败 |
| 1901946 | Dynamic creative expansion system error. | 创意展开执行过程中出现系统错误，请联系运营人员反馈。 |
| 1901951 | mpa adgroup not support search expansion. | 商品集合广告不支持搜索扩量，请排除搜索场景版位。 |
| 1901952 | The current number of wechat channels account authorizations has exceeded the limit. | 当前视频号授权数量已超出上限，如有疑问请咨询我们的专业运营团队。 |
| 1901953 | The current number of wechat official account authorizations has exceeded the limit. | 当前公众号授权数量已超出上限，如有疑问请咨询我们的专业运营团队。 |
| 1901954 | Failed to generate the authorized QR code for the wechat channels account, please try again later. | 视频号授权二维码生成失败，请稍后重试。 |
| 1901955 | If there are ads with similar bids for the same marketing content, please adjust your bid (see similar ads {PARAM0}); | 存在相同营销内容出价相近的广告，请调整出价（查看相似广告{PARAM0})； |
| 1901956 | The value is invalid for the associated parameter \'{PARAM}\'. | 参数{PARAM}无效，请确认是否符合该字段正则要求 |
| 1901959 | Audio not authorized, audio_id: '{PARAM}'. | 音频素材授权已过期，请选择其他音频素材，音频 id: '{PARAM}'。 |
| 1901960 | Audio not exists or deleted, image_id: '{PARAM}'. | 音频素材不存在或已删除，请检查音频素材状态，音频 id: '{PARAM}'。 |
| 1901961 | Current status does not support filtering, status name: '{PARAM}'. | 当前状态不支持筛选，不支持筛选状态为: '{PARAM}'。 |
| 1901963 | Adjustment failed. The auto acquisition budget is set too high. Please check and increase your available balance and budget. | 调整不生效，一键起量预算设置过高，请您检查并提高可用余额和预算 |
| 1901965 | Param smart_delivery_auto_creative.is_open unsupport true | 旧版自动创意开关不允许再开启 |
| 1901966 | This operation is not permitted on smartdelivery auto creative to {PARAM} | 自动创意供给策略 {PARAM} 无投放权限 |
| 1901967 | Your account has a lack of authorization for wecom. You need to supplement your authorization before you can continue to use the optimization goal "OPTIMIZATIONGOAL_PAGE_SCAN_CODE". | 您的账户存在企微授权缺失的情况，需要您补充授权后，才可继续投放优化目标为“加企业微信客服”的广告。 |
| 1901968 | Failed to obtain wecom status data. | 获取企微状态数据失败。 |
| 1901969 | The audio component is required for multi-image creative template when param site_set is only wechat channels. | 视频号版位投放多图创意形式时，音频组件必填。 |
| 1901980 | The advertiser account {PARAM} that you are currently bound to is not in a valid state. Please complete the advertising account registration process and relevant qualification certification before registering a developer account | 您当前使用的 QQ 或者微信号关联的直客广告账户不是有效状态，请先完成直客账户开通和主体认证认证后再次尝试 |
| 1901981 | The DCA ads did not have the DCA creative tags pre-bound. Please refer to the documentation https://doc.weixin.qq.com/doc/w3_AfQAdgYeABoDj1qmGlhTeyfQH9Ruy?scode=AJEAIQdfAAod1mld2OAYoAGwafAIQ | DCA 广告没有提前绑定 dca 素材标签，请参考文档进行调整 https://doc.weixin.qq.com/doc/w3_AfQAdgYeABoDj1qmGlhTeyfQH9Ruy?scode=AJEAIQdfAAod1mld2OAYoAGwafAIQ |
| 1901982 | The specified video does not exist or has been deleted. | 指定的视频号动态不存在或已删除。如果您反复遇到此错误，请联系我们的技术支持团队。 |
| 1901983 | Update advertising group budget task for the next day failed | 更新广告组次日预算任务失败 |
| 1901984 | Insufficient CustomerService role permissions for this user | 用户不满足 CS 侧角色权限 |
| 1901985 | Schedule parameter setting error | 定时参数设置错误 |
| 1901986 | Scheduled workflow does not exist | 定时工作流不存在 |
| 1901987 | The scheduled workflow parameter cannot be empty | 定时工作流参数不能为空 |
| 1901988 | The currently logged-in user does not have permission to perform operations on partial accounts {PARAM}. | 当前登录人没有权限操作部份账户 {PARAM} |
| 1901989 | Boost project synchronization failed, failure reason: {PARAM} | 优投项目同步失败，失败原因:{PARAM} |
| 1901991 | Store flow ad only supports {PARAM0}. | 门店通广告仅支持{PARAM1} |
| 1901993 | The store flow ad must {PARAM0}. | 门店通广告必须{PARAM1} |
| 1901994 | Process original_image of image_list fail. | 处理 1:1 图集原图失败。 |
| 1901995 | This message indicates that a required field (filtering.account_id) is missing or null in the request, and it must be provided with a valid value. | 请求中 filtering.account_id 操作账户 id 不能为空 |
| 1901996 | The creative component service is busy. Please go to the creative management page to operate. | 创意组件服务繁忙，请前往创意管理页面操作 |
| 1901997 | The data service is busy and the maximum valid data partition could not be queried. Please try again later or contact the relevant operations manager. | 数据服务繁忙，暂未查询到最大有效数据分区，请过段时间重试或者联系相关运营经理。 |
| 1901998 | Wechat shop activity info invalid,{PARAM0}. | 小店活动信息填写错误,{PARAM1}. |
| 1901999 | Query for high-volume components data failed. Please try again later or contact the relevant operations manager | 查询跑量好的组件数据失败，请过段时间后重试或者联系相关运营经理。 |
| 1902000 | Querying component performance data failed. Please try again later or contact the relevant operations manager. | 查询组件效果数据失败，请稍后重试或者联系相关运营经理。 |
| 1902001 | It is detected that you do not have the permission for this asset library category. If you have any promotion requests, please contact the industry operation application. | 检测到您没有该资产库类目权限，如有推广诉求请联系行业运营申请 |
| 1902002 | Official landing page's appid of the following components should be consistent with download component: {PARAM0} | 以下组件的官方落地页中 appid 需要与下载组件中一致：{PARAM0} |
| 1902003 | The currently used QQ or WeChat id has not completed the entity verification. Please complete the entity verification before retrying | 当前登录 QQ 或者微信关联的直客账户未完成主体认证，如目前无直客账户需先完成直客账户开通和主体认证后在重试 |
| 1902004 | Your Android game has not correctly integrated the Tencent Ads Android Game SDK and currently does not meet the access requirements for the selected optimization goal. We recommend collaborating with the Tencent Ads SDK to enhance data capabilities. | 您的安卓游戏尚未完成腾讯广告安卓游戏 SDK 的正确接入，暂不符合所选优化目标的准入要求。推荐您通过腾讯广告 SDK 进行数据能力共建，以达到广告模型系统预估要求。 |
| 1902005 | The status data for the Android application is empty. | 获取安卓应用状态数据为空。 |
| 1902006 | The Android app id 【{PARAM0}】 has been configured with a blacklist. | 安卓应用 id 【{PARAM1}】配置了黑名单。 |
| 1902007 | Parameter 'wechat_channels_account_name' must appear together with parameter 'scene' | 请先选择视频号使用场景，再使用视频号昵称作为过滤条件。 |
| 1902008 | The currently used QQ or WeChat account has not been registered as an agent | 当前使用的 QQ 或者微信号未注册成为代理商 |
| 1902010 | User or Account does not exist | 当前用户或账户不存在 |
| 1902011 | You cannot specify both wechat_channels_account_id and wechat_channels_account_name. Please remove the filter condition wechat_channels_account_name. | 指定视频号账号 id 筛选时无法同时使用视频号昵称筛选，请删除视频号昵称的筛选条件。 |
| 1902013 | We are unable to process your request at this time. Please retry your request. If you encounter this error repeatedly, please contact our dedicated operation team. | 系统繁忙，请稍后重试。如果您反复遇到此错误，请联系我们的技术支持团队。 |
| 1902018 | This API only supports WeChat Search contract ads. | 该接口仅支持微信搜一搜合约广告调用。 |
| 1902019 | Subscription task does not belong to this developer | 订阅任务不属于当前开发者 |
| 1902020 | The number of subscription tasks under a single application cannot exceed 10. | 单个应用下订阅任务不能超过 10 个。 |
| 1902021 | Subscription task does not belong to this developer | 当前订阅任务不属于当前开发者 |
| 1902022 | Subscription task has been deleted | 订阅任务已经被删除 |
| 1902027 | The params 'creative_components' and 'configured_status' cannot be updated at the same time. | 创意组件（creative_components）和创意暂停状态（configured_status）不能同时更新。 |
| 1902033 | SITE_SET_MOBILE_YYB cannot be used for multi site set. | 应用宝版位当前不支持在通投多个版位的场景下使用。 |
| 1902034 | The current account has reached the maximum bind fequency, in {PARAM0} to ({PARAM1}) . | 当前广告账户{PARAM0}内绑定的预览人数已达上限{PARAM1}，请稍后重试. |
| 1902038 | The Smart delivery scenario [{PARAM0}] does not allow the creation of nobid ads. | 智投场景【{PARAM0}】不允许创建系统自动出价广告。 |
| 1902039 | In the smart bidding scenario, creating system-automated bidding ads is not allowed when optimizing target combinations. | 优化目标组合在智投场景下不允许创建系统自动出价广告。 |
| 1902040 | Material library resize image failed. | 创意素材库服务请求异常，图片压缩失败。 |
| 1902041 | OptimizationGoalCombs length not equal comboConversionIds | 智投 OG 配置项与转化 id 数量不等 |
| 1902042 | TrackingServiceContent is empty | 转化归因信息不存在 |
| 1902043 | SmartDeliveryGoalOptions length not equal 1 | 指定投放目标的智投投放目标配置项不是一个 |
| 1902044 | SmartDeliveryGoal and ConversionSpec not match | 投放目标和转化归因信息不匹配 |
| 1902045 | Set ReqNestedValue not valid | 设置嵌套字段值失败 |
| 1902046 | invalid project ability type | 优化出价数据中项目能力类型类型非法 |
| 1902047 | OptimizationBidding is empty | 优化出价数据为空 |
| 1902048 | convert float value {PARAM0} targetType {PARAM1} | 转换浮点数，值：{PARAM0}，类型：{PARAM1} |
| 1902049 | unsupported type for {PARAM0}: {PARAM1} | 不支持转换参数{PARAM0}的类型：{PARAM1} |
| 1902050 | Tranalste params projectAbilitySpec not equal req | 翻译项目能力与投放目标，结果数据不一致 |
| 1902052 | Online Preview process error: {PARAM0}. | 在线预览处理错误：{PARAM1}。 |
| 1902053 | smart delivery nobid must have the privilege {PARAM0}. | 必须有{PARAM1}白名单权限，才能使用智投自动出价广告，请联系产品经理添加。 |
| 1902054 | Subscription task sub type is invalid | 任务子类型参数非法 |
| 1902055 | Subscription task report metrics is invalid | 账户报表数据订阅必须指定报表指标 |
| 1902056 | Subscription task metrics rule is invalid | 账户报表数据订阅必须指定有效的指标规则 |
| 1902057 | Callback secret is invaild | 回调密钥无效 |
| 1902058 | Real time task can not set push interval | 实时任务不能设置定时时间 |
| 1902059 | Push interval not within the specified time range | 推送间隔时间必须在 5-30 分钟范围内 |
| 1902060 | Task description too long | 订阅描述不能超过 30 个汉字 |
| 1902061 | Call back url is invalid | 回调 URL 格式无效 |
| 1902062 | App is not exist | 当前应用不存在 |
| 1902063 | App is not belong to developer | 应用不属于当前开发者 |
| 1902064 | Only add normal app status subscription task | 只允许创建应用中状态的订阅任务 |
| 1902065 | Subscription task id is invalid | 订阅任务参数不合法 |
| 1902067 | The wechat channels user page object does not support advertising | 视频号动态内容不支持投放广告 |
| 1902069 | OptimizationBidding Parameter '{PARAM}' is invalid. | 优化出价参数{PARAM}无效或者不合法，请检查该参数。 |
| 1902070 | token clientID and subscription task is not match | Token 所属应用和订阅任务不匹配，请使用订阅任务所属应用的 Token 操作 |
| 1902071 | the subscription tasks has reached max size | 订阅任务数量超过限制 |
| 1902073 | More than one product should be chosen for this smart delivery platform. | 该智投场景下必须选择大于一个商品。 |
| 1902076 | This account bound to wechat minigame ({PARAM}), only minigame marketing_target_type allowed. | 需使用该账户绑定的微信小游戏({PARAM})作为推广产品。 |
| 1902077 | Live boost scenario does not allow creating nobid ads.. | 直播加热场景不允许创建系统自动出价广告。 |
| 1902078 | When WeChat Shop is selected at ad level, the creative only supports shop homepage landing page. | 广告层级已选择微信小店，创意主跳转仅支持店铺主页落地页 |
| 1902079 | When WeChat Shop is not selected at ad level, the creative does not support shop homepage landing page. | 广告层级未选择微信小店，创意主跳转不支持店铺主页落地页 |
| 1902082 | Component uses conflicting MPA/DCA capabilities (word packs or wildcards), please check. | 组件使用了冲突的 MPA/DCA 能力（词包或通配符），请检查。 |
| 1902083 | SITE_SET_MOBILE_YYB not support with other placmene_group. | 应用宝版位不支持与其他版位一起投放。 |
| 1902084 | Singal parameter is empty | 工作流信号参数为空 |
| 1902085 | Failed to signal workflow | 发送工作流信号失败 |
| 1902087 | wechat_channels component is required for SITE_SET_CHANNELS. | 视频号版位必填视频号品牌形象（wechat_channels）。 |
| 1902093 | The application has invalid account package parameters | 应用开启账户包参数非法 |
| 1902094 | The account package is not enabled in the application | 应用未开启账户包 |
| 1902095 | The adjustment is not effective. The project budget exceeds the current available budget of the account. Please increase the balance or account budget. | 调整不生效，项目预算大于账户当前可用预算，请提高余额或账户预算。 |
| 1902096 | This account is an AIM Smart Delivery new version account and cannot perform this operation. Please use AIM Smart Delivery. | 当前账户为艾米智能投放新版本账户，无法做此操作，请使用艾米智能投放 |
| 1902098 | REPORT_YICHE_POLICY_LABELS is not currently open/supported. | REPORT_YICHE_POLICY_LABELS 数据类型暂未开放 |
| 1902102 | Subscription tasks can only be configured with app account package and cannot utilize the custom account | 该订阅任务选择应用账户包，无法使用自定义账户 |
| 1902108 | The wechat store status is opening | 该店铺开店审核中，如需投放，请前往微信小店完成开店审核后进行投放 |
| 1902109 | The wechat store status is close_finished | 该店铺已关闭，暂不可投放广告 |
| 1902110 | The wechat store status is closeing | 该店铺正在关闭中，暂不可投放 |
| 1902111 | The wechat store status is high price | 该店铺「部分商品价格高于同行 J，店铺购买体验欠佳，暂不支持投放厂告，请前往微信小店查看详情 |
| 1902112 | The wechat store status is low quality store | 该店铺「存在品质或其他质量体验风险 J，暂不支持投放广告，请前往「微信小店」关注后台消息或站内信了解详情 |
| 1902117 | New game inquiry result query failed | 询量结果查询失败。请联系对应销售经理，销售联系行业运营解决。 |
| 1902118 | Inquiry qv abnormal zero | 询量结果异常。请联系销售对接人，销售联系行业运营解决搜一搜品专行业运营对接人 https://doc.weixin.qq.com/sheet/e3_AfwAuQanAD0CNI1a1sed4TbeymUux |
| 1902119 | Inquiry failed. | 查询报价失败，请稍后再试。或联系销售对接人，销售联系行业运营解决 https://doc.weixin.qq.com/sheet/e3_AfwAuQanAD0CNI1a1sed4TbeymUux |
| 1902120 | force open {PARAM0} switch under current platform. | 当前智投场景下强制开启{PARAM1}策略开关。 |
| 1902121 | can not found project creative. | 找不到指定的智投自动创意。 |
| 1902124 | marketing asset id list can not empty. | 推广产品 id 列表不能为空。 |
| 1902130 | Your adgroup involves Enterprise WeChat friend addition. Please complete Enterprise WeChat filing before launching, otherwise ads cannot be created. | 您的投放涉及加企业微信好友链路，请在投放广告前完成企微信息备案，否则将无法创建加企业微信好友链路的广告 |
| 1902131 | You are not permitted to use the site set: {PARAM}. | 没有版位【{PARAM}】的投放权限，请联系您的运营经理申请白名单权限。 |
| 1902132 | verification req retry limit exceeded | 验真请求的重试次数达到上限 |
| 1902133 | verification record not found | 验真记录不存在 |
| 1902134 | This is an old auto acquisition request | 该一键起量请求已过期，系统已自动忽略。 |
| 1902135 | unsupport component sub type: {PARAM}. | 获取组件相似详情接口，暂不支持该组件子类型: {PARAM}。 |
| 1902136 | The currently component id: {PARAM} is in the process of similarity detection。 | 组件 {PARAM} 仍在相似度检测中。 |
| 1902138 | The selected wechat channel account is experiencing an abnormal status. Please go to the Creator Center on your mobile device and check the account status in the Account Diagnostics section. | 所选视频号状态异常，请前往手机端创作者中心-账号诊断查看视频号状态 |
| 1902139 | Wechat Channels and Video Channels Content can not use together when template id is 777. | 指定创意形式 777 时，视频号组件和视频号主页视频组件不可同时使用 |
| 1902140 | Video Channels Component can only use on templateid 777 | 视频号主页视频组件仅可用于 777 创意形式 |
| 1902141 | live_promoted_type only supported LIVE_PROMOTED_TYPE_SHORT_VIDEO when template id is 777 | 直播广告投放视频号主页视频推广时，仅支持短视频推广 |
| 1902143 | The param username of wechat_channels component_type is required. | 推广产品为视频号账号、视频号直播、视频号直播预约，投放版位包含视频号版位时，视频号（wechat_channels）组件中的视频号账号字段为必填。 |
| 1902144 | The selected promotion product type does not support multi-image multi-link due to risk control policy requirements. See: https://doc.weixin.qq.com/doc/w3_AfwAFAZPAF4CNtTH9ecE1SBuhBG7q?scode=AJEAIQdfAAo2ecATZJAfwAFAZPAF4 | 出于风控政策要求，您选择的推广产品类型不支持使用多图多链，详见：https://doc.weixin.qq.com/doc/w3_AfwAFAZPAF4CNtTH9ecE1SBuhBG7q?scode=AJEAIQdfAAo2ecATZJAfwAFAZPAF4 |
| 1902146 | Failed to check marketing spec for smart_delivery_platform. Please try again. | 智投该营销表达四元组不可用 |
| 1902147 | {PARAM} No value transfer is required without expressing an offer | {PARAM}不表达出价无需传值 |
| 1902149 | Modification failed. The maximum conversion bid project ensures budget utilization and explores maximum conversion volume. Frequent budget modifications will cause performance | 修改失败，最大转化出价项目保障预算使用率并探索最大转化量，频繁修改预算目标会带来效果波动，单日内修改次数不超过 2 次 |
| 1902154 | wechat shop access token lock failed. | 小店 access_token 获取锁失败 |
| 1902155 | Wechat Channels Account has reached its maximum authorized advertiser limit (1,000). Please revoke existing authorizations and try again. | 视频号已授权广告主达到上限（1000 个），请取消已有授权后重试 |
| 1902156 | this smart delivery scene not support aigc bind sku | 该场景下不支持 aigc 绑定 sku |
| 1902157 | Param "mini_game_tracking_parameter" of VIDEO_CHANNELS_CONTENT component is only support for MARKETING_TARGET_TYPE_WECHAT_MINI_GAME. | 视频号主页视频组件中的微信小游戏监控链接，仅在推广微信小游戏时允许使用。 |
| 1902158 | photo accounts url can not use. | 该内容所属公众号类型暂不支持推广 |
| 1902161 | The photo account is currently unavailable for authorization. | 贴图号暂不支持授权，如有疑问请咨询我们的专业运营团队。 |
| 1902162 | The number of wechat channels accounts for native feed management has exceeded the limit. A maximum of {PARAM} wechat channels accounts are supported. | 原生动态托管视频号账号数量超出限制，最多支持{PARAM}个视频号账号。 |
| 1902163 | Current smart delivery platform and industry do not support the use of native feed management. | 当前智投场景和行业不支持使用原生动态托管，如有疑问请咨询我们的专业运营团队。 |
| 1902164 | Native feed management only supports use in conjunction with the smart delivery history component reuse strategy. | 原生动态托管仅支持与全库智选历史素材复用策略共同使用 |
| 1902165 | The wechat channels account parameter must be used in conjunction with the native feed management supply strategy. | 原生动态托管视频号参数必须与原生动态供给策略同时使用 |
| 1902167 | The current smart delivery project does not have native feed management creative. Modifying the native feed management supply scope is not supported. | 当前智投项目下没有开启原生动态托管的创意，不支持修改原生动态托管供给范围 |
| 1902180 | invalid preference setting, please use muse_derive_switch_info/get to query supported preference settings. | 输入无效的偏好设置，请使用 muse_derive_switch_info/get 接口查询支持的偏好设置。 |
| 1902181 | Wechat channels ad account cannot be authoried to organization of different corporation. | 广告专用视频号不支持授权给跨主体的组织。 |
| 1902182 | Wechat channels ad account cannot be authoried to organization of group business unit. | 广告专用视频号不支持授权给集团类型业务单元组织。 |
| 1902183 | Wechat Channels Account has reached its maximum authorized organization limit (100). Please revoke existing authorizations and try again. | 视频号已授权组织（主体、业务单元）数量达到上限（100 个），请取消已有授权后重试。 |
| 1902184 | When the marketing target type is 'MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE', the native feed management only supports hosting the wechat channels account corresponding to the marketing target. | 推广内容资产类型为视频号直播时，原生动态托管只支持托管营销内容对应的直播间视频号 |
| 1902185 | site_set_channels not support the current type of floating_zone. | 视频号版位不支持当前类型的浮层卡片。 |
| 1902186 | Adjustment failed. Please check and increase your available balance and budget. | 调整不生效，系统将根据出价情况预估所需预算。为避免预算限制导致广告无法起量等问题，请您检查并提高可用余额与预算。 |
| 1902187 | This ad type doesn't support material label id. | 当前广告类型不支持使用素材标签，请删除后再次尝试。 |
| 1902190 | Priority Reach process error: {PARAM0}. | 优先触达处理错误：{PARAM1}。 |
| 1902194 | Please select the same Wechat Channels account . | 请选择同一个视频号进行推广。 |
| 1902195 | The marketing info of adgroup is offlined. | 广告投放的营销内容已下线，不允许添加新创意和编辑已有创意 |
| 1902196 | Floating Zone is requied for PC channels | PC 版位不指定创意形式场景下，使用 4:3 视频「浮层卡片必填」 |
| 1902197 | delivery scene parameter invalid,reason:{PARAM0} | 暂不支持此场景的快速创建, 原因：{PARAM1} |
| 1902205 | Planned sell-through rate = (locked budget of the ad group) / (available spendable budget of the ad group). The current planned sell-through rate exceeds {PARAM}, so click-guaranteed delivery cannot be launched. | 计划售卖率=该计划的锁量金额/该计划可消耗金额，当前计划售卖率高于{PARAM}，无法投放点击保 |
| 1902206 | The organization you specified is not allowed to be authorized. | 当前使用的组织不支持视频号授权，请联系运营人员开通权限。 |
| 1902207 | The partial account authorization functionality has been discontinued. If you have any questions or other requests, please reach out to the corresponding operations manager. | 部分账户授权功能已经下线，若有疑问或者其他诉求，请联系相关运营经理 |
| 1902211 | Failed to fetch sell-through rate | 获取售卖率失败 |
| 1902214 | A/B testing only supports smart delivery project. | A/B 实验仅支持智投项目设置 |
| 1902223 | The campaign-level budget for WeChat Channels placements must exceed {PARAM} × 10,000 CNY | 视频号版位的计划层级预算门槛须超过{PARAM}万元 |
| 1902225 | Today's quota({PARAM0}/ {PARAM1}) has been exhausted. | 今日额度({PARAM2}/ {PARAM3})已用完 |
| 1902226 | A task is currently in progress. Please try again later. | 有任务在进行中，请稍后再试 |
| 1902227 | Canvas fission failed. Please try again later. | 画布裂变能力，调用失败，请稍后再试 |
| 1902228 | Currently only single-image asset fission is supported. Please verify the asset type. | 目前仅支持单图素材的裂变，请确认资产类型 |
| 1902229 | Fail to fetch sequence_id. | 获取 Sequence 失败 |
| 1902230 | concurrent unbind component from the same creative is not allowed. | 不允许并发解绑同一个创意下的组件。 |
| 1902231 | The current project has been enrolled in an experiment. Modifying the experimental group is not supported. | 当前项目已加入实验，不支持修改实验分组 |
| 1902232 | Fail to create task | 创建任务失败，请稍后再试 |
| 1902233 | The number of projects with the same marketing content has reached the upper limit. Please delete paused or low-spending projects. | 已达到账户下相同营销内容可创建的项目数上限，请删除已暂停项目/低消耗项目。 |
| 1902234 | {PARAM0} component validate err: {PARAM1}. | {PARAM2} 组件校验失败：{PARAM3}。 |
| 1902235 | Unable to operate the account {PARAM}, no operational rights | 无法操作以下账户{PARAM}，无运营权 |
| 1902236 | The Source [AD_CREATIVE_AGGREGATION_PROMOTION] is only for internal use. | 聚合推广创意为系统自动创建，无需手动创建，source 字段不能指定为 AD_CREATIVE_AGGREGATION_PROMOTION。 |
| 1902237 | Starting from {PARAM}, creating legacy search ads is no longer supported. Please use the upgraded Search Ads in the 3.0 API to create new ads. | {PARAM}起，不再支持新建旧版搜索广告，请在 3.0API 端搜索广告升级版中新建广告进行投放 |
| 1902242 | The industry or entity corresponding to the UID does not have permission to advertise this product library. Please go to the product library to grant full industry or entity authorization. | uid 所在行业或主体暂无权限投放该商品库，请前往商品库进行全行业或主体授权 |
| 1902243 | The current component has been removed and cannot be readopted to the AIGC auto creative. | 当前组件已被移除，不支持重新添加到 AIGC 自动创意 |
| 1902244 | large offset is limited, please use cursor mode. | 深翻页查询已被限制，请使用游标分页查询 |

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
