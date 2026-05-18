---
title: 获取行动号召按钮
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2670&menuId=3402
doc_id: kuaishou_2670
source_id: kuaishou_2670
---
# 获取行动号召按钮

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2670 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:04:47.574Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/creative/action_bar_text/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 1008611 | 广告主ID | `在获取 access_token 的时候返回 |
| campaign_type | Integer | 是 | 2 | 计划类型 | `2：提升应用安装；3：获取电商下单；4：推广品牌活动；5：收集销售线索；13：小店商品推广；14：直播推广 |
| consult_type | Integer |  | 0 | 是否使用咨询组件 | `0：未使用；1：使用。咨询组件仅在收集销售线索计划(campaign_type=5)下可用，且使用了咨询组件后，可用的行动号召按钮限于接口返回内容 |
| unit_material_type | Integer |  | 3 | 广告组标的物类型 | 3：微信小程序、4微信小游戏（campaign_type=32必填） |

## 请求样例

### 请求样例 (shell)

```
curl --location --request GET https://ad.e.kuaishou.com//rest/openapi/v1/creative/action_bar_text/list' \
--header 'access-token: e325b53b959936a7cc51a1df91b7e' \
--header 'Content-Type: application/json' \
--data-raw '{
   "advertiser_id":4171736,
   "campaign_type":2
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | AdMarketActionBarTextView |  | 1 | 返回数据 |  |
| - campaign_type | Integer |  | 2 | 计划类型 |  |
| - action_bar_text | String[] |  | ["立即安装"] | 行动号召按钮文案 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
   "code": 0,
   "message": "OK",
   "data": {
       "campaign_type": 2,
       "action_bar_text": [
           "玩游戏",
           "立即投保",
           "去借钱",
           "寻找有缘人",
           "立即下载",
           "一键下载",
           "免费下载",
           "立即安装",
           "体验同款特效",
           "了解详情",
           "测额度",
           "免费安装",
           "立即制作",
           "更多精彩"
       ]
   },
   "request_id": "eb9ba36158334aca949b9fc73a6f5b7f"
}
```
