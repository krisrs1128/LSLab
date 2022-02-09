---
layout: paper
title: Source data selection for out-of-domain generalization
authors: Xinran Miao and Kris Sankaran
image: /assets/img/source_selection.png
abstract: Models that perform out-of-domain generalization borrow knowledge from heterogeneous source data and apply it to a related but distinct target task. Transfer learning has proven effective for accomplishing this generalization in many applications. However, poor selection of a source dataset can lead to poor performance on the target, a phenomenon called negative transfer. In order to take full advantage of available source data, this work studies source data selection with respect to a target task. We propose two source selection methods that are based on the multi-bandit theory and random search, respectively. We conduct a thorough empirical evaluation on both simulated and real data. Our proposals can be also viewed as diagnostics for the existence of a reweighted source subsamples that perform better than the random selection of available samples.
journal: Under review.
code: https://github.com/XinranMiao/source_selection
---
