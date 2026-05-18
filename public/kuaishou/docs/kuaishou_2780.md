---
title: 获取单个主体下共享账号列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2780&menuId=3517
doc_id: kuaishou_2780
source_id: kuaishou_2780
---
# 获取单个主体下共享账号列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2780 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:55:41.304Z |

## 概述

应用的共享类型为：share_type=2【主体共享】才会有数据

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/share/listCorpAccount |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| app_id | Long | 是 |  | 应用id |  |
| corp_id | Long | 是 |  | 主体ID |  |
| page_info | PageSnake | 是 |  | 分页信息 |  |
| - current_page | Integer | 是 |  | 当前页 |  |
| - page_size | Integer | 是 |  | 分页大小 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/share/listCorpAccount' \
--header 'Access-Token: e6d2a9a50d3ba728c77ac79f3a063d2c' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=e8977018-0d93-4c22-8d95-1cbb0a4ab5daaa26501f062a0b9042d0bd60d291b622:1685348999:1' \
--data-raw '{
    "advertiser_id": 12078245,
    "app_id": 2199123262731,
    "corp_id": 15280,
    "page_info": {
        "current_page": 1,
        "page_size": 10
    }
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListShareCorpResp103Snake |  |  | JSON返回值 |  |
| - list | ShareCorpResp279Snake[] |  |  | 主体列表的返回参数 |  |
| - corp_id | Long |  |  | 主体ID |  |
| - corp_name | String |  |  | 主体名称 |  |
| - share_account_vos | ShareAccountResp68Snake[] |  |  | 账号列表的返回参数 |  |
| - account_id | Long |  |  | 账号ID |  |
| - account_name | String |  |  | 账号名称 |  |
| - total_account_cnt | Integer |  |  | 主体共享，挂载的Account数量 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 错误信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "list": [
            {
                "share_account_vos": [
                    {
                        "account_id": 17182999,
                        "account_name": "快手用户1682057104157"
                    },
                    {
                        "account_id": 16855298,
                        "account_name": "舞动星闪耀-小舞"
                    },
                    {
                        "account_id": 9592982,
                        "account_name": "鱼鱼鱼g🧸"
                    },
                    {
                        "account_id": 13918416,
                        "account_name": "世界online-9"
                    },
                    {
                        "account_id": 13918417,
                        "account_name": "世界online-10"
                    },
                    {
                        "account_id": 16855316,
                        "account_name": "武道将魂-test"
                    },
                    {
                        "account_id": 14434516,
                        "account_name": "德里克克德"
                    },
                    {
                        "account_id": 16593143,
                        "account_name": "途游斗地主(比赛版)-1"
                    },
                    {
                        "account_id": 13918414,
                        "account_name": "世界online-7-ZY"
                    },
                    {
                        "account_id": 16855309,
                        "account_name": "跑酷勇者-test"
                    }
                ],
                "total_account_cnt": 2699,
                "corp_name": "北京慕远科技有限公司",
                "corp_id": 15280
            }
        ]
    },
    "message": "OK",
    "request_id": "EMOAgIDg4o6zChi9ByDtrpL0iDEoyrXs2gE="
}
```
