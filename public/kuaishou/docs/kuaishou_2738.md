---
title: 获取主播列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2738&menuId=3471
doc_id: kuaishou_2738
source_id: kuaishou_2738
---
# 获取主播列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2738 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:17:52.456Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/live_manage/get_live_users |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID |  |
| audit_status_list | Integer[] | 是 |  | 审核状态 | 过滤条件，无需过滤时传空数组 |
| live_user_type_list | Integer[] | 是 |  | 主播类型 | 过滤条件，无需过滤时传空数组 |
| live_user_ids | Long[] | 是 |  | 主播id | 过滤条件，无需过滤时传空数组 |
| current_page | Integer | 是 |  | 当前页数 |  |
| page_size | Integer | 是 |  | 每页行数 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'http://star-gateway.test.gifshow.com/rest/openapi/gw/dsp/v1/live_manage/get_live_users' \
--header 'Access-Token: 71e16e2fccb0d694c3004aeca4221637' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": 90001041,
    "current_page": 1,
    "page_size": 10
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | result |  |
| message | String |  |  | message |  |
| data | GetLiveUserListResponse |  |  | data |  |
| - live_user_list | LiveUserInfoView[] |  |  | liveUserList |  |
| - account_id | Long |  |  | accountId |  |
| - live_user_id | Long |  |  | 主播id |  |
| - live_user_type | Integer |  |  | 主播类型 |  |
| - audit_status | Integer |  |  | 审核状态 |  |
| - living | Boolean |  |  | 是否正在直播 |  |
| - totla_count | Integer |  |  | 总行数 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "totla_count": 4,
        "live_user_list": [
            {
                "live_user_type": 1,
                "living": false,
                "account_id": 90001041,
                "audit_status": 1,
                "live_user_id": 7677667
            }
        ]
    },
    "message": "OK",
    "request_id": "3e9147707e7f4dedb573a737545faef3"
}
```
