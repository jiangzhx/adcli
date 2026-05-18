---
title: 投放端联调工具
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/debugger-tool
doc_id: tencent_ads_v3_0_pages_debugger_tool
source_id: tencent_ads_v3_0_pages_debugger_tool
---
# 投放端联调工具

# 背景

3.0 时代，ADQ 投放端也开始全面基于 Marketing API 3.0 来进行广告的创编、管理等功能，为了让开发者能够更加简便、快捷搭建广告投放与管理能力，本次 3.0 升级，ADQ 投放端也会逐步将一些开发模式开放出来可以作为参考。

# 用途

可以在 ADQ 投放端打开调试模式，实现可视化边操作边获得对应的 API 接口提交数据以及调用记录信息参考。

# 使用方式

## 如何开启：

进入 3.0 新版投放流程后，URL 上手动增加 apiDevTool=true 参数，如：[https://ad.qq.com/atlas/25610/addelivery/adgroups-add?apiDevTool=true](https://ad.qq.com/atlas/25610/addelivery/adgroups-add?apiDevTool=true)（创意页面同理）。

## 如何使用：

获得页面提交数据（实时操作联动获得页面提交数据）。

获得当前页面调用 Marketing API 3.0 接口信息。

移动调试工具。 为了避免在小屏幕下调试工具遮挡到操作区域，工具的“标题区域”支持拖拽移动。
