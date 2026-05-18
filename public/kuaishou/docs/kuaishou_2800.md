---
title: 魔力建站落地页批量更新接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2800&menuId=3538
doc_id: kuaishou_2800
source_id: kuaishou_2800
---
# 魔力建站落地页批量更新接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2800 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 魔力建站 |
| createTime | 2024-07-04T12:22:48.500Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/page/batch/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 10001 | 广告主id |  |
| page_infos | PageUpdateInfoGW[] | 是 | [] | 落地页信息 |  |
| - page_id | String | 是 | 1001 | 落地页ID |  |
| - name | String | 是 | 落地页名称 | 落地页名称 |  |
| - component_infos | ComponentCreateParam[] | 是 | [] | 组件列表 |  |
| - id | String | 是 | 1001 | 组件id | 基于源落地页组件结构创建新的组件 |
| - type | Integer | 是 | 34 | 组件类型，仅支持type=34小游戏组件 |  |
| - wechat_game | WechatGame |  | {} | 小游戏信息 | 当type= 34必须有值 |
| - wechat_game_id | String | 是 | 10001 | 微信小游戏ID, 查询线索通获取微信小游戏列表接口获取 |  |
| - button_text | String |  | 按钮文案 | 按钮文案最多10个字符 当前仅当源落地页列表组件有该值时支持 |  |
| - game_name | String |  | 小游戏名称 | 小游戏名称最多10个字符 当前仅当源落地页列表组件有该值时支持 |  |
| - description | String |  | 小游戏说明 | 小游戏说明最多14个字符 当前仅当源落地页列表组件有该值时支持 |  |
| - title | String |  | 落地页标题 | 落地页标题 |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 1001,
    "page_infos": [{
        "page_id": "1001",
        "name": "落地页名称",
        "component_infos": [{
            "id": "100101",
            "type": 34,
            "wechat_game": {
                "wechat_game_id": "1000212",
                "button_text": "按钮文案",
                "game_name": "小游戏名称",
                "description": "小游戏说明"
            }
        }]
    }]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | code |  |
| message | String |  | 成功 | 提示信息 |  |
| data | PageUpdateResp |  | {} | 落地页信息 |  |
| - page_ids | String[] |  | [] | 落地页ID列表 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "page_ids": ["100001"]
    },
    "request_id": "8b1bc09057cd496d90730e2b0e9dbc90"
}
```
