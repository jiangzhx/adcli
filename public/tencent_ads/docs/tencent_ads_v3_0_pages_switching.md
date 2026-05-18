---
title: MKTAPI 切换节奏
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/switching
doc_id: tencent_ads_v3_0_pages_switching
source_id: tencent_ads_v3_0_pages_switching
---
# MKTAPI 切换节奏

预计 2024 年 4 月 1 日起，将 分行业 陆续停止 广告主 通过 旧版 API 创建/编辑/开启/复制 信息流广告&创意，涉及接口如下：

| 接口名称 | 请求地址 |
| --- | --- |
| 创建广告 | adgroups/add |
| 更新广告 | adgroups/update |
| 创建创意 | adcreatives/add |
| 更新创意 | adcreatives/update |
| 更新广告组日限额信息 | adgroups/update_daily_budget |
| 更新广告组状态 | adgroups/update_configured_status |
| 更新广告组出价 | adgroups/update_bid_amount |
| 更新广告组投放时间 | adgroups/update_datetime |

注：（1）暂不影响搜索广告、合约广告的新建/编辑/开启/关闭/删除等操作（2）可以根据 获取广告主 3.0 投放状态版本接口（account_version/get）获取广告主 当前的可投放的版本信息，当进入引导期后尽快切换至 3.0，切换状态如下：

| 迁移周期 | 说明 |
| --- | --- |
| 引导期 | 引导期 目的是提示广告主 即将禁止通过 旧版 API 创建/编辑/开启/复制 信息流广告&创意 |
| 切换期 | 进入切换期后，停止 广告主 通过 旧版 API 创建/编辑/开启/复制 信息流广告&创意 |

预计 2024 年 4 月 30 日，全面停止 广告主 通过 旧版 API 创建/编辑/开启/复制 信息流广告&创意，其余老版接口将陆续进行下线（预计 930 会下线所有 2.0 写接口），开发者需要及时切换到新投放 3.0 接口，避免服务中断。
