---
title: 拉取token下授权广告账户接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3025&menuId=3800
doc_id: kuaishou_3025
source_id: kuaishou_3025
---
# 拉取token下授权广告账户接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3025 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-09-09T13:24:52.670Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/oauth2/authorize/approval/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| app_id | Long | 是 |  | 申请应用后快手返回的 app_id |  |
| secret | String | 是 |  | 申请应用后快手返回的 secret |  |
| access_token | String | 是 |  | 查询的 access_token |  |
| page_no | Integer | 是 |  | 分页页码，必填 |  |
| page_size | Integer | 是 |  | 分页每页展示条数，必填，最大值为200 |  |

## 请求样例

### 请求样例 (shell)

```
curl -H "Content-Type:application/json" \
-d '
{
"app_id": 74751,
"secret": "abcd",
"access_token": "f143e044bd8e1024545251c612c0ab49",
"page_no":1,
"page_size":100
}' https://ad.e.kuaishou.com/rest/openapi/oauth2/authorize/approval/list
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | AuthorizeApprovalListData |  |  | 返回数据 |  |
| - isEnd | Boolean |  | - | 查询终止标识 | 本次查询对应分页是否大于总页数，true-当前分页大于总分页，无需继续向后查询；false-当前分页小于等于总页数，需要查询。 |
| - details | Long[] |  |  | 广告主id列表 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 1,
    "message": "成功",
    "data": {
        "details": [
            8173064
        ],
        "isEnd": false
    }
}
```

## 原始内容

```
拉取token下授权广告账户接口 /rest/openapi/oauth2/authorize/approval/list curl -H "Content-Type:application/json" \ -d ' { "app_id": 74751, "secret": "abcd", "access_token": "f143e044bd8e1024545251c612c0ab49", "page_no":1, "page_size":100 }' https://ad.e.kuaishou.com/rest/openapi/oauth2/authorize/approval/list { "code": 1, "message": "成功", "data": { "details": [ 8173064 ], "isEnd": false } } app_id Long 申请应用后快手返回的 app_id secret String 申请应用后快手返回的 secret access_token String 查询的 access_token page_no Integer 分页页码，必填 page_size Integer 分页每页展示条数，必填，最大值为200 code Integer 返回码 message String 返回信息 data AuthorizeApprovalListData 返回数据 isEnd Boolean 查询终止标识 details Long[] 广告主id列表
```
