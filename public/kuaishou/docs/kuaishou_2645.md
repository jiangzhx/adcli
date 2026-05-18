---
title: 魔力建站更新落地页Cid信息
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2645&menuId=3370
doc_id: kuaishou_2645
source_id: kuaishou_2645
---
# 魔力建站更新落地页Cid信息

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2645 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 魔力建站 |
| createTime | 2024-07-04T12:22:18.960Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/page/cid/info/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 100 | 广告主账户ID |  |
| page_id | String | 是 | 1000 | 落地页ID | 查询落地页列表接口获取 |
| plat_form_type | String | 是 | PDD | 电商平台类型 | 更新链接的电商平台类型：PDD：拼多多, WECHAT_MALL:微信商城，TAO_BAO：淘宝，tmall：天猫，JD：京东 |
| deep_link_url | String | 是 |  | 跳转链接 | 更新落地页中按钮组件 — 跳转应用 — 跳转链接如：taobao://huodong.m.taobao.com/act/snipcode.htm |
| fallback_h5_url | String |  |  | h5链接 | 更新落地页中按钮组件 — 跳转应用 — H5链接如：https://www.taobao.com |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/page/cid/info/update' \
--header 'access-token:xxxxxxxxxx' \
--header 'Content-Type: application/json' \
--data-raw '{
  "page_id": "1",
  "plat_form_type": "TAO_BAO",
  "deep_link_url": "tbopen://m.taobao.com/tbopen/index.html?12323126",
  "fallback_h5_url": "http://www.baidu.com?page4",
  "advertiser_id": "0"
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 更新状态 | 0 操作成功 |
| message | String |  | 成功 | 提示信息 | 提示信息 |
| data | UpdatePageCidInfoRespGw |  |  | 更新状态 | json结构体 |
| - page_id | String |  | 100 | 落地页id | 更新成功的落地页ID |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "data": {
    "page_id": "12"
  },
  "message": "OK",
  "request_id": "EO-AgIDglZmOrAEYqAIg9LehrNkwKJ_on_QB"
}
```
