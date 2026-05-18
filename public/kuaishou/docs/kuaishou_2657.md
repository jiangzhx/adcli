---
title: 线索crm信息查询接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2657&menuId=3382
doc_id: kuaishou_2657
source_id: kuaishou_2657
---
# 线索crm信息查询接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2657 |
| documentType | 2 |
| version | 0.0.8 |
| bizName | CRM |
| createTime | 2025-06-10T07:06:26.458Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/gemini/crm/clue/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID |  |
| channel_flag | Integer |  |  | 流量渠道:0其他 1快手 2极速版 |  |
| source_type | Integer |  |  | 组件类型:0未知 、1DSP 、2品牌广告 |  |
| start_time | String |  |  | 起始时间 |  |
| end_time | String |  |  | 结束时间 |  |
| user_name | String |  |  | 线索提交者姓名 |  |
| phone | String |  |  | 线索提交者手机号 |  |
| page_id_list | Long[] |  |  | 落地页 id |  |
| clue_tag_list | Integer[] |  |  | 线索标签 |  |
| phone_stat_list | Integer[] |  |  | 通话状态 |  |
| intention_list | Integer[] |  |  | 意向度 |  |
| page | Integer |  |  | 请求的页码 |  |
| page_size | Integer |  |  | 每页行数 |  |
| user_id | Long |  |  | 快手ID |  |

## 请求样例

