---
title: 获取商品库列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2727&menuId=3460
doc_id: kuaishou_2727
source_id: kuaishou_2727
---
# 获取商品库列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2727 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:48:08.296Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/dpa/library/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 0 | 广告主账号ID |  |
| library_id | Long |  | 0 | 商品库ID |  |
| name | String |  |  | 商品库名称 |  |
| status | Integer |  | 2 | 商品库状态 | 1-审核中, 2-使用中, 3-审核失败, 4-暂停使用, 5-XML初始化中, 6-XML初始化失败 |
| query_type | Integer | 是 | 1 | 商品库权限类型 | 1-使用权限, 2-编辑权限(含使用权限) |
| page_info | PageInfoSneak95 |  |  | 分页信息 |  |
| - page_size | Integer |  | 20 | 页大小 |  |
| - current_page | Integer |  | 1 | 当前页码 |  |
| biz_ids | Integer[] |  | [2,3] | 商品库业务标记 | 主站（1）、联盟（2）、通用（3）。未知（0）：创建后还未审核过的商品库 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/dpa/library/list' \
--header 'Access-Token: ****************' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": ******,
    "query_type": 2
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | LibraryQueryResponse113 |  |  | 商品库列表 |  |
| - data | AdDpaLibraryViewSneak431[] |  |  | 商品库列表 |  |
| - library_id | Long |  | 0 | 商品库ID |  |
| - name | String |  |  | 商品库名称 |  |
| - library_desc | String |  |  | 商品库描述 |  |
| - status | Integer |  | 2 | 商品库状态 | 1-审核中, 2-使用中, 3-审核失败, 4-暂停使用, 5-XML初始化中, 6-XML初始化失败 |
| - create_time | Long |  | 0 | 商品库创建时间 | 毫秒时间戳 |
| - biz_id | Integer |  | 2 | 商品库业务标记 | 主站（1）、联盟（2）、通用（3）。未知（0）：创建后还未审核过的商品库。 |
| - page_info | PageInfoSneak808862 |  |  | 分页信息 |  |
| - total_count | Long |  | 1 | 总数 |  |
| - page_size | Integer |  | 20 | 页大小 |  |
| - current_page | Integer |  | 1 | 当前页码 |  |
| code | Integer |  | 0 | 请求返回状态码 |  |
| message | String |  |  | 请求返回状态信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "data": [
            {
                "create_time": 1655383372262,
                "library_id": *****,
                "library_desc": "***",
                "name": "**库",
                "status": 2
            }
        ],
        "page_info": {
            "total_count": 51,
            "current_page": 1,
            "page_size": 10
        }
    },
    "message": "OK",
    "request_id": "EJf0-4CQ1by7Chjy-hIgopiYl8wwKNOZ6NED"
}
```
