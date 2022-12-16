---
layout: post
title: "Feature Selection Techniques"
author: "Amandeep Singh Khanna"
tags: blog
html_page_title: Feature Selection Techniques in Machine Learning
---
The process of feature selection (also known as variable selection, attribute selection or variable subset selection) is a core step in the machine leanring (ML)/ statistical modeling process. Feature selection assumes that there are a few features in the data that add little or no value to the performance of the ML/statistical model and can be removed without much deviation in the performance of the model. The main objective of feature selection is to reduce the number of features being used in the model in order to imporve its robustness/performance [1].
By reducing the dimensions of the features being used, it also reduces the overall complexity of the model which aid in better generalized learning for the model (i.e., avoids over-fitting of the model) [2]. In many cases it may also aid in curbing the curse of dimensionality problem. Broadly, features can be classified into three main categories - *Relevant, Irrelevant & Redundant* [3].

- **Relevant Features**: Features that have an influence on the feature that is to be predicted.
- **Irrelevant Features**: Features that do not have an influence on the feature that is to be predicted.
- **Redundant Features**: Features that have a similar feature in the feature-set that can act a proxy for the other feature in the feature-set.

## References
[1]Janez Brank, Dunja Mladenić, Marko Grobelnik, Hua Liu, Peter A.Flach, Gemma C.Garriga, Hannu Toivonen, "Encylopedia of Machine Learning", Page No. 402 - 406

[2]Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani, "An Introduction to Statistical Learning", Page No. 204

[3]M.Karagiannopoulos, D.Anyfantis, S.B.Kotsiantis, P.E.Pintelas, "Feature Selection for Regression Problems"

<!-- Feature selection techniques can be broadly classified into wrappers, filters and embedded techniques.

## Wrappers -->

<!-- ## References





[3]Isabelle Guyon, André Elisseeff, "An Introduction to Variable and Feature Selection", Journal of Machine Learning Research Mar 2003



[5]Bell, D.A., Wang, H. A Formalism for Relevance and Its Application in Feature Subset Selection. Machine Learning 41, Page No. 175–195 -->