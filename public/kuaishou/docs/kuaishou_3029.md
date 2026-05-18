---
title: 魔力建站落地页信息查询接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3029&menuId=3537
doc_id: kuaishou_3029
source_id: kuaishou_3029
---
# 魔力建站落地页信息查询接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3029 |
| documentType | 2 |
| version | 0.0.3 |
| bizName | 魔力建站 |
| createTime | 2025-07-21T11:29:12.095Z |

## 概述

功能：精确/模糊条件查找落地页信息

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/lp/page/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| page_component_type | Integer[] |  | - | 落地页组件类型 |  |
| advertiser_id | Long |  |  | 广告主 ID |  |
| page_name | Long |  |  | 落地页名称 |  |
| view_comps | Integer[] |  |  | 组件列表 |  |
| component_ref_ids | String[] |  |  | 组件中线索通ID（如：小游戏ID），和view_comps类型对应 ， |  |
| fiction_ids | String[] |  |  | 小说 ID 列表 |  |
| is_page_group | Boolean |  |  | 是否可创建程序化落地页组 |  |
| page | Integer |  |  | 页码 |  |
| page_size | Integer |  |  | 页大小 |  |
| select | String |  |  | 支持pageId精准和pageName的模糊查询 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | MagicSitePageRespGW |  |  | 落地页列表 |  |
| - total_count | Integer |  |  | 总数 |  |
| - details | MagicSitePageInfoGW[] |  |  | 落地页列表 |  |
| - page_component_type | Integer[] |  | 1 | 落地页组件类型 |  |
| - audit_status | Integer |  |  | 审核状态：1 草稿 ，2 审核中，3 审核通过，4 审核拒绝 |  |
| - id | Long |  |  | 落地页ID |  |
| - url | String |  |  | 落地页链接 |  |
| - fiction_id | Long |  |  | 落地页绑定的小说 ID |  |
| - biz_type | Integer |  |  | 投放类型 |  |
| - create_time | String |  |  | 创建时间 |  |
| - update_time | String |  |  | 修改时间 |  |
| - conversion_type | String[] |  |  | 落地页包含的转化组件类型 |  |
| - comps | PageComponentInfoGW[] |  |  | 组件列表 |  |
| - props | PageComponentPropInfoGW |  |  | 组件属性信息 |  |
| - buttonText | String |  |  | type = 34 时，小游戏类型有值 按钮文案 |  |
| - appId | Long |  |  | appID |  |
| - wechatGameId | Long |  |  | type = 34 时，小游戏类型有值 小游戏id |  |
| - gameName | Long |  |  | type = 34 时，小游戏类型有值 小游戏名称 |  |
| - description | String |  |  | type = 34 时，小游戏类型有值 小游戏说明 |  |
| - id | Long |  |  | 组件id |  |
| - type | Integer |  |  | 组件类型 | [组件类型 type sub_type] [图片 0 0-普通图片 1-图片链接 2-图片安卓下载 3-图片快应用 4-图片-iOS下载 5-图片建站链接 6-多图样式 7-多图样式-链接] [文本 1 0-文本 1-文本链接 表单 2 0-表单] [按钮 3 0-按钮 1-微信小游戏跳转按钮 2-OPPO小游戏跳转按钮 3-QQ小游戏跳转按钮 4-cid-淘宝 5-cid-天猫 6-cid-京东 7-cid-拼多多 8-cid-微信商城 9-小程序应用] [轮播图 4 0-单轮播图 1-多组轮播图] [视频 5 0-视频] [地图 6 0-地图] [应用下载 7 0-应用下载-安卓 1-下载应用-快应用 2-应用下载-iOS 3-应用下载-鸿蒙] [图层文本 9 0-图层文本 1-图层文本-链接] [图层图片 10 0-图层图片 1-图层图片-链接 2-图层图片-安卓下载 3-图层图片-快应用 4-图层图片-iOS下载] [咨询客服 11 0-咨询客服-三方客服 1-咨询客服-快聊 2-咨询客服-私信] [电话 12 0-手机 1-固定电话 2-智能电话] [多线咨询 13 0-多线咨询-ALL 1-多线咨询-客服+电话 2-多线咨询-客服+表单 3-多线咨询-电话+表单 4-多线咨询-电话 5-多线咨询-客服 6-多线咨询-表单 7-多线咨询-ALL（电话为智能电话） 8-多线咨询-客服+智能电话 9-多线咨询-智能电话+表单 10-多线咨询-智能电话] [新表单 14 0-新表单 1-分步表单 2-分步表单答题样式] [微信号码组件 15 0-微信-单个号码 1-微信-号码包 2-微信-单个号码-二维码扫码 3-微信-号码包-二维码扫码 4-微信-单个号码-小程序 5-微信-号码包-小程序 6-微信-单个号码-公众号直达 7-企业微信加粉方案 8-企业微信获客助手方案 9-企业微信获客助手方案组] [空白占位 16 0-空白占位] [互动记录 17 0-互动记录] |
| - name | String |  |  | 组件名称 |  |
| - sub_type | Integer |  |  | 组件子类型 | [小说 18 0-小说] [门店 29 0-门店 1-门店-简约样式-全部门店 2-门店-简约样式-门店包 3-门店-简约样式-单门店 4-门店-丰富样式-全部门店 5-门店-丰富样式-门店包 6-门店-丰富样式-单门店] [支付表单 30 0-支付表单] [门店页 31 0-门店页-全部 1-门店页-门店包 2-门店页-单门店] [倒计时 32 0-丰富样式倒计时组件 1-简约样式倒计时组件 2-基础样式倒计时组件] [卡券 33 0-活动卡券-基础样式 1-活动卡券-底部样式 2-活动卡券-红包样式] [微信小游戏 34 0-微信小游戏] [权限详情组件 35 0-权限详情组件] [元素组件 36 0-元素组件] [顶部返回组件 37 0-顶部返回组件] [商户信息组件 38 0-商户信息组件 ] [金币PEC样式组件 39 0-金币PEC样式组件] [活动码组件 40 0-活动码组件] [应用描述组件 41 0-应用描述组件] [隐私组件 42 0-隐私组件] [多行文本 43 0-多行文本 ] [咨询页 44 0-咨询页-三方客服 1-咨询页-快聊客服 2-咨询页-私信客服] [跑马灯 45 0-跑马灯] [转化样式组件 46 0-转化样式组件] |
| - name | String |  |  | 落地页名称 |  |
| - cover_img_url | String |  |  | 落地页封面图 |  |
| code | Integer |  |  | code码 |  |
| message | String |  |  | 提示信息 |  |

