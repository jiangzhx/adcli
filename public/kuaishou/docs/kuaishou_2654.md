---
title: crm赔付线索回传接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2654&menuId=3539
doc_id: kuaishou_2654
source_id: kuaishou_2654
---
# crm赔付线索回传接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2654 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | CRM |
| createTime | 2024-07-04T12:26:09.700Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/crm/clue/payForCallback |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123456 | 广告主 | 广告主账户id |
| clue_id | Long | 是 | 8855247785963210001140 | 线索ID | 线索ID，快手魔力建站收集线索回传快手生成的线索ID，客户自建站线索回传客户生成的线索ID |
| call_back | String | 是 | xxxxxxxxxxxxxxxxxxxxxxxxxxxx | 回传广告投放快手提供的callbak信息 | 回传广告投放快手提供的callbak信息，部分赔付场景该字段必传，使用快手魔力建站不用传 |
| form_user_name | String |  | 李先生 | 用户实际输入姓名名称 | 用户实际输入姓名名称，客户自建站时如果有需要传 |
| form_user_phone | String | 是 | 13800138000 | 外呼必要的用户手机号码 | 中国大陆+86手机号，无需传+86 |
| call_status | Integer | 是 | 104 | 参与线索赔付必要字段，确保客户已外呼 | 103：未接通-拒接 104：未接通-无人接听 105：未接通-忙线 106：未接通-空号 107：未接通-停机 108：未接通 109：未接通-关机 |
| call_status_generate_time | Long | 是 | 1684667359000 | 客户回传外呼状态产生的具体外呼时间 | 产生外呼时毫秒级时间戳 |
| lp_url | String |  | https://xxxxxxxxxxx | 完整落地页url，http开头 | 客户自建站投放落地页url，非快手魔力建站投放时必传 |
| clue_submit_time | Long | 是 | 1684570214000 | 线索提交时间 | 线索提交时产生的毫秒级时间戳 |
| source_site | Integer | 是 | 0 | 来源标识 | 快手建站0 自建站1 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | AdMarketIdResult |  |  | 线索id |  |
| - id | Long |  | 1234566 | 线索id |  |
