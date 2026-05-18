---
title: 魔力建站落地页批量创建接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2644&menuId=3369
doc_id: kuaishou_2644
source_id: kuaishou_2644
---
# 魔力建站落地页批量创建接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2644 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 魔力建站 |
| createTime | 2024-07-04T12:22:07.234Z |

## 概述

备注：该接口当前仅支持基于小游戏组件信息编辑修改的落地页创建

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/page/batch/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 10001 | 广告主id |  |
| page_infos | PageCreateInfoGW[] | 是 | [] | 落地页信息列表，最大支持100个 | PageCreateInfo具体介绍见下方 |
| - source_page_id | String | 是 | 1001 | 源落地页id, 查询落地页列表接口获取 | 基于源落地页结构创建新落地页 |
| - name | String | 是 | 落地页名称 | 落地页名称 最多40个字符 | 名称不能重复 |
| - biz_id | Integer | 是 | 0 | 落地页类型 |  |
| - component_infos | ComponentCreateParam[] | 是 | [] | 组件列表 基于源落地页需要更新的组件信息列表 | ComponentCreateParam具体介绍见下方 |
| - id | String | 是 | 1001 | 组件id | 基于源落地页组件结构创建新的组件 |
| - type | Integer | 是 | 34 | 组件类型，仅支持type=34小游戏组件 |  |
| - wechat_game | WechatGame |  | {} | 小游戏信息 | 当type= 34必须有值 |
| - wechat_game_id | String | 是 | 10001 | 微信小游戏ID, 查询线索通获取微信小游戏列表接口获取 |  |
| - button_text | String |  | 按钮文案 | 按钮文案最多10个字符 当前仅当源落地页列表组件有该值时支持 |  |
| - game_name | String |  | 小游戏名称 | 小游戏名称最多10个字符 当前仅当源落地页列表组件有该值时支持 |  |
| - description | String |  | 小游戏说明 | 小游戏说明最多14个字符 当前仅当源落地页列表组件有该值时支持 |  |
| - title | String |  | 落地页标题 | 落地页的标题 最多10个字 | 不设置默认为“磁力建站” |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/page/batch/create' \
--header 'access-token:xxxxxxxxxx' \
--header 'Content-Type: application/json' \
--data-raw '{
	"advertiser_id": 1001,
	"page_infos": [{
		"source_page_id": "1001",
		"name": "落地页名称",
		"biz_id": 0,
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
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | code |  |
| message | String |  | 成功 | 提示信息 |  |
| data | PageCreateResp |  | {} | 落地页结果信息 |  |
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
