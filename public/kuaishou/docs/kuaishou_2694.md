---
title: 升级定向模板
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2694&menuId=3428
doc_id: kuaishou_2694
source_id: kuaishou_2694
---
# 升级定向模板

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2694 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:12:51.950Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/target/template/upgrade |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| template_id | Long |  |  | 模板ID | 模板ID不为空时会指定升级该模板，当模板ID为空时，会更新账户下所有需要升级的模板 |

## 请求样例

### 请求样例 (jsonc)

```
{
  "template_id": 12321312
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | TemplateUpgradeCountRespSnake |  |  | 返回json体 |  |
| - template_count | Long |  |  | 升级了的模板总数 |  |
| message | String |  |  | 错误详情 |  |
| code | Integer |  |  | 返回码 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
	"data": {
		"template_count": 1
	},
	message: "",
	code: 0
}
```
