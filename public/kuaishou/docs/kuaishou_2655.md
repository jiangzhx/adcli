---
title: 线索通-批量创建微信小游戏
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2655&menuId=3379
doc_id: kuaishou_2655
source_id: kuaishou_2655
---
# 线索通-批量创建微信小游戏

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2655 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 老铁线索通 |
| createTime | 2024-07-04T12:24:51.501Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/clue_laotie/v1/wechat/game/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| game_param | WechatGameSaveParam[] | 是 |  | 小游戏信息 |  |
| - name | String | 是 |  | 小游戏名称 |  |
| - original_id | String | 是 |  | 小游戏原始id |  |
| - path | String | 是 |  | 小游戏路径 |  |
| - icon_url | String |  |  | 小游戏icon url | 加白用户必填 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/clue_laotie/v1/wechat/game/create' \
--header 'Access-Token: 8d6bdb329bfeaf1b525bf28eb678e8f4' \
  --header 'Content-Type: application/json' \
--data-raw '{
   "advertiser_id": 900015068,
   "game_param": [
       {
         "name": "批量创建-1000",
         "original_id": "901232path-1002",
         "path": "wiki.corp.kuaishou.com/page"
       }
   ]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 错误码 |  |
| message | String |  |  | 错误信息 |  |
| data | WechatGameSaveData |  |  | data信息 |  |
| - save_game_info | SaveGameInfo[] |  |  | 游戏信息 |  |
| - game_id | String |  |  | 小游戏id |  |
| - name | String |  |  | 小游戏名称 |  |
| - original_id | String |  |  | 小游戏原始id |  |
| - path | String |  |  | 小游戏路径 |  |
| - icon_url | String |  |  | 小游戏iconurl |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "save_game_info": [
            {
                "path": "wiki.corp.kuaishou.com/page",
                "name": "批量创建-1000",
                "original_id": "901232path-1002",
                "game_id": "712838735927681680"
            }
        ]
    },
    "message": "OK",
    "request_id": "f6e5ebbbc71f4e3da1e4386a1585b8fc"
}
```
