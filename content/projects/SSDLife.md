---
date: '01-01-2022'
title: 'An analytical method to improve the life of an SSD drive in a server'
external: 'https://drive.google.com/file/d/1cr6Xczzc7oUeQI0x78ygbs2zpFm2hw5d/view?usp=sharing'
tech:
  - Remaining life of SSD Drive
company: 'Hewlett Packard Enterprise'
showInProjects: false
---

Data Center SSDs are used for high-speed, high-performance data storage requirements. The SSD technology has improved tremendously over the years to incorporate techniques like wear levelling to efficiently reduce the number of write-erase cycles in SSDs. However, performance degradation over time is a significant issue in SSDs even today. Here we have an AutoML-based approach for determining the wear or performance degradation of an SSD. Most SSDs use NAND technology to store data. Once the drive is full, old data must be deleted to provision new data. This Read – Write – Erase cycle in an SSD results in the degradation of the oxide layer within the NAND. This degradation eventually makes an LBA invalid resulting in errors. SSDs have wear provisioning mechanisms where spare space is allocated to handle these invalid LBAs. However, wear provisioning is limited, and the drive starts failing as the number of NAND errors increases. The wear level is also used to determine if the drive qualifies for the manufacturer’s warranty. If the level of wear is high because of the drive's overuse, the drive's warranty becomes invalid. The inventors discuss a method that continuously monitors a drive's wear status and calculates the time left before the drive reaches 100% wear status to notify the user about the overuse of the drive. This can help the user redistribute the load on a drive or reduce the number of write/erase cycles, thereby ensuring that the warranty remains intact.
