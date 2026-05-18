---
title: 查询模板关联广告组
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2689&menuId=3423
doc_id: kuaishou_2689
source_id: kuaishou_2689
---
# 查询模板关联广告组

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2689 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-23T02:42:13.663Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/target/template/related_unit_list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| template_id | Long |  |  | 模板ID |  |
| template_name | String |  |  | 请补充描述详情 |  |
| current_page | Integer |  |  | 当前页码 |  |
| page_size | Integer |  |  | 每页大小 |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 90001532624,
    "template_id": 310222,
    "current_page": 1,
    "page_size": 2
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListTemplateRelatedAdThumbnailResp688Snake |  |  | 返回json数据 |  |
| - current_page | Integer |  |  | 当前页码 |  |
| - details | TemplateRelatedAdThumbnailResp691Snake[] |  |  | 数据详情 |  |
| - auto_adjust | Integer |  |  | 计划是否开启自动调控 |  |
| - auto_build | Integer |  |  | 计划是否开启自动基建 |  |
| - auto_manage | Integer |  |  | 计划是否开启智能模式 |  |
| - campaign_id | Long |  |  | 计划ID |  |
| - campaign_name | String |  |  | 计划名称 |  |
| - unit_id | Long |  |  | 广告组ID |  |
| - unit_name | String |  |  | 广告组名称 |  |
| - unit_view_status | Integer |  |  | 广告组状态 |  |
| - unit_view_status_reason | String |  |  | 广告组状态描述 |  |
| - page_size | Integer |  |  | 每页大小 |  |
| - total_count | Long |  |  | 总数 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 错误详情 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "total_count": 45,
        "details": [
            {
                "auto_build": 1,
                "unit_name": "系统自动搭建_202212262",
                "campaign_name": "学习期+提升应用安装",
                "auto_manage": 0,
                "auto_adjust": 1,
                "unit_view_status": 14,
                "unit_id": 1914608,
                "campaign_id": 532504,
                "unit_view_status_reason": "广告组投放到期下线"
            },
            {
                "auto_build": 1,
                "unit_name": "系统自动搭建_202212261",
                "campaign_name": "学习期+提升应用安装",
                "auto_manage": 0,
                "auto_adjust": 1,
                "unit_view_status": 14,
                "unit_id": 1914607,
                "campaign_id": 532504,
                "unit_view_status_reason": "广告组投放到期下线"
            }
        ],
        "current_page": 1,
        "page_size": 2
    },
    "message": "OK",
    "request_id": "EMyAgICw0JiOrAEY5AIgvuKL8eYwKKWMvqcD"
}
```
