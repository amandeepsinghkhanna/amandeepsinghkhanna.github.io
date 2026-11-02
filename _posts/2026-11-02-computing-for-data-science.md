---
layout: post
title: "Computing for Data Science"
date: 2026-11-02
categories: projects
tags:
  - Teaching
  - Python
  - Data Structures
  - Algorithms
  - JavaScript
description: "An interactive lab site for Data Science students. It teaches Python fundamentals, four data structures, and eight algorithms with live visualizers, annotated code, and comprehension checks."
---

I built this site for the Computing for Data Science lab at St. Joseph’s University, where I teach as guest faculty. Students often meet data structures and algorithms as abstract recipes. The lab lets them watch those ideas run, step through memory, and check their understanding before they write the code themselves.

**Live site:** [computingfordatascience.pages.dev](https://computingfordatascience.pages.dev/)  
**Source:** [sjc-computing-for-data-science-website](https://github.com/amandeepsinghkhanna/sjc-computing-for-data-science-website)

### What students work through

The page is a single curriculum, ordered from first principles to pathfinding and sorting.

- **Pre-requisites.** Nine short cards on execution order, indentation, lists, loops, conditions, functions, and swapping. Each card has optional Python and a practice question.
- **Data structures.** Stack, queue, linked list, and hash map, with visualizers for the first three and a clear account of why a list-backed queue is slow.
- **Searching.** Linear search, binary search, breadth-first search, and A\*. BFS and A\* are taught on trees and on grids separately, with equal step costs so the two algorithms can be compared.
- **Sorting.** Selection sort, bubble sort, quick sort, and merge sort, including a live quick-sort simulation on the home view.
- **Reference.** A cheat sheet (including when not to use an algorithm), a glossary, and an 18-question knowledge check with links back to the relevant lesson.

### How it teaches

Each topic pairs an everyday analogy with a flowchart, a walkthrough, complexity, common mistakes, and copyable Python. Students can scramble an array and watch a sort run, step a search, and answer a checkpoint without leaving the page. The first visit through the pre-requisites takes about 15–20 minutes.

The site is static: one HTML page, one stylesheet, and one script, with Mermaid for flowcharts. There is no build step. It is hosted on Cloudflare Pages.