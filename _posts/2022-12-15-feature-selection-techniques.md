---
layout: post
title: "A Review of Feature Selection Techniques in Machine Learning"
author: "Amandeep Singh Khanna"
tags: blog
html_page_title: A Review of Feature Selection Techniques in Machine Learning
---

<style>
    .image-annotation{
        font-size: 0.6em;
        text-align: center;
    }
</style>


## Abstract:

In the current age of data, many real-world domains provide a high volume of features in data. Many of these additional features seem irrelevant, forcing the machine learning algorithms to generalize worse when compared to an optimal subset of these features. Feature selection techniques identify the optimal feature set that can enable machine learning algorithms to operate faster and more effectively. In this survey, I review advances in feature selection techniques in both empirical and theoretical work in machine learning and present a general framework used to compare different strategies, closing with challenges and further research prospects in the area.

## Keywords: 
*Feature Selection*, *Feature Subset Selection*

## Introduction:

A feature is an individual measurable property of a process being observed **[1]**. All the features in the data used to train and develop a machine learning/statistical model are collectively known as the feature space. It has been widely noted that the subset of features from the feature space drastically impact the performance/robustness of the model. Features used in the model can be broadly grouped into four main groups based on how they impact the performance/robustness of the model **[2, 3]**:

- **Strongly relevant** – Significantly improves the performance and cannot be replaced by any other feature in the feature space.

- **Weakly relevant** – Improves the performance of the model, but with a much lesser magnitude in comparison to the strongly relevant features in the feature space.

- **Redundant** – Improves the performance of the model individually, but it has a similar effect as one on more features in the feature space. Redundant features can be replaced by the other features in the feature space.

- **Irrelevant** – Decrease or no improvement in the performance of the model. Removal of these features improves the performance/robustness of the model. 

A core objective of the feature selection process is to identify and eliminate redundant and irrelevant features from the model **[4]**. The reduction in dimensions of the feature space reduces the overall complexity of the model, aiding in better generalized learning of the model (i.e., prevents the model from over-fitting) **[5]**. A significant reduction in memory storage requirements and computational requirements for the analysis is also a by-product of the feature selection process **[7]**.

In terms of availability of labeled data, feature selection techniques can be grouped into three main groups – Supervised methods, Semi-Supervised methods, Unsupervised methods **[6]**. Based on the relevant feature search strategy, feature selection techniques can be grouped into three main groups – Wrapper, Filter, Embedded **[6]**.

<img title="Feature Selection Techniques Flowchart Image" alt="Feature Selection Techniques Flowchart Image" src="https://i.imgur.com/suhObey.png">
<span class="image-annotation">Fig. 1 Feature selection techniques classified on the basis of availability of labeled data & the strategy for selection of relevant features in the feature space.</span>

The python implementation for all the feature selection techniques mentioned above can be found ![here](https://github.com/amandeepsinghkhanna/feature-selection-techniques). 

## References:
