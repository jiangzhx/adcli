---
title: 企微加粉后链路数据回传
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3169&menuId=3922
doc_id: kuaishou_3169
source_id: kuaishou_3169
---
# 企微加粉后链路数据回传

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3169 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 老铁线索通 |
| createTime | 2024-11-18T06:53:59.400Z |

## 概述

企微加粉后链路数据回传

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/clue_laotie/v1/wechat/transformedData/passBack |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 900015265 | 广告主ID |  |
| corp_name | String | 是 | 九元堂文化 | 企微公司简称 | 从磁力追踪-微信-企微加粉页面查看 |
| event_type | Integer | 是 | 1 | 事件类型 | 1001 : 有效-用户确认意向; 1002 : 意向确认; 1003 : 进群; 1004 : 注册; 1005 : 用户无意向; 1006 : 付费; 1007 : 到课; 1008 : 完课; 1009 : 购买小课包; 1010 : 正价课购买; 1011 : 电话建联成功; 1012 : 电话建联失败; 1013 : 成交; 1014 : 案件金额; 1015 : 下定金; 1016 : 到店; 1017 : 预约; |
| corp_id | String | 是 | wpIcKmHwAASWbSXVD-c0asgmAxSK-BgA | 企微ID | 从磁力追踪-微信-企微加粉页面查看 |
| state | String | 是 | KSAD_6e639f09cf1b39c2fdd061ca01abd11d | 归因参数 | 企业微信添加好友中state参数 |
| service_provider_code | Integer | 是 | 1 | 服务商名称 | 联系运营分配 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 0 - success 160001 - 系统错误 162716 - 服务商code不匹配：服务商code错误，请先联系运营报备 162717 - 事件不匹配：事件code错误 162718 - state不匹配：state参数错误，请核实是否快手流量 |  |
| data | AdLaotieWechatPassBackDataRes |  |  | res |  |
| - res_msg | String |  | OK | OK |  |
| message | String |  | OK | OK |  |

## 原始内容

```
企微加粉后链路数据回传 /rest/openapi/gw/clue_laotie/v1/wechat/transformedData/passBack advertiser_id Long 广告主ID corp_name String 企微公司简称 event_type Integer 事件类型 corp_id String 企微ID state String 归因参数 service_provider_code Integer 服务商名称 code Integer 0 - success 160001 - 系统错误 162716 - 服务商code不匹配：服务商code错误，请先联系运营报备 162717 - 事件不匹配：事件code错误 162718 - state不匹配：state参数错误，请核实是否快手流量 data AdLaotieWechatPassBackDataRes res res_msg String OK message String OK
```
