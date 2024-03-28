---
layout: post
title: "Introduction to Clustering"
author: "Amandeep Singh Khanna"
tags: teaching_notes
post_type: sub_topic
html_page_title: "Introduction to Clustering - Amandeep Singh Khanna"
description: "Machine Learning 101 equips you with core concepts & hands-on skills to launch your data science journey. This section contains the notes for the Machine Learning course that I teach at St. Joseph's University, Bangalore."
---

## Table of contents

1. [What is Clustering?](#1-what-is-clustering)
2. [K-Means clustering algorithm](#2-k-means-clustering-algorithm)
    
    2.1. [Algorithm desciption](#21-algorithm-description)
    
    2.2. [The algorithm (steps)](#22-the-algorithm-steps)

    2.3. [Evaluating cluster quality](#23-evaluating-cluster-quality)

    2.4. [Determining the optimal value of k for clustering](#24-determining-the-optimal-value-of-k-for-clustering)


## 1. What is Clustering?

Clustering is the process of grouping similar data points together. It's a group of unsupervised learning algorithms, meaning it doesn't require any pre-existing labels. Instead, it aims to discover patterns and relationships within the data.

## 2. K-Means clustering algorithm

### 2.1. Algorithm description

- The k-means clustering algorithm aims to partition/split a dataset into a pre-defined
number (represented by the letter k) of distinct, non-overlapping clusters.
- Each cluster contains data points that are more like each other than to data points in
other clusters.
- Each cluster is represented by a central point called 'centroid', calculated as the mean
of all the data points within that cluster.

### 2.2. The algorithm (Steps)

- Start
- Choose the number of required clusters (k).
- Select k random data points from the dataset to serve as initial set of centroids that
    
    represent the centers of each cluster.
    
- Calculate the distance between each data point and each centroid using Euclidean
    
    Distance.
    
- Assign each data point its closest centroid.
- Recalculate the centroids by taking the mean of all the data points assigned to each
    
    cluster.
    
- Recalculate the distance between each data point and each centroid using Euclidean
    
    Distance.
    
- Repeat steps vi and vii until convergence is reached.
- Display the final cluster label for each data point.
- Stop

### 2.3. Evaluating cluster quality

**1. Inertia:** Inertia measures the sum of the distances of all the data points within a cluster from
the centroid of the cluster.

1. **Average Silhouette Coefficient/Silhouette Score:** Silhouette score is a measure of how well the data points are clustered. The value of the silhouette score range between -1 and 1. A value closer to +1 indicates that the data points within each cluster are very similar and the data points belonging to different clusters are different. The values closer to 0 and -1 indicate sub-optimal/indirect clusters.

To calculate the average silhouette score, we calculate separation on, cohesion and the silhouette coefficient for each data point.

- **Cohesion (a):** Average distance to all other data points within the same cluster. This
measures how closely a data point is related to the cluster.
- **Separation (b):** Average distance to all data points in the nearest neighboring cluster.

$$
silhouette\,coefficient = \dfrac{(b-a)}{max(a,b)}
$$

### 2.4. Determining the optimal value of k for clustering

1. **Elbow method:** A line plot of different k values vs the respective inertia values and choose a k where inertia decreasing less significantly.
2. **Domain knowledge:** Consider the number of underlying groups based on prior understanding of data.
3. **Visualization:** Reduce dimensions of data to 2-3 dimensions and visualize clusters using a scatter plot to assess the optimal value of k.