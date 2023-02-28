---
date: '4'
title: 'Maintenance time window prediction'
overline: 'Patent Application Number: 18/146,096'
cover: './firmware_pred.png'
external: 'https://drive.google.com/file/d/1q908VIG9_mhyfUklhzcRgeciOhl8pwZl/view?usp=sharing'
tech:
  - Ensemble Modelling
---

The approach aims to predict maintenance time windows for firmware and software deployment in servers. They create a dataset containing features linked to historical firmware and software component deployments using server update logs. An XGBRegressor model is trained on this dataset to predict deployment time with low error rates. Predicted deployment times are used to calculate the final maintenance time window, which is presented to server customers and update tools for better planning and management. The approach aims to improve maintenance planning and minimize disruption caused by server component deployments.
