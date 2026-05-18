---
title: 智投项目查询接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3278&menuId=4058
doc_id: kuaishou_3278
source_id: kuaishou_3278
---
# 智投项目查询接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3278 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-12-09T03:34:50.956Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/simple/project/query |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| page | Integer |  |  | 当前页码 |  |
| page_size | Integer |  |  | 每页大小 |  |

## 请求样例

### 示例标题 (shell)

```
curl -X POST \
  -H 'Access-Token: eaba7b0d52f944a4e0c' \
  -H 'Content-Type: application/json' \
  -d '{
       "advertiser_id":"1234567890",
       "page":"1",
       "page_size":"10"
}'  -L https://ad.e.kuaishou.com/rest/openapi/gw/dsp/simple/project/query
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListAuaxSimpleProjectQueryResp698Snake203455 |  |  | 返回数据 |  |
| - current_page | Integer |  |  | 当前页码 |  |
| - list | AuaxSimpleProjectQueryResp632Snake987949[] |  |  | 查询智投项目返回参数 |  |
| - account_auto_manage | Integer |  |  | 智投开关 |  |
| - auax_project_id | Long |  |  | 项目id |  |
| - auto_manage_type | Integer |  |  | 账号智投模式类型 |  |
| - auto_photo_scope | Integer |  |  | 基建素材选取范围 |  |
| - book_info | BookInfo739Snake160310 |  |  | 小说信息 |  |
| - book_name | String |  |  | 小说标题 |  |
| - id | Long |  |  | 小说id |  |
| - create_type | Integer |  |  | 创建类型 |  |
| - description | String |  |  | 作品广告语 |  |
| - kol_user_id | Long |  |  | 广告主快手ID |  |
| - kol_user_info | KolUserInfoSnake |  |  | 快手号信息 |  |
| - user_id | Long |  |  | 授权快手号ID |  |
| - user_name | String |  |  | 授权快手号名称 |  |
| - kol_user_type | Integer |  |  | 快手号类型 |  |
| - name | String |  |  | 智投名称 |  |
| - ocpx_action_type | Integer |  |  | 转化目标 |  |
| - photo_package_details | PhotoPackageDetail752Snake329674[] |  |  | 素材包信息的集合 |  |
| - name | String |  |  | 素材包名称 |  |
| - photo_package_id | Long |  |  | 素材包id |  |
| - put_status | Integer |  |  | 投放状态 |  |
| - roi_ratio | Double |  |  | roi系数 |  |
| - series_info | SeriesInfo611Snake593742 |  |  | 短剧信息 |  |
| - cover_img | String |  |  | 短剧封面 |  |
| - description | String |  |  | 短剧描述 |  |
| - episode_amount | Integer |  |  | 剧集数量 |  |
| - id | String |  |  | 短剧id |  |
| - support_ad_unlock | Boolean |  |  | 是否支持观看剧集解锁 |  |
| - support_multi_template | Boolean |  |  | 是否支持短剧付费面板优选 |  |
| - title | String |  |  | 短剧标题 |  |
| - page_size | Integer |  |  | 每页大小 |  |
| - total_count | Long |  |  | 数据总条数 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 示例标题 (jsonc)

```
{
  "code": 0,
  "data": {
    "total_count": 16,
    "list": [
      {
        "kol_user_id": 2022036857,
        "roi_ratio": 4,
        "photo_package_details": [],
        "auto_photo_scope": 2,
        "account_auto_manage": 1,
        "auto_manage_type": 1,
        "create_type": 1,
        "description": "后悔看的太快，年度爆款出圈小说，强烈推荐！",
        "auax_project_id": 3994549,
        "put_status": 1,
        "book_info": {
          "id": 2890302,
          "book_name": "版权商小说-2"
        },
        "kol_user_type": 1,
        "kol_user_info": {
          "user_id": 2022036857,
          "user_name": "饺子好吃"
        },
        "name": "书籍优选602",
        "ocpx_action_type": 191,
        "series_info": null
      },
      {
        "kol_user_id": 2022036857,
        "roi_ratio": 4,
        "photo_package_details": [],
        "auto_photo_scope": 2,
        "account_auto_manage": 1,
        "auto_manage_type": 1,
        "create_type": 1,
        "description": "后悔看的太快，年度爆款出圈小说，强烈推荐！",
        "auax_project_id": 3994495,
        "put_status": 1,
        "book_info": {
          "id": 2890304,
          "book_name": "版权商小说-4"
        },
        "kol_user_type": 1,
        "kol_user_info": {
          "user_id": 2022036857,
          "user_name": "饺子好吃"
        },
        "name": "书籍优选600",
        "ocpx_action_type": 191,
        "series_info": null
      },
      {
        "kol_user_id": 2022036857,
        "roi_ratio": 4,
        "photo_package_details": [],
        "auto_photo_scope": 2,
        "account_auto_manage": 1,
        "auto_manage_type": 1,
        "create_type": 1,
        "description": "后悔看的太快，年度爆款出圈小说，强烈推荐！",
        "auax_project_id": 4004321,
        "put_status": 1,
        "book_info": {
          "id": 2890301,
          "book_name": "版权商小说"
        },
        "kol_user_type": 1,
        "kol_user_info": {
          "user_id": 2022036857,
          "user_name": "饺子好吃"
        },
        "name": "书籍优选599",
        "ocpx_action_type": 191,
        "series_info": null
      },
      {
        "kol_user_id": 2022036857,
        "roi_ratio": 4,
        "photo_package_details": [],
        "auto_photo_scope": 2,
        "account_auto_manage": 1,
        "auto_manage_type": 1,
        "create_type": 1,
        "description": "后悔看的太快，年度爆款出圈小说，强烈推荐！",
        "auax_project_id": 4004320,
        "put_status": 1,
        "book_info": {
          "id": 2890303,
          "book_name": "版权商小说-3"
        },
        "kol_user_type": 1,
        "kol_user_info": {
          "user_id": 2022036857,
          "user_name": "饺子好吃"
        },
        "name": "书籍优选598",
        "ocpx_action_type": 191,
        "series_info": null
      },
      {
        "kol_user_id": 2022036857,
        "roi_ratio": 4,
        "photo_package_details": [],
        "auto_photo_scope": 2,
        "account_auto_manage": 1,
        "auto_manage_type": 1,
        "create_type": 1,
        "description": "后悔看的太快，年度爆款出圈小说，强烈推荐！",
        "auax_project_id": 4004318,
        "put_status": 1,
        "book_info": {
          "id": 2915804,
          "book_name": "线上测试望通过-小说全文付费3.5w字"
        },
        "kol_user_type": 1,
        "kol_user_info": {
          "user_id": 2022036857,
          "user_name": "饺子好吃"
        },
        "name": "书籍优选592",
        "ocpx_action_type": 191,
        "series_info": null
      },
      {
        "kol_user_id": 2022036857,
        "roi_ratio": 4,
        "photo_package_details": [],
        "auto_photo_scope": 2,
        "account_auto_manage": 1,
        "auto_manage_type": 1,
        "create_type": 1,
        "description": "后悔看的太快，年度爆款出圈小说，强烈推荐！",
        "auax_project_id": 4004316,
        "put_status": 1,
        "book_info": {
          "id": 6731202,
          "book_name": "听书2-付费锚点在2章中间"
        },
        "kol_user_type": 1,
        "kol_user_info": {
          "user_id": 2022036857,
          "user_name": "饺子好吃"
        },
        "name": "书籍优选590",
        "ocpx_action_type": 191,
        "series_info": null
      },
      {
        "kol_user_id": 2022036857,
        "roi_ratio": 4,
        "photo_package_details": [],
        "auto_photo_scope": 2,
        "account_auto_manage": 1,
        "auto_manage_type": 1,
        "create_type": 1,
        "description": "后悔看的太快，年度爆款出圈小说，强烈推荐！",
        "auax_project_id": 4012448,
        "put_status": 1,
        "book_info": {
          "id": 2915803,
          "book_name": "线上测试望通过-小说全文付费5.5w字"
        },
        "kol_user_type": 1,
        "kol_user_info": {
          "user_id": 2022036857,
          "user_name": "饺子好吃"
        },
        "name": "书籍优选589",
        "ocpx_action_type": 191,
        "series_info": null
      },
      {
        "kol_user_id": 2022036857,
        "roi_ratio": 4,
        "photo_package_details": [
          {
            "photo_package_id": 14001271220,
            "name": "dana测试素材包1"
          },
          {
            "photo_package_id": 12958266002,
            "name": "测试素材包权限新建"
          }
        ],
        "auto_photo_scope": 1,
        "account_auto_manage": 1,
        "auto_manage_type": 1,
        "create_type": 0,
        "description": "后悔看的太快，年度爆款出圈小说，强烈推荐！",
        "auax_project_id": 3994493,
        "put_status": 2,
        "book_info": {
          "id": 17028806,
          "book_name": "【新版】-数据2全文付费多作者"
        },
        "kol_user_type": 1,
        "kol_user_info": {
          "user_id": 2022036857,
          "user_name": "饺子好吃"
        },
        "name": "1",
        "ocpx_action_type": 191,
        "series_info": null
      },
      {
        "kol_user_id": 2022036857,
        "roi_ratio": 4,
        "photo_package_details": [],
        "auto_photo_scope": 2,
        "account_auto_manage": 1,
        "auto_manage_type": 1,
        "create_type": 1,
        "description": "后悔看的太快，年度爆款出圈小说，强烈推荐！",
        "auax_project_id": 4012451,
        "put_status": 2,
        "book_info": {
          "id": 17028805,
          "book_name": "【新版】-数据1章节付费2章"
        },
        "kol_user_type": 1,
        "kol_user_info": {
          "user_id": 2022036857,
          "user_name": "饺子好吃"
        },
        "name": "书籍优选603",
        "ocpx_action_type": 191,
        "series_info": null
      },
      {
        "kol_user_id": 2022036857,
        "roi_ratio": 4,
        "photo_package_details": [],
        "auto_photo_scope": 2,
        "account_auto_manage": 1,
        "auto_manage_type": 1,
        "create_type": 1,
        "description": "后悔看的太快，年度爆款出圈小说，强烈推荐！",
        "auax_project_id": 3994548,
        "put_status": 2,
        "book_info": {
          "id": 3331405,
          "book_name": "测试连载小说-全文付费"
        },
        "kol_user_type": 1,
        "kol_user_info": {
          "user_id": 2022036857,
          "user_name": "饺子好吃"
        },
        "name": "书籍优选601",
        "ocpx_action_type": 191,
        "series_info": null
      }
    ],
    "page_size": 10
  },
  "message": "OK",
  "request_id": "ELaAgIDgtsGcChi8BSDWqIH4jjMo08r55g8="
}
```
