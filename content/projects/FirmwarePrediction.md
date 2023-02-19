---
date: '01-01-2022'
title: 'Maintenance time window prediction'
external: 'https://drive.google.com/file/d/1U6k0Gz2TjM-qBosDpU1pO4C7bv33xGD_/view?usp=sharing'
tech:
  - Ensemble Modelling
company: 'Hewlett Packard Enterprise'
showInProjects: false
---

An approach to predict firmware and software deployment maintenance time windows in servers. They utilize server update logs to extract and create a dataset containing features linked to historical firmware and software components' deployments. This dataset is used to train an XGBRegressor model to predict the deployment time of newer components with a low Mean Absolute deployment time error of 12.230 (±3.390) seconds across 1800 components. The predicted deployment times are summed up to calculate the final maintenance time window, which will be presented to server customers and server component update tools.
