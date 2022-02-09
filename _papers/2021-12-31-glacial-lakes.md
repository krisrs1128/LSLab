---
layout: paper
title: Estimating Glacial Lake Trends using Historically Guided Segmentation Models
authors: Anthony Ortiz, Weiyushi Tian, Tenzing C. Sherpa, Finu Shresta, Mir Matin, Rahul Dodhia, Juan M. Lavista Ferres, and Kris Sankaran
image: /assets/img/glacial_lakes_jstars.png
abstract: We compare several approaches to segmenting glacial lakes in the Hindu Kush Himalayas in order to support glacial lake area monitoring. More automatic monitoring could support risk assessments of Glacial Lake Outburst Floods (GLOF), a type of natural hazard that poses a risk to communities and infrastructure living in valleys below glacial lakes. We evaluate several approaches to incorporate labels from a 2015 survey using Landsat 7 imagery to guide segmentation on newer higher resolution satellite images like Sentinel 2 and Bing Maps imagery, comparing them also to approaches that do not use this form of weak prior. We find that a guided-version of U-Net and a properly initialized form of morphological snakes are most effective for these two datasets, respectively, each providing between an 8 - 10% IoU improvement over a standard U-Net. An error analysis highlights the strengths and limitations of each approach. We design visualizations to support discovery of lakes of potential concern, including an interactive exploratory interface. All code supporting our study are released in public repositories
journal: Under review.
pdfurl: /assets/papers/glacial_lakes_jstars.pdf
code: https://github.com/anthonymlortiz/icimod.glacial-lakes-baselines
---
