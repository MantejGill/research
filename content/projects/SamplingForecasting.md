---
date: '01-01-2023'
title: 'Improved ensemble forecasting algorithm using time-series data sampled at multiple intervals'
external: 'https://drive.google.com/file/d/1cr6Xczzc7oUeQI0x78ygbs2zpFm2hw5d/view?usp=sharing'
tech:
  - Data Centric AI
  - Time Series
  - Resampling
company: 'Hewlett Packard Enterprise'
showInProjects: false
---

Analytics teams need a suitable sampling rate to ensure that time-series data is granular enough to detect patterns in sensor readings of peripherals connected to the server (CPU/Power/IO) but not too granular to analyze. Thus, many teams store the same data at different sampling rates to avoid pattern loss, but this costs more. It's also common to test different resampling intervals to find the best one. However, once chosen, the sampling rate rarely changes throughout the ML solution's lifecycle, leading to missed patterns (for large sampling rates) or high computation costs (in case of small sampling rates). Therefore, the authors propose a novel algorithm that can use data sampled at multiple intervals, with an on-the-fly approach, to improve predictions. The proposed novel algorithm has improved RMSE values by up to 8.8, and on average by 2.6, for power data forecasts from existing best-performing models, across 6 HPE servers. Thus, the algorithm will create better predictions and save costs for analytics teams.