## 原始内容

```
魔力建站落地页信息查询接口 /rest/openapi/v2/lp/page/list page_component_type Integer[] 落地页组件类型 advertiser_id Long 广告主 ID page_name Long 落地页名称 view_comps Integer[] 组件列表 component_ref_ids String[] 组件中线索通ID（如：小游戏ID），和view_comps类型对应 ， fiction_ids String[] 小说 ID 列表 is_page_group Boolean 是否可创建程序化落地页组 page Integer 页码 page_size Integer 页大小 select String 支持pageId精准和pageName的模糊查询 data MagicSitePageRespGW 落地页列表 total_count Integer 总数 details MagicSitePageInfoGW[] 落地页列表 page_component_type Integer[] 落地页组件类型 audit_status Integer 审核状态：1 草稿 ，2 审核中，3 审核通过，4 审核拒绝 id Long 落地页ID url String 落地页链接 fiction_id Long 落地页绑定的小说 ID biz_type Integer 投放类型 create_time String 创建时间 update_time String 修改时间 conversion_type String[] 落地页包含的转化组件类型 comps PageComponentInfoGW[] 组件列表 props PageComponentPropInfoGW 组件属性信息 buttonText String type = 34 时，小游戏类型有值 按钮文案 appId Long appID wechatGameId Long type = 34 时，小游戏类型有值 小游戏id gameName Long type = 34 时，小游戏类型有值 小游戏名称 description String type = 34 时，小游戏类型有值 小游戏说明 id Long 组件id type Integer 组件类型 name String 组件名称 sub_type Integer 组件子类型 name String 落地页名称 cover_img_url String 落地页封面图 code Integer code码 message String 提示信息
```
