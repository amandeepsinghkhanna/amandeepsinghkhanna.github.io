---
layout: post
title: "Introduction to Machine Learning"
author: "Amandeep Singh Khanna"
tags: teaching_notes
post_type: sub_topic
html_page_title: "Introduction to Machine Learning - Amandeep Singh Khanna"
description: "Machine Learning 101 equips you with core concepts & hands-on skills to launch your data science journey. This section contains the notes for the Machine Learning course that I teach at St. Joseph's University, Bangalore."
---

## Table of contents

- [1. What is Machine Learning (ML)?](#1-what-is-machine-learning-ml)
- [2. Classification of Machine Learning algorithms](#2-classification-of-machine-learning-algorithms)
    - [2.1. Classification of Machine Learning algorithms based on how they are trained](#21-classification-of-machine-learning-algorithms-based-on-how-they-are-trained)
    - [2.2. Classification of Machine Learning algorithms based on if they are trained incrementally or on the fly](#22-classification-of-machine-learning-algorithms-based-on-if-they-are-trained-incrementally-or-on-the-fly)
    - [2.3. Classification of Machine Learning algorithms how they make a prediction](#23-classification-of-machine-learning-algorithms-how-they-make-a-prediction)
- [3. How do we determine the best Machine Learning algorithm for a situation?](#3-how-do-we-determine-the-best-machine-learning-algorithm-for-a-situation)
    - [3.1. No Free Lunch Theorem](#31-no-free-lunch-theorem)
- [4. Challenges affecting the performance of Machine Learning algorithms](#4-challenges-affecting-the-performance-of-machine-learning-algorithms)

## 1. What is Machine Learning (ML)?

Here are a few formal definitions of machine learning (ML):

> Machine learning is the field of study that gives computers the ability to learn without explicitly being programmed.
> 
- Arthur Samuel, 1959

> A computer program is said to learn from experience E with respect to some task T and with some performance measure P, if its performance on task T, as measured on P, improves with experience E.
> 
- Tom Mitchell, 1997

The types of tasks that can be performed by Machine Learning algorithms are:

1. **Clustering:** Grouping similar data points together, like segmenting customers based on their purchase history.

2. **Regression:** Predicting a continuous value for a new data point, like predicting housing prices.

3. **Classification:** Predicting the class or category of a new data point, like classifying emails as spam or not spam, or diagnosing diseases based on symptoms.

## 2. Classification of Machine Learning algorithms

Machine learning algorithms/systems can be broadly classified based on three criteria:

1. **Trained based on human supervision** (Unsupervised, Supervised, Semi-supervised, and Reinforcement learning)

2. **Learn incrementally or on the fly** (Online and Batch learning)

3. **Compare new data points to existing data points or learn patterns from training data and build a predictive model** (Instance-based and Model-based learning)

Of these three, the more theoretical and traditional approach is to classify the algorithms based on how they are trained.

### 2.1. Classification of Machine Learning algorithms based on how they are trained

1. **Unsupervised Machine Learning:** In unsupervised machine learning, the algorithm is fed with an unlabeled dataset and attempts to capture the patterns within the data.

2. **Supervised Machine Learning:** The dataset used to train the model contains the desired outcome as a label, letting the algorithm know the desired output.

3. **Semi-Supervised Machine Learning:** These algorithms are a hybrid of supervised and unsupervised learning algorithms. They can handle both labeled and unlabeled datasets.

4. **Reinforcement Learning:** Reinforcement learning is different from other approaches because it doesn't depend on input-output data pairs. In this approach, the algorithm is called an agent and is provided with a set of possible actions and their corresponding outcomes in the form of rewards or penalties. The agent learns the best course of action for accomplishing the task by optimizing its actions to maximize rewards.

### 2.2. Classification of Machine Learning algorithms based on if they are trained incrementally or on the fly

1. **Batch/Offline Learning:** Machine Learning algorithms cannot learn incrementally and instead need to be trained on all available data for each change.

2. **Online Learning:** Machine Learning algorithms is trained incrementally by feeding it data sequentially in small group known as mini-batches.

### 2.3. Classification of Machine Learning algorithms how they make a prediction

1. **Instance-based Learning:** The Machine Learning algorithms learn each data point thoroughly and make predictions by measuring the similarity of the new data point to the closest learned data point.

2. **Model-based Learning:** Machine Learning algorithms learn the underlying pattern from training data and use that knowledge to make predictions on unknown data points

## 3. How do we determine the best Machine Learning algorithm for a situation?

### 3.1. No Free Lunch Theorem

> David Wolpert, in his famous 1996 paper, demonstrated that if no assumptions are made about the data, there is no reason to prefer one machine learning algorithm over another. This concept is known as the "no free lunch" theorem. You can read the paper [here](https://source-bed.oss-cn-beijing.aliyuncs.com/paper/lack_of_a_priori_distinctions_wolpert.pdf).
> 

According to the theorem, no machine learning algorithm is inherently better than another. However, the choice of algorithm is determined by the assumptions of the data used to train and make predictions.

## 4. Challenges affecting the performance of Machine Learning algorithms

The following are the challenges that commonly affect popular machine learning algorithms:

1. **Insufficient amount of training data:** Machine learning algorithms require a large amount of data to function effectively. In a well-known paper published by Microsoft researchers in 2001, it was demonstrated that most machine learning papers achieved similar results on complex Natural Language Processing (NLP) tasks when they had access to a sufficient amount of data. You can read the paper [here](https://aclanthology.org/P01-1005.pdf). The authors of the paper emphasize that investing in data collection and enrichment is more fruitful than focusing solely on algorithm development. This fact further echoed in another 2009 paper by Peter Norvig. You can read the paper [here](http://www.cs.uni.edu/~wallingf/teaching/162/readings/unreasonable-effectiveness-of-data.pdf).

2. **Training sample does not represent the whole population (Sampling bias):** To achieve optimal performance from your machine learning algorithm, using a training dataset that accurately represents the majority of your target population is crucial. While this is challenging with small samples, even large datasets can be non-representative of the target population due to sampling bias.


>💡 Sampling bias occurs when the selection process favors certain sub-populations within a larger group, leading to a sample non-representative of the actual population. This non-representativeness skews data and inferences. You can read about a famous case of sampling bias during the US presidential elections [here](https://math.oxford.emory.edu/site/math117/historicalBlunders/).
>

3. **Poor Measurements:** Datasets full of errors, outliers, noise will result in a poor model.

4. **Irrelevant Variables/Features:** Machine learning algorithms can struggle when trained on datasets containing variables that lack a meaningful relationship with the target variable (the one you want to predict or classify). 

5. **Over-fitting:** Over-fitting occurs when a machine learning model learns the training data too well, including the noise and random fluctuations. The model memorizes the specific details of the training set rather than capturing the underlying patterns and trends. The model performs well on the training data but fails to generalize to new, unseen data.

6. **Under-fitting:** Under-fitting is the opposite of over-fitting and happens when a machine learning model fails to capture the important relationships within the training data. This results in poor performance on both the training set and unseen data, as the model lacks the ability to identify the underlying patterns.
