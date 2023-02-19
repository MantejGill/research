---
date: '01-01-2022'
title: 'An improved forecasting algorithm for Power and CPU data of a server'
external: 'https://drive.google.com/file/d/1cr6Xczzc7oUeQI0x78ygbs2zpFm2hw5d/view?usp=sharing'
tech:
  - Data Centric AI
  - Time Series
  - Improving Forecasting
company: 'Hewlett Packard Enterprise'
showInProjects: false
---

A server’s Power and CPU time-series datasets are jagged, containing numerous local maxima and minima that imply vital information about the workloads or applications executing on that server. Most existing state-of-the-art forecasting algorithms successfully predict long-term trends and seasonality but fail to predict short-term minima and maxima (jaggedness), producing inaccurate results for CPU and Power forecasting of servers. The inventors have devised a novel forecasting algorithm to address this problem by developing an add-on custom model to forecast the short-term jagged results, which runs parallel with the existing state-of-the-art time series models. They have proven the algorithm’s advantage by comparing it with state-of-the-art forecasting algorithms against power supply datasets of 7 servers, where they see a reduction in the average RMSE error by 0.556.
