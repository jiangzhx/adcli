---
title: 更新/恢复/删除应用分包
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2789&menuId=3527
doc_id: kuaishou_2789
source_id: kuaishou_2789
---
# 更新/恢复/删除应用分包

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2789 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:58:51.827Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/subpkg/mod |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| package_id | Long[] | 是 | [11,22] | 子包id | 支持批量 |
| put_status | Integer | 是 | 0 | 更改子包的类型 | 0-更新 1-恢复 2-删除。当分包状态处于构建中或更新中时，不可对分包进行操作。更新分包指将分包升级到绑定最新发布版本的母包；删除分包将不能使用该分包创建广告；恢复分包可重新使用分包物料创建广告。 |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/subpkg/mod' \
--header 'Content-Type: application/json' \
--header 'Access-Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--data '{
    "advertiser_id":900015364,
    "package_id": [100009135],
    "put_status":2    //0-更新 1-恢复 2-删除
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
    "request_id": "EMmAgICg4ZmOrAEYwwYglPLltvQwKMC6pvgI"
}
```
