---
title: 线索通-获取微信小游戏列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2656&menuId=3380
doc_id: kuaishou_2656
source_id: kuaishou_2656
---
# 线索通-获取微信小游戏列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2656 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 老铁线索通 |
| createTime | 2024-07-04T12:25:03.846Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/clue_laotie/v1/wechat/game/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| game_id | String[] |  |  | 小游戏id |  |
| original_id | String |  |  | 小游戏原始id |  |
| name | String |  |  | 小游戏路径 |  |
| status | Integer[] |  |  | 小游戏状态 | 0-草稿态，1-审核中，2-审核通过，3-审核拒绝 |
| page_num | Long |  |  | page_num | 默认1 |
| page_size | Integer |  |  | page_size | 默认10 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/clue_laotie/v1/wechat/game/list' \
--header 'Access-Token: 8d6bdb329bfeaf1b525bf28eb678e8f4' \
  --header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": 900015068,
    "game_id" : ["712808745084035765","712805003806941877"],
    "page_num": 1,
    "page_size":10
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 错误码 |  |
| message | String |  |  | 错误信息 |  |
| data | AdLaotieWechatGameListData |  |  | data信息 |  |
| - total_count | Long |  |  | 总数 |  |
| - wechat_game_infos | WechatGameInfo[] |  |  | 小游戏信息 |  |
| - game_id | String |  |  | 小游戏id |  |
| - name | String |  |  | 小游戏名称 |  |
| - original_id | String |  |  | 小游戏原始id |  |
| - path | String |  |  | 小游戏路径 |  |
| - status | Integer |  |  | 小游戏状态 |  |
| - reject_reason | String |  |  | 小游戏审核决绝的原因 |  |
| - create_time | Long |  |  | 创建时间 |  |
| - update_time | Long |  |  | 更新时间 |  |
| - icon_url | String |  |  | 微信小游戏icon url |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "wechat_game_infos": [
            {
                "path": "wiki.corp.kuaishou.com/page",
                "update_time": 1653744616424,
                "create_time": 1653744616313,
                "name": "批量创建-a",
                "reject_reason": "",
                "original_id": "90804532patha2",
                "status": 1,
                "game_id": "712808745084035765"
            },
            {
                "path": "wiki.corp.kuaishou.com/page",
                "update_time": 1653644367218,
                "create_time": 1653630441597,
                "name": "批量创建-1000",
                "reject_reason": "",
                "original_id": "90804532path-1002",
                "status": 2,
                "game_id": "712805003806941877"
            }
        ],
        "total_count": 2
    },
    "message": "OK",
    "request_id": "226be653b2e14ac7a25739891d3c07f5"
}
```
