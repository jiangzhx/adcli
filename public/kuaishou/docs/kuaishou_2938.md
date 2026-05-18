---
title: 获取联盟定向媒体包列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2938&menuId=3689
doc_id: kuaishou_2938
source_id: kuaishou_2938
---
# 获取联盟定向媒体包列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2938 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:45:22.630Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/asset/media/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| media | MediaIn |  |  | 媒体包参数结构 | 用于支持搜索 |
| - media_id | Long |  |  | 媒体包 ID |  |
| - name | String |  |  | 媒体包名字 | 修改媒体包名 |
| - source_type | Integer |  |  | 媒体包来源 | 0-不限，未指定，1-行业优质流量包，2-广告主自定义，默认 0 |
| - pos_ids | String[] |  |  | 广告位列表 | 修改媒体包广告位 |
| - status | Integer |  |  | 状态 | 删除媒体包，0-下线，1-上线，默认 1 |
| is_related_unit | Boolean |  |  | 是否关联广告组信息 | 默认 false |
| page | Integer |  |  | 当前页码 | 默认为 1 |
| page_size | Integer |  |  | 分页大小 | 默认 20，最大不超过 50 |

## 请求样例

### 请求样例 (shell)

```
curl -X POST \
 -H 'Access-Token: 69d99a7c1fdf3f4b271b' \
 -H 'Content-Type: application/json' \
 -d '{
    "advertiser_id":20000152,
    "media":{
        "media_id":213123213,
        "name":"新建定向媒体包",
        "source_type":2,
    },
    "is_related_unit": true,
    "pageInfo":{
        "current_page":1,
        "page_size":10,
     }
}' -L https://ad.e.kuaishou.com/rest/openapi/v1/asset/media/list
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | MediaListData |  |  | 媒体包对象 |  |
| - datails | MediaListDetails[] |  |  | 关联广告组信息列表 |  |
| - relate_units | RelateUnits[] |  |  | 关联广告组信息列表 |  |
| - unit_id | Long |  |  | 广告组 ID |  |
| - unit_name | String |  |  | 广告组名字 |  |
| - campaign_id | Long |  |  | 广告计划 ID |  |
| - campaign_type | Integer |  |  | 广告计划类型 | 计划类型，过滤筛选条件：1 - 作品推广；2 - 提升应用安装；3 - 获取电商下单；4 - 推广品牌活动；5 - 收集销售线索；6 - 保量广告；7 - 提高应用活跃 |
| - put_status | Integer |  |  | 在投状态 | UNKNOWN_PUT_STATUS = 0; // 默认值；PUT_STATUS_OPEN = 1; // 投放；PUT_STATUS_PAUSE = 2; // 暂停；PUT_STATUS_DELETED = 3; // 删除 |
| - review_status | Integer |  |  | 审核状态 | UNKNOWN_REVIEW_STATUS = 0; // 默认值；REVIEW_WAIT_AUDIT = 1; //审核中；REVIEW_THROUGH = 2; //通过审核；REVIEW_NOT_THROUGH = 3; //审核未通过；BANNED = 4; //封禁 |
| - media_using | Boolean |  |  | 媒体包是否在使用 |  |
| - media_type | Integer |  |  | 媒体包的使用类型 | 0-未知，1-定向，2-排除 |
| - media | Media |  |  | 媒体包信息 |  |
| - media_id | Long |  |  | 媒体包 ID |  |
| - name | String |  |  | 媒体包名字 |  |
| - advertiser_id | Long |  |  | 广告主 ID |  |
| - source_type | Integer |  |  | 媒体包来源 | 0-不限，未指定，1-行业优质流量包，2-广告主自定义，默认 0 |
| - pos_ids | String[] |  |  | 广告位列表 | 修改媒体包广告位 |
| - status | Integer |  |  | 状态 | 删除媒体包，0-下线，1-上线，默认 1 |
| - create_time | Long |  |  | 创建时间 | 时间戳 |
| - update_time | Long |  |  | 更新时间 |  |
| - total_count | Long |  |  | 总共条数 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code":0,
    "message":"OK",
    "data":{
        "details":[
            {
                "media":{
                    "media_id":337630,
                    "advertiser_id":42932,
                    "create_time":1603291774359,
                    "update_time":1603291774359,
                    "name":"test——2",
                    "source_type":2,
                    "pos_ids":[
                        "sadsads231afasfs",
                        "231erew232123231"
                    ],
                    "status":1
                },
                "relate_units":[
                    {
                        "unit_id":1213,
                        "unit_name":"媒体包测试组",
                        "campaign_id":23213112,
                        "campaign_type":2,
                        "put_status":1,
                        "media_type":1
                    }
                ]
            },
            {
                "media":{
                    "media_id":33890,
                    "account_id":42932,
                    "create_time":1563173027191,
                    "update_time":1563173027191,
                    "name":"模板_test_1",
                    "source_type":2,
                    "pos_ids":[
                        "212wqeqwe1312",
                        "23123eqweqwe21"
                    ],
                    "status":1
                },
                "relate_units":[
                    {
                        "unit_id":1213,
                        "unit_name":"媒体包测试组",
                        "campaign_id":23213112,
                        "campaign_type":2,
                        "put_status":1,
                        "media_type":1
                    }
                ]
            }
        ],
         "total_count":2
    }
}
```
