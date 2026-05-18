---
title: 取消应用共享
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2777&menuId=3514
doc_id: kuaishou_2777
source_id: kuaishou_2777
---
# 取消应用共享

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2777 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:54:45.318Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/share/cancel |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| app_id | Long | 是 | 123 | 应用id |  |
| cancel_share_advertiser_ids | Long[] |  | [11,22,33] | 要取消的账号id | share_type=1必填 单次支持取消200个账号 |
| cancel_share_corp_ids | Long[] |  | [11,22,33] | 要取消的主体ID集合 | share_type=2必填 正常只需要传当前账号主体ID即可，跨主体共享根据申请的可共享主体ID填入 |
| share_type | Integer | 是 | 1 | 取消的共享类型 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/share/cancel' \
--header 'Content-Type: application/json' \
--header 'Access-Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--data '{
    "advertiser_id":900015364,
    "app_id":2199123264636,
    "cancel_share_advertiser_ids":[900164519]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | MapiAppModResp |  |  | MAPI-修改应用的响应参数 |  |
| - result | Boolean |  |  | 修改分包备注是否成功 | true-成功，false-失败 |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回详情 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "result": true
    },
    "message": "OK",
    "request_id": "EMmAgICg4ZmOrAEYjgMg3smItvQwKOC_gP4P"
}
```
