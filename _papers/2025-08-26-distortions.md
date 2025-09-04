---
layout: paper
title: "Interactive Visualization of Metric Distortion in Nonlinear Data Embeddings using the distortions Package"
authors: Kris Sankaran, Shuzhen Zhang, Chenab, Marina Meila
image: /assets/img/distortions-pbmc.gif
abstract: Nonlinear dimensionality reduction methods like UMAP and t-SNE can help to organize high-dimensional genomics data into manageable low-dimensional representations, like cell types or differentiation trajectories. Such reductions can be powerful, but inevitably introduce distortion. A growing body of work has demonstrated that this distortion can have serious consequences for downstream interpretation, for example, suggesting clusters that do not exist in the original data. Motivated by these developments, we implemented a software package, distortions, which builds on state-of-the-art methods for measuring local distortion and displays them in an intuitive and interactive way. Through case studies on simulated and real data, we find that the visualizations can help flag fragmented neighborhoods, support hyperparameter tuning, and enable method selection. We believe that this extra layer of information will help practitioners use nonlinear dimensionality reduction methods more confidently. The package documentation and notebooks reproducing all case studies are available online at https://krisrs1128.github.io/distortions/site/.
pdfurl: /assets/papers/distortions.pdf
code: https://krisrs1128.github.io/distortions/site
journal: Under Review
journalurl: https://doi.org/10.1101/2025.08.21.671523
---