---
layout: post
title: "A Survey of Feature Selection Techniques in Machine Learning"
author: "Amandeep Singh Khanna"
tags: blog
html_page_title: A Survey of Feature Selection Techniques in Machine Learning
---
# Introduction

The feature selection process (AKA. variable selection, attribute selection or variable subset selection) is a core step in the Machine Learning (ML)/Statistical Modeling process. The Feature selection process assumes the presence of features within the model that add little or no value to the model performance. A core objective of the feature selection process is identifying and eliminating these features from the model to improve the robustness/performance [1]. The reduction of dimensions from the model also reduces the overall complexity of the model. Hence aiding in better-generalized learning for the model (i.e., prevents over-fitting) [2]. Model features are termed - relevant (Influence the model output and cannot be replaced by any other feature in the model.), irrelevant (Do not influence the model output),  and redundant (Can be replaced by another feature in the model) [3].

# Background Study

## 1. Filter Methods

### 1.1 Pearson's Correlation Coefficient (PCC)

Developed by Karl Pearson, the Pearson’s Correlation Coefficient (AKA. Pearson’s r or Pearson’s Product Moment Correlation) provides a mechanism to measure the degree of the linear relationship between any two sets of continuous data [4]. Given a pair of continuous random variables X and Y, the PCC (⍴) is expressed as

<img src="https://i.imgur.com/3MaJo75.png" title="Karl Pearson's Correlation Coefficient Covariance Formula"/><br/>
<img src="https://i.imgur.com/NgUBEXL.png" title="Karl Pearson's Correlation Coefficient Computation Formula"><br/>

The value of the PCC ranges between -1 and +1, where +1 and -1 indicate the strongest degrees of the linear relationship between the pair of continuous random variables and 0 indicates no linear relationship between the two random variables. The limitations of the PCC are

- Can only be used to determine the strength of linear relationships

- Easily distorted by the presence of outliers

- Can be incorrectly used to infer a causal relationship between the features (Correlation does not imply causation.)

Despite these limitations, the PCC is an effective feature selection tool for regression problems.

### 1.2 Chi-squared (𝝌2) Test for Independence

The chi-squared (𝝌2) test for the independence of variables is used to examine the interdependence of a pair of nominal features. Since the chi-squared test tells us if the change in one feature causes a change in the other, we can consider it to be a method of computing correlation between two nominal features [5].

## 2. Wrapper Methods

## 3. Embedded Methods

## 4. Hybrid Methods

# References

1. Liu, H. (2011). Feature Selection. In: Sammut, C., Webb, G.I. (eds) Encyclopedia of Machine Learning. Springer, Boston, MA. https://doi.org/10.1007/978-0-387-30164-8_306

2. Gareth James; Daniela Witten; Trevor Hastie; Robert Tibshirani (2013). An Introduction to Statistical Learning. Springer. p. 204.

3. Karagiannopoulos, M., et al. "Feature selection for regression problems." Educational Software Development Laboratory, Department of Mathematics, University of Patras, Greece (2004).

4. Pearson correlation coefficient. (2022, November 28). In Wikipedia. https://en.wikipedia.org/wiki/Pearson_correlation_coefficient

5. "Chi-Square - Sociology 3112 - Department of Sociology - The University of utah". soc.utah.edu. Retrieved 2022-11-12.

6. Wah, Yap Bee, et al. "Feature Selection Methods: Case of Filter and Wrapper Approaches for Maximising Classification Accuracy." Pertanika Journal of Science & Technology 26.1 (2018).