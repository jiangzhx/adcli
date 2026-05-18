---
title: 实验数据查询 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/rtaexp_data_roi/get
doc_id: tencent_ads_v3_0_docs_api_rtaexp_data_roi_get
source_id: tencent_ads_v3_0_docs_api_rtaexp_data_roi_get
---
# 实验数据查询 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | rtaexp_data_roi/get |
| 请求方法 | POST |
| Content-Type | application/json |

## 全局参数

全局参数是指每一个接口都需要使用到的参数。详情[参考](https://developers.e.qq.com/v3.0/pages/send_request)，代码案例[参考](https://developers.e.qq.com/v3.0/pages/send_request)。

| 参数名称 | 参数类型 |
| --- | --- |
| access_token | 授权令牌，完成 OAuth 2.0 授权后获得，参考[授权认证](https://developers.e.qq.com/docs/start/authorization)章节 |
| timestamp | 当前的时间戳，单位为秒，允许客户端请求最大时间误差为 300 秒。 MarketingAPI 所使用的时间戳，若无特殊说明，均为秒级时间戳 MarketingAPI 所使用的时区为 GMT+8，例如当时间戳为 1494840119 时，表示 2017-05-15 17:21:59 |
| nonce | 随机字串标识，不超过 32 个字符，由调用方自行生成，需保证全局唯一性 |

## 请求参数

标有*的参数为必填项

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| data* | struct | 实验数据查询信息 |
| Granularity | string | 时间粒度，仅支持：hour,day，分别是小时、天。粒度对应的查询范围不同；小时粒度的支持 3 天内的数据查询（起止时间跨度不超过 48 小时）；天数据支持 20 天内数据查询（起止时间跨度不超过 14 天） |
| BeginTime* | integer | 开始时间，格式 202011011500 |
| EndTime* | integer | 结束时间，格式 202011012300 |
| ExpId* | integer[] | 查询的实验 id 列表，最多 20 个 |
| UId | string | 广告主 id，多个以英文逗号分隔，最多 500 |
| AppId | string | APP id，多个以英文逗号分隔，最多 500 |
| CId | string | 推广计划 id，多个以英文逗号分隔，最多 500 |
| AId | string | 广告 id，多个以英文逗号分隔，最多 500 |
| UserWeight | string | 用户权重，取值 1-10，多个以英文逗号分隔 |
| DeviceOsType | string | 操作系统枚举值，多个以英文逗号分隔。枚举值：0：未知 1：IOS 2：ANDROID 3：WINDOWS 4：SYMBIAN 5：JAVA |
| TotalFlag | integer | 是否汇总，0：不汇总 1：汇总，不传默认不汇总 |
| AdvancedFields | string[] | 支持指定数据指标后查询，接口将返回本文档已暴露的指标+自定义指标 |
| GroupBy | string[] | 展开字段列表，指定 GroupBy 后，对应的 UId/AppId/CId/AId/UserWeight/UserWeightFactor 不能为空。仅支持 advertiser_id,campaign_id,app_id,ad_id,user_weight,device_os_type,user_weight_factor。注：按照 ad_id 维度展开时，必须传入参数 data.AId |
| IsMp | integer | 参数中的 AId 和 CId 是否来源 MP 投放平台，0：否 1：是；默认 0：否，请务必填写正确 |
| ReportType | integer | 数据统计口径，0：播放口径 1：到达口径； |
| UserWeightFactor | string | 用户加权系数，8 月 9 日前取值 0~11，多个使用英文逗号分隔，依次对应 0、(0,0.5)、[0.5,1)、[1,1.5)、[1.5,2)、[2,2.5)、[2.5,3)、[3,3.5)、[3.5,4)、[4,4.5)、[4.5,5)、[5~)。8 月 9 日后的数据，加权系数可查看区间与取值的关系见：[\[此文档\]](https://docs.qq.com/sheet/DVGNMWGhDcUxsR05y?tab=BB08J2)。 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/rtaexp_data_roi/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "data": {
        "ExpId": [],
        "AdvancedFields": [],
        "GroupBy": []
    }
}'
curl 'https://api.e.qq.com/v3.0/rtaexp_data_roi/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "data": {
        "ExpId": [],
        "AdvancedFields": [],
        "GroupBy": []
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| Records | struct[] | 实验数据列表 |
| time | integer | 时间，格式（小时维度）2022091423、（天维度）20220914 或（汇总）99999 |
| exp_id | integer | 实验 id |
| group_info | struct | 展开维度信息 |
| cost | float | 消耗 |
| exposure | integer | 曝光 |
| click | integer | 点击 |
| cpm | float | cpm |
| cpc | float | cpc |
| ctr | float | ctr |
| conversion | integer | 转化量 |
| conversion_second | integer | 转化量，第二目标 |
| cvr | float | cvr |
| cvr_second | float | cvr，第二目标 |
| og_6 | float | 优化目标-关注 |
| og_7 | float | 优化目标-点击 |
| og_104 | float | 优化目标-激活 |
| og_105 | float | 优化目标，注册(App) |
| og_119 | float | 优化目标-授信 |
| og_121 | float | 优化目标-广告变现 |
| og_204 | float | 优化目标-下单 |
| og_205 | float | 优化目标-付费 |
| og_301 | float | 优化目标-关键页面访问 |
| og_405 | float | 优化目标-表单预约 |
| og_409 | float | 优化目标-有效线索 |
| og_10801 | float | 优化目标-首次付费 |
| og_318 | integer | 优化目标-预授信 |
| og_302 | integer | 优化目标-H5 注册 |
| og_406 | integer | 优化目标-完件 |
| og_120 | integer | 优化目标-提现 |
| bo_6 | integer | 推广目标-公众号关注次数 |
| bo_7 | integer | 推广目标-公众号内下单人数 |
| bo_23 | integer | 推广目标-关键页面访问 |
| bo_25 | integer | 推广目标-公众号内注册人数 |
| bo_26 | integer | 推广目标-公众号内发消息 |
| bo_41 | integer | 推广目标-公众号内付费人数 |
| 101_conversion_cost | float | 下单单价 |
| 204_amount | float | 下单金额 |
| 204_roi | float | 下单 roi |
| 204_roi_fd | float | 首日下单 roi |
| 204_roi_tw | float | 3 日下单 roi |
| 204_roi_ow | float | 7 日下单 roi |
| 204_roi_td | float | 15 日下单 roi |
| 204_roi_om | float | 30 日下单 roi |
| order_cost | float | 下单成本 |
| order_count | integer | 下单量 |
| roi | float | roi |
| og_412 | integer | 优化目标-加企业微信客服 |
| md_mg_purchase_uv | integer | 小游戏首次付费人数 |
| md_mg_purchase_val_1 | integer | 小游戏首日付费金额，广告主回传，单位：分 |
| md_mg_purchase_val | integer | 小游戏付费金额，单位：分 |
| weapp_reg | integer | 小游戏注册人数 |
| og_10 | integer | 跳转按钮点击 |
| install_count | integer | 安装量 |
| og_106 | integer | 次日留存 |
| 107_count | integer | 加入购物车数 |
| og_108 | integer | 完成购买数量 |
| og_114 | integer | 小游戏创角 |
| og_115 | integer | 小游戏授权 |
| og_112 | integer | 快应用加桌面 |
| og_202 | integer | 商品收藏 |
| og_307 | integer | 领券 |
| og_315 | integer | 浏览量 |
| og_316 | integer | 阅读文章 |
| 402_at_count | integer | 开口数量 |
| og_403 | integer | 电话拨打 |
| send_goods | integer | 发货量，或发货次 |
| sign | integer | 签收量，或签收次 |
| og_411 | integer | 公众号外链 |
| og_413 | integer | 选课 |
| og_418 | integer | 外链点击 |
| og_419 | integer | 购券 |
| og_501 | integer | 打开公众号 |
| og_503 | integer | 关注后点击菜单栏 |
| og_10000 | integer | 综合线索收集 |
| og_10004 | integer | 首次购买会员 |
| og_10006 | integer | 微信流量预约行为 |
| og_10007 | integer | 首次下单 |
| og_10008 | integer | 点赞 |
| og_10009 | integer | 咨询留资 |
| og_10601 | integer | 次留 |
| og_421 | integer | 加群 |
| 409_405_at_rate | float | 表单有效率 |
| 409_at_cost | float | 有效销售线索成本 |
| 409_at_count | integer | 有效销售线索数量 |
| 415_at_cost | float | 试驾成本 |
| 415_at_count | integer | 试驾数量 |
| 405_at_cost | float | 表单预约成本，单位：元 |
| 405_at_count | integer | 表单预约量 |
| 108_at_cost | float | 完成购买成本，单位：元 |
| 108_at_count | integer | 完成购买量 |
| aog_119_action | integer | 授信数 |
| cvr_click_119 | float | 点击授信率 |
| finance_credit_pcvr_after_cali_bias | float | pcvrbias，金融 pdcvr 修正后的授信(校准后) |
| finance_credit_pcvr_before_cali_bias | float | pcvrbias，金融 pdcvr 修正后的授信(校准前) |
| aog_406_action | integer | 完件数 |
| cvr_click_406 | float | cvr，金融 pdcvr 的完件 |
| finance_apply_original_pcvr_bias | float | 原始 pcvrbias，金融 pdcvr 的完件 |
| industry_finance_apply_pcvr_bias | float | pcvrbias，金融 pdcvr 的完件 |
| active_cost | float | 激活成本 |
| active_register_rate | float | 激活注册率 |
| md_acti_pur_val | float | 付费金额，激活口径 |
| md_acti_pur_val_fd_roi | float | 激活首日付费 ROI |
| md_pur_val_14 | float | 14 日付费金额，激活口径 |
| md_pur_val_3 | float | 3 日付费金额，激活口径 |
| md_pur_val_30 | float | 30 日付费金额，激活口径 |
| md_pur_val_3_roi | float | 激活 3 日付费 ROI |
| md_pur_val_7 | float | 7 日付费金额，激活口径 |
| md_pur_val_7_roi | float | 激活 7 日付费 ROI |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "Records": []
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
