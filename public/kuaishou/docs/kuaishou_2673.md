---
title: 获取创意分类查询接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2673&menuId=3405
doc_id: kuaishou_2673
source_id: kuaishou_2673
---
# 获取创意分类查询接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2673 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:06:37.029Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/creative/creative_category/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 id |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com//rest/openapi/v1/creative/creative_category/list' \
--header 'access-token: d277937ee1fe000965468d16689f50c3' \
--header 'Content-Type: application/json' \
--data-raw '{
   "advertiser_id": 4171736
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | message |  |
| data | AdMarketCreativeCategoryData |  |  | 创意分类 |  |
| - details | AdMarketCreativeCategoryView[] |  |  | mapi 创意分类返回值 | 是个倒着的树形结构，根节点 level 为 1 |
| - category_id | Integer |  |  | 分类id | 若没有其他节点，以此节点的分类 id 为 parent_id，则此节点为叶子结点 |
| - parent_id | Integer |  |  | 分类父 id |  |
| - category_name | String |  |  | 分类名称 |  |
| - level | String |  |  | 分类级别 | 从上到下，最多三层。顶层是第一层 |

## 返回样例

### 返回样例 (jsonc)

```
{
   "code": 0,
   "message": "OK",
   "data": {
       "details": [
           {
               "category_id": 8,
               "parent_id": 0,
               "category_name": "游戏",
               "level": "1"
           },
           {
               "category_id": 802,
               "parent_id": 8,
               "category_name": "游戏（按题材）",
               "level": "2"
           },
           {
               "category_id": 803,
               "parent_id": 8,
               "category_name": "游戏（按利益）",
               "level": "2"
           },
           {
               "category_id": 80201,
               "parent_id": 802,
               "category_name": "传奇游戏",
               "level": "3"
           },
           {
               "category_id": 80202,
               "parent_id": 802,
               "category_name": "仙侠游戏",
               "level": "3"
           },
           {
               "category_id": 80203,
               "parent_id": 802,
               "category_name": "魔幻游戏",
               "level": "3"
           },
           {
               "category_id": 80204,
               "parent_id": 802,
               "category_name": "西游游戏",
               "level": "3"
           },
           {
               "category_id": 80205,
               "parent_id": 802,
               "category_name": "三国游戏",
               "level": "3"
           },
           {
               "category_id": 80206,
               "parent_id": 802,
               "category_name": "宫廷游戏",
               "level": "3"
           },
           {
               "category_id": 80207,
               "parent_id": 802,
               "category_name": "都市游戏",
               "level": "3"
           },
           {
               "category_id": 80208,
               "parent_id": 802,
               "category_name": "末日游戏",
               "level": "3"
           },
           {
               "category_id": 80209,
               "parent_id": 802,
               "category_name": "盗墓游戏",
               "level": "3"
           },
           {
               "category_id": 80210,
               "parent_id": 802,
               "category_name": "科幻游戏",
               "level": "3"
           },
           {
               "category_id": 80211,
               "parent_id": 802,
               "category_name": "二次元游戏",
               "level": "3"
           },
           {
               "category_id": 80212,
               "parent_id": 802,
               "category_name": "女性向游戏",
               "level": "3"
           },
           {
               "category_id": 80214,
               "parent_id": 802,
               "category_name": "游戏题材其他",
               "level": "3"
           },
           {
               "category_id": 80215,
               "parent_id": 802,
               "category_name": "军事游戏",
               "level": "3"
           },
           {
               "category_id": 80301,
               "parent_id": 803,
               "category_name": "网赚游戏",
               "level": "3"
           },
           {
               "category_id": 80302,
               "parent_id": 803,
               "category_name": "游戏利益其他",
               "level": "3"
           }
       ]
   }
```