### 请求样例 (jsonc)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v2/gemini/crm/clue/list' \
--header 'access-token: 2001269897942cf166354de6d5c444b6' \
--header 'Content-Type: application/json' \
--data-raw '{
 "start_time": "2020-08-12 14:36:11",
 "end_time": "2020-08-13 14:39:00",
 "advertiser_id": 20006545,
 "page": 1,
 "page_size": 20
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | Data |  |  | 数据 |  |
| - total_count | Integer |  |  | 数据的总行数 |  |
| - details | ClueCrmData |  |  | 线索信息详情 |  |
| - id | Long |  |  | 线索 id |  |
| - clue_tag | Integer |  |  | 线索标签 | 0：未标记；1：新增；2：回流；3：无效；4：参与返款；5：不参与返款; |
| - user_name | String |  |  | 线索提交者姓名 |  |
| - phone | String |  |  | 线索提交者手机号 |  |
| - phone_stat | Integer |  |  | 通话状态 | -1：错误；0：未标记；1：待联系，未拨打；101：已接通-有效通话；102：已接通-无效通话；103：未接通-拒接；104：未接通-无人接听；105：未接通-忙线；106：未接通-空号；107：未接通-停机；108：未接通；109：未接通-关机；110：主动挂断；201：已接通-有效通话；202：已接通-无效通话；203：未接通-拒接；204：未接通-无人接听；205：未接通-忙线；206：未接通-空号；207：未接通-停机；208：未接通；209：未接通-关机；210：主动挂断；213：未接通-呼叫拦截；214：未接通-黑名单；215：未接通-TP超时；216：未接通-TP异常；217：未接通-网络异常； |
| - intention_id | Integer |  |  | 清洗结果 | -1：全部；0：未标记；10：清洗中（机器人）；11：无意向（机器人）；12：待明确意向（机器人）；13：高意向（机器人）；14：建联失败；15：无效号码（机器人）； |
| - account_id | Long |  |  | 账户 id |  |
| - user_id | Long |  |  | 客服快手 id |  |
| - give_up_reason | String |  |  | 放弃原因 |  |
| - source_type | Integer |  |  | 组件类型 | 1：表单；2：智能电话 3：咨询页 |
| - page_id | Long |  |  | 落地页 id |  |
| - page_name | String |  |  | 落地页名称 |  |
| - source_url | String |  |  | 落地页 url |  |
| - create_time | String |  |  | 收集时间 | 格式：yyyy-MM-dd hh:MM:ss |
| - update_time | String |  |  | 更新时间 |  |
| - sea_type | Integer |  |  | 线索所在范围 | 1：公海；2：私海 |
| - biz_id | Integer |  |  | 业务来源ID | 1003:建站；1005:线索通；1007:投放平台；1008:联盟广告；1010:虚拟商品推广；1011:快聊；1021:快说车小程序；1023:服务号； |
| - channel_flag | Integer |  |  | 流量渠道 | 1：广告流量；2：其他 |
| - schedule | Schedule |  |  | 线索进度 |  |
| - schedule_id | Long |  |  | 线索进度 id | 0：待联系；1：电话已建联；2：高意向；3：高意向；4：成交；5：待持续跟进；6：用户开口聊天；7：已拨打；8：无意向；9：交定金；10：删除；11：到店； |
| - schedule_desc | String |  |  | 线索进度名称 |  |
| - clue_source | ClueSource |  |  | 线索来源信息 |  |
| - page_id | Long |  |  | 落地页id |  |
| - page_name | String |  |  | 页面名 |  |
| - callback | String |  |  | callback 串 |  |
| - dsp_campaign_id | Long |  |  | long广告计划 id |  |
| - dsp_unit_id | Long |  |  | 广告组 id |  |
| - dsp_creative_id | Long |  |  | 广告创意 id |  |
| - form | Form |  |  | 所属表单信息 |  |
| - id | Long |  |  | 表单 id |  |
| - name | String |  |  | 表单名称 |  |
| - details | Detail |  |  | 线索记录详情信息 |  |
| - key | String |  |  | 表单项的 label |  |
| - value | String |  |  | 收集的线索数据 |  |
| - comp_type | String |  |  | 表单项类型 |  |
| - custom_id | String |  |  | 用户自定义索引 |  |
| - icc_info | IccInfo |  |  | 智能电话线索明细数据 |  |
| - phone_name | String |  |  | 客服名称 |  |
| - to_phone | String |  |  | 企业号码 |  |
| - from_phone | String |  |  | 用户电话 |  |
| - call_start_time | String |  |  | 通话开始时间 |  |
| - call_answer_time | String |  |  | 通话应答时间 |  |
| - call_finish_time | String |  |  | 通话结束时间 |  |
| - call_duration | Integer |  |  | 通话时长 |  |
| - clue_stat | Integer |  |  | 线索意向度 |  |
| - child_intention_tag | ChildIntentionTag |  | - | 线索标签信息 |  |
| - child_intention_id | Long |  | - | 线索标签 id | 1：高意向度-高意愿；2：高意向度-有明确需求；3：潜在客户类标签-有购买力；4：潜在客户类标签-多次建联；5：无意向类标签-无购买能力；6：无意向类标签-非本人提交；7：无意向类标签-非本人接电话；8：无意向类标签-无购买意愿；9：无意向类标签-业务范围不符；11：无意向类标签-年龄不符；12：无意向类标签-地域不符；13：无意向类标签-多次未建联；14：成交付费 |
| - child_intention_desc | String |  | - | 线索标签名称 |  |
| - biz_source | String |  |  | 业务来源 |  |
| - campaign_type | String |  |  | 营销目标 |  |
| - collect_account_id | Long |  |  | 线索收集账户ID |  |
| - attr_clue_account_id | Long |  |  | 广告投放账户ID |  |
| - submit_user_id | Long |  | - | 线索提交人快手ID | 仅企微线索该字段有值，若用户未登录快手APP，该字段为0 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "total_count": 4,
        "details": [
            {
                "id": 197451604008536386,
                "clue_tag": 0,
                "user_name": "旧表单打点1",
                "phone": "15584418917",
                "phone_stat": 0,
                "intention_id": 0,
                "account_id": 20006545,
                "user_id": 2296341624,
                "give_up_reason": "",
                "source_type": 1,
                "page_id": 153644601223348224,
                "page_name": "王测试表单打点1",
                "source_url": "https://ad-lp.test.gifshow.com/rest/n/lp/page/getHtml?hyId=landingPg&pageId=1536446012233482",
                "create_time": "2021-03-07 16:10:49",
                "update_time": "2021-03-11 17:41:23",
                "sea_type": 2,
                "biz_id": 1003,
                "channel_flag": 1,
                "child_intention_tag": [],
                "schedule": {
                    "schedule_id": 0,
                    "schedule_desc": "新线索"
                },
                "clue_source": {
                    "page_id": 153644601223348224,
                    "page_name": "王测试表单打点1",
                    "callback": "10098",
                    "dsp_campaign_id": 0,
                    "dsp_unit_id": 0,
                    "dsp_creative_id": 0
                },
                "form": {
                    "id": 145284513928645901,
                    "name": "表单10-14 17:16"
                },
                "details": [
                    {
                        "key": "姓名",
                        "value": "旧表单打点1",
                        "custom_id": "",
                        "comp_type": "姓名"
                    },
                    {
                        "key": "电话",
                        "value": "15584418917",
                        "custom_id": "",
                        "comp_type": "电话"
                    },
                    {
                        "key": "下拉单选",
                        "value": "[\"宝马2系\",\"河南\",\"郑州\",\"二七区\",\"哈登店\"]",
                        "custom_id": "[\"002\",\"003\",\"005\",\"010\",\"11010\"]",
                        "comp_type": "级联单选"
                    }
                ],
                "icc_info": {
                    "phone_name": "",
                    "to_phone": "",
                    "from_phone": "",
                    "call_start_time": null,
                    "call_answer_time": null,
                    "call_finish_time": null,
                    "call_duration": 0,
                    "call_stat": 0
                }
                "store_info": {
                    "store_name": "",
                    "store_number": "",
                    "city": "",
                    "province": ""
                },
                "pay_info": {
                    "pay_order_no": "",
                    "pay_order_state_des": "",
                    "pay_order_state": 0
                },
                "callback_user_id": 0,
                "wechat": "",
                "state": "",
                "photo_id": 0,
                "video_name": "",
                "tag_info": [],
                "already_delete": false,
                "del_from_enterprise_wechat": false
            }
        ]
    },
    "request_id": "8bf05339877440c29fed55fca7fae9d4"
}
```

## 原始内容

```
线索crm信息查询接口 /rest/openapi/v2/gemini/crm/clue/list curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v2/gemini/crm/clue/list' \ --header 'access-token: 2001269897942cf166354de6d5c444b6' \ --header 'Content-Type: application/json' \ --data-raw '{ "start_time": "2020-08-12 14:36:11", "end_time": "2020-08-13 14:39:00", "advertiser_id": 20006545, "page": 1, "page_size": 20 } { "code": 0, "message": "OK", "data": { "total_count": 4, "details": [ { "id": 197451604008536386, "clue_tag": 0, "user_name": "旧表单打点1", "phone": "15584418917", "phone_stat": 0, "intention_id": 0, "account_id": 20006545, "user_id": 2296341624, "give_up_reason": "", "source_type": 1, "page_id": 153644601223348224, "page_name": "王测试表单打点1", "source_url": "https://ad-lp.test.gifshow.com/rest/n/lp/page/getHtml?hyId=landingPg&pageId=1536446012233482", "create_time": "2021-03-07 16:10:49", "update_time": "2021-03-11 17:41:23", "sea_type": 2, "biz_id": 1003, "channel_flag": 1, "child_intention_tag": [], "schedule": { "schedule_id": 0, "schedule_desc": "新线索" }, "clue_source": { "page_id": 153644601223348224, "page_name": "王测试表单打点1", "callback": "10098", "dsp_campaign_id": 0, "dsp_unit_id": 0, "dsp_creative_id": 0 }, "form": { "id": 145284513928645901, "name": "表单10-14 17:16" }, "details": [ { "key": "姓名", "value": "旧表单打点1", "custom_id": "", "comp_type": "姓名" }, { "key": "电话", "value": "15584418917", "custom_id": "", "comp_type": "电话" }, { "key": "下拉单选", "value": "[\"宝马2系\",\"河南\",\"郑州\",\"二七区\",\"哈登店\"]", "custom_id": "[\"002\",\"003\",\"005\",\"010\",\"11010\"]", "comp_type": "级联单选" } ], "icc_info": { "phone_name": "", "to_phone": "", "from_phone": "", "call_start_time": null, "call_answer_time": null, "call_finish_time": null, "call_duration": 0, "call_stat": 0 } "store_info": { "store_name": "", "store_number": "", "city": "", "province": "" }, "pay_info": { "pay_order_no": "", "pay_order_state_des": "", "pay_order_state": 0 }, "callback_user_id": 0, "wechat": "", "state": "", "photo_id": 0, "video_name": "", "tag_info": [], "already_delete": false, "del_from_enterprise_wechat": false } ] }, "request_id": "8bf05339877440c29fed55fca7fae9d4" } advertiser_id Long 广告主 ID channel_flag Integer 流量渠道:0其他 1快手 2极速版 source_type Integer 组件类型:0未知 、1DSP 、2品牌广告 start_time String 起始时间 end_time String 结束时间 user_name String 线索提交者姓名 phone String 线索提交者手机号 page_id_list Long[] 落地页 id clue_tag_list Integer[] 线索标签 phone_stat_list Integer[] 通话状态 intention_list Integer[] 意向度 page Integer 请求的页码 page_size Integer 每页行数 user_id Long 快手ID code Integer 返回码 message String 返回信息 data Data 数据 total_count Integer 数据的总行数 details ClueCrmData 线索信息详情 id Long 线索 id clue_tag Integer 线索标签 user_name String 线索提交者姓名 phone String 线索提交者手机号 phone_stat Integer 通话状态 intention_id Integer 清洗结果 account_id Long 账户 id user_id Long 客服快手 id give_up_reason String 放弃原因 source_type Integer 组件类型 page_id Long 落地页 id page_name String 落地页名称 source_url String 落地页 url create_time String 收集时间 update_time String 更新时间 sea_type Integer 线索所在范围 biz_id Integer 业务来源ID channel_flag Integer 流量渠道 schedule Schedule 线索进度 schedule_id Long 线索进度 id schedule_desc String 线索进度名称 clue_source ClueSource 线索来源信息 page_id Long 落地页id page_name String 页面名 callback String callback 串 dsp_campaign_id Long long广告计划 id dsp_unit_id Long 广告组 id dsp_creative_id Long 广告创意 id form Form 所属表单信息 id Long 表单 id name String 表单名称 details Detail 线索记录详情信息 key String 表单项的 label value String 收集的线索数据 comp_type String 表单项类型 custom_id String 用户自定义索引 icc_info IccInfo 智能电话线索明细数据 phone_name String 客服名称 to_phone String 企业号码 from_phone String 用户电话 call_start_time String 通话开始时间 call_answer_time String 通话应答时间 call_finish_time String 通话结束时间 call_duration Integer 通话时长 clue_stat Integer 线索意向度 child_intention_tag ChildIntentionTag 线索标签信息 child_intention_id Long 线索标签 id child_intention_desc String 线索标签名称 biz_source String 业务来源 campaign_type String 营销目标 collect_account_id Long 线索收集账户ID attr_clue_account_id Long 广告投放账户ID
```
