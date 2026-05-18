---
title: 获取分包管理/回收站列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2791&menuId=3529
doc_id: kuaishou_2791
source_id: kuaishou_2791
---
# 获取分包管理/回收站列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2791 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:59:11.141Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/subPackage/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | advertiser_id |  |
| app_id | Long | 是 |  | 应用id |  |
| key_word | String |  |  | 搜索关键词 | 渠道号或分包备注关键词 |
| page | Integer |  |  | 当前页 | 页码，默认1 |
| list_type | Integer |  |  | 列表类型 | 不填为分包管理列表 填2-分包回收列表 |
| page_size | Integer |  |  | 分页大小 | 个数，默认10 |
| version | String[] |  |  | 版本信息 | 分包管理列表生效，筛选版本信息，多选。不传默认全部。 |
| status | Integer |  |  | 分包状态 | 分包管理列表生效，筛选分包状态，单选。不传默认全部，0-全部，1-审核中，2-审核未通过，4-已发布，6-分包构建中，7-分包更新中，8-分包构建失败 |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/subPackage/list' \
--header 'Content-Type: application/json' \
--header 'Access-Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--data '{
    "advertiser_id":900015364,
    "app_id":2199123264588
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListQueryAppSubPackageResp921Snake |  |  | 请补充描述详情 |  |
| - current_page | Integer |  |  | 当前页 |  |
| - list | QueryAppSubPackageResp307Snake[] |  |  | 应用分包的返回参数 |  |
| - can_recycle | Boolean |  |  | 是否可恢复 | 仅分包回收站列表时有效，表示应用分包是否可以恢复 |
| - can_update | Boolean |  |  | 是否可更新 | 仅分包管理列表时有效，表示应用分包是否可以更新 |
| - channel_id | String |  |  | 渠道号(分包号) |  |
| - delete_time | Long |  |  | 删除时间 | 仅分包回收站列表时有效，表示应用分包的删除时间 |
| - description | String |  |  | 分包描述 |  |
| - package_id | Long |  |  | 应用包ID |  |
| - parent_package_id | Long |  |  | 分包的母包ID |  |
| - real_app_version | String |  |  | 应用版本信息 |  |
| - sub_package_status | Integer |  |  | 应用分包状态 | 1-审核中，2-审核失败，3-待发布，4-已发布，5-已下架 6-创建中，7-更新中，8-构建失败 |
| - update_time | Long |  |  | 更新时间 | 仅分包管理列表时有效，表示应用分包的更新时间 |
| - url | String |  |  | 应用下载地址 |  |
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
        "total_count": 1,
        "list": [
            {
                "can_recycle": null,
                "description": "",
                "package_id": 100009068,
                "put_status": 1,
                "url": "https://kcdn.staging.kuaishou.com/bs2/ad-app/bb3e554f-30dd-4958-9e3f-001f07ddea12_2199123264588_2023-03-29%2002%3A21%3A30_1_1680027700492.apk",
                "update_time": 1680027701625,
                "real_app_version": "7.9.232",
                "review_status": 2,
                "build_status": 2,
                "sub_package_status": 4,
                "parent_package_id": 1099611636813,
                "channel_id": "2199123264588_2023-03-29 02:21:30_1",
                "can_update": false
            }
        ],
        "current_page": 1,
        "page_size": 10
    },
    "message": "OK",
    "request_id": "EPSAgIDwg5mOrAEY4Qcgl_PZu_QwKPK0tp8I"
}
```
