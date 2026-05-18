---
title: 修改应用分包备注
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2790&menuId=3528
doc_id: kuaishou_2790
source_id: kuaishou_2790
---
# 修改应用分包备注

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2790 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:58:28.580Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/subpkg/description |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| description | String | 是 | "渠道一" | 子包描述 | 当应用分包处于构建中或更新中时，不可对分包修改备注 |
| package_id | Long | 是 | 123 | 子包id | 仅支持单个修改 |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/subpkg/description' \
--header 'Content-Type: application/json' \
--header 'Access-Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--data '{
    "advertiser_id":900015364,
    "package_id": 100009135,
    "description":"应用分包备注"
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
    "request_id": "EMmAgICg4ZmOrAEYiQcghvD3tvQwKOLUofUD"
}
```
