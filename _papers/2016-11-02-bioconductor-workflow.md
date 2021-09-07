---
layout: paper
title: Bioconductor Workflow for Microbiome Data Analysis - from raw reads to community analyses
authors: Ben Callahan, Kris Sankaran, Julia Fukuyama, Paul Joey McMurdie, Susan P Holmes
image: /assets/papers/f1000.gif
abstract: High-throughput sequencing of PCR-amplified taxonomic markers (like the 16S rRNA gene) has enabled a new level of analysis of complex bacterial communities known as microbiomes. Many tools exist to quantify and compare abundance levels or OTU composition of communities in different conditions. The sequencing reads have to be denoised and assigned to the closest taxa from a reference database. Common approaches use a notion of 97% similarity and normalize the data by subsampling to equalize library sizes. In this paper, we show that statistical models allow more accurate abundance estimates. By providing a complete workflow in R, we enable the user to do sophisticated downstream statistical analyses, whether parametric or nonparametric. We provide examples of using the R packages dada2, phyloseq, DESeq2, ggplot2 and vegan to filter, visualize and test microbiome data. We also provide examples of supervised analyses using random forests and nonparametric testing using community networks and the ggnetwork package.
journal: F1000 Research. November 2, 2016. https://doi.org/10.12688/f1000research.8986.2
journalurl: https://f1000research.com/articles/5-1492/v2
pdfurl: /assets/papers/f1000.pdf
code: https://github.com/spholmes/F1000_workflow
---
