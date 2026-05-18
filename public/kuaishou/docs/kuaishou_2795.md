---
title: 获取应用版本记录
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2795&menuId=3533
doc_id: kuaishou_2795
source_id: kuaishou_2795
---
# 获取应用版本记录

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2795 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:00:34.351Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/version/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| app_id | Long | 是 |  | 应用id |  |
| page | Integer |  |  | 当前页 | 页码，默认1 |
| page_size | Integer |  |  | 分页大小 | 个数，默认20 |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/version/list' \
--header 'Content-Type: application/json' \
--header 'Access-Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--data '{
    "advertiser_id":900015364,
    "app_id":2199123264034
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListGetAppVersionResp656Snake |  |  | JSON 返回值 |  |
| - current_page | Integer |  |  | 当前页 |  |
| - list | GetAppVersionResp15Snake[] |  |  | 应用版本列表的返回参数 |  |
| - real_app_version | String |  |  | 应用版本信息 |  |
| - update_time | Long |  |  | 更新时间 |  |
| - version_code | Long |  |  | 应用版本号 |  |
| - version_status | Integer |  |  | 版本状态 | 1-审核中 2-审核失败 3-待发布 4-已发布 5-已下架 |
| - page_size | Integer |  |  | 分页大小 |  |
| - total_count | Long |  |  | 总数 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回详情 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "total_count": 2,
        "list": [
            {
                "update_time": 1679390764653,
                "version_status": 3,
                "version_code": 11509,
                "real_app_version": "11.5.0"
            },
            {
                "update_time": 1679385962969,
                "version_status": 4,
                "version_code": 11469,
                "real_app_version": "11.4.6"
            }
        ],
        "current_page": 1,
        "page_size": 10
    },
    "message": "OK",
    "request_id": "EPSAgIDwg5mOrAEY6AQgs5vmuvQwKLPAvNEB"
}
```
