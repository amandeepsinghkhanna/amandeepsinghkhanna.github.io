---
layout: post
title: "Master Data Wrangling with PySpark: A Comprehensive Cheat Sheet"
author: "Amandeep Singh Khanna"
tags: teaching_notes
html_page_title: "Master Data Wrangling with PySpark: A Comprehensive Cheat Sheet - Amandeep Singh Khanna"
description: "Struggling to wrangle data with PySpark? This cheatsheet offers a condensed guide to cleaning, manipulating, and transforming your data for analysis.  Learn to filter, impute missing values, and explore your data effectively - all within the PySpark framework. Boost your data wrangling skills and unlock valuable insights from your data with Amandeep Singh Khanna!"
---

PySpark offers a powerful and scalable solution for data wrangling tasks, especially when dealing with large datasets. Compared to traditional Python libraries like pandas, PySpark excels in:

- **Distributed Processing:** PySpark leverages the power of clusters to process data in parallel, significantly improving performance for big data workloads.
Fault Tolerance: PySpark can automatically handle machine failures and recompute lost tasks, ensuring data processing reliability.

- **Scalability:** PySpark seamlessly scales up or down based on your data volume and computational needs.

Unleash the power of Apache Spark for efficient data manipulation! This PySpark cheatsheet equips you with the essential techniques to conquer data wrangling challenges. From filtering and imputing missing values to exploring and transforming your data, this guide provides a concise roadmap to being your pyspark journey.

## Table of Contents

- [1. Creating a Spark Session Object:](#1-creating-a-spark-session-object)
- [2. Reading data from files:](#2-reading-data-from-files)
- [3. Converting a pandas DataFrame to a PySpark DataFrame:](#3-converting-a-pandas-dataframe-to-a-pyspark-dataframe)
- [4. Exploring data stored in PySpark DataFrames:](#4-exploring-data-stored-in-pyspark-dataframes)
	- [4.1. Displaying the DataFrame:](#41-displaying-the-dataframe)
	- [4.2. Showing the schema of a DataFrame:](#42-showing-the-schema-of-a-dataframe)
	- [4.3. Displaying the shape of a DataFrame:](#43-displaying-the-shape-of-a-dataframe)
	- [4.4. Listing columns of a DataFrame:](#44-listing-columns-of-a-dataframe)
- [5. Filtering rows and columns from a DataFrame:](#5-filtering-rows-and-columns-from-a-dataframe)
- [6. Renaming Columns:](#6-renaming-columns)
- [7. Imputing missing values in a DataFrames:](#7-imputing-missing-values-in-a-dataframes)
- [8. Removing duplicate rows from a DataFrame:](#8-removing-duplicate-rows-from-a-dataframe)
- [9. Displaying distinct values from a column:](#9-displaying-distinct-values-from-a-column)
- [10. Creating a column with a constant value in a DataFrame:](#10-creating-a-column-with-a-constant-value-in-a-dataframe)
- [11. Rounding values in a column of a DataFrame:](#11-rounding-values-in-a-column-of-a-dataframe)
- [12. Typecasting columns in a DataFrame:](#12-typecasting-columns-in-a-dataframe)
- [13. Creating a Temporary view from a DataFrame:](#13-creating-a-temporary-view-from-a-dataframe)
- [14. Stopping/Ending a Spark Session:](#14-stoppingending-a-spark-session)


# 1. Creating a Spark Session Object:


PySpark API provides a python wrapper around the spark framework. All elements of the spark framework can be accessed using the spark session object.

```python
# import statements:
import pyspark
from pyspark.sql import SparkSession

# creating the spark session object:
spark = (
	SparkSession
	.builder
	.appname("DataWranglingwithPyspark")
	.getOrCreate()
)
```

# 2. Reading data from files:

```python
# reading data from a '.csv' file:
csv_df = (
	spark.read.csv(
		"filepath", header=True, inferSchema=True
	)
)

# reading data from a '.txt' file:
txt_df = (
	spark.read.txt(
		"filepath", header=True, inferSchema=True
	)
)

# reading data from a '.json' file:
json_df = spark.read.json("filepath")
```

# 3. Converting a pandas DataFrame to a PySpark DataFrame:

```python
# let pd_df be the pandas dataframe:
pyspark_df = spark.createDataFrame(pd_df)
```

# 4. Exploring data stored in PySpark DataFrames:

## 4.1. Displaying the DataFrame:

```python
df.show() # prints the dataframe.
```

## 4.2. Showing the schema of a DataFrame:

```python
df.printSchema() # prints the schema of the dataframe.
```

## 4.3. Displaying the shape of a DataFrame:

```python
print(df.count(), len(df.columns) # prints the (rows, columns) of a dataframe.
```

## 4.4. Listing columns of a DataFrame:

```python
df.columns
```

# 5. Filtering rows and columns from a DataFrame:

```python
# filtering rows on a condition:
filtered_df = df.filter(df["colname"]>10) # provide the filter condition as an input parameter to the filter method.

# filtering rows based on multiple conditions:
filtered_df = df.filter(
	(df["colname_1"]>10) # filter condition 1
& (df["colname_2"] == "India") # filter condition 2
)

# selecting columns from a dataframe:
filtered_df = df.select(["colname_1", "colname_2", "colname_3"])

# dropping columns from a dataframe:
filtered_df = df.drop(["colname_1", "colname_2", "colname_3"])

# dropping rows with missing values:
filtred_df = df.dropna()
```

# 6. Renaming Columns:

```python
# renaming columns in a dataframe:
df = df.withColumnRenamed("old_colname", "new_colname")

# renaming multiple columns in a dataframe:
colname_replacements = {
	"old_colname_1": "new_colname_1",
	"old_colname_2": "new_colname_2"
}

for old_colname, new_colname in colname_replacements.items():
	df = df.withColumnRenamed(old_colname, new_colname)
```

# 7. Imputing missing values in a DataFrames:

```python
imputation_value = 0
df = df.fillna(imputation_value) # imputes all missing values with 0. 
```

# 8. Removing duplicate rows from a DataFrame:

```python
# removing all duplicate rows from a dataframe:
df1 = df.dropDuplicates()

# another way of removing all duplicate rows from a dataframe:
df1 = df.distinct()

# removing all rows with duplicates within specific columns of the dataframe:
df2 = df.dropDuplicates(["col1", "col2"])
```

# 9. Displaying distinct values from a column:

```python
# displaying distinct values from a column:
df["colname"].distinct()

# displaying count of distinct values from a column:
df["colname"].distinct().count()
```

# 10. Creating a column with a constant value in a DataFrame:

```python
from pyspark.sql import lit

# creating column with a constant value in a DataFrame:
constant_value = 0
df = df.withColumn("constant_col", lit(constant_value)) 
```

# 11. Rounding values in a column of a DataFrame:

```python
from pyspark.sql import round

# creating a column by rounding values from an existing numeric column:
rounding_places = 2
rounded_df = df.withColumn("rounded_col", round(df["numeric_col"], rounding_places))
```

# 12. Typecasting columns in a DataFrame:

```python
from pyspark.sql import functions as f

# converting the datatype of the column to float:
df = df.withColumn("Col_1_float", f.col("Col_1").cast("float"))

# converting the datatype of the column to boolean:
df = df.withColumn("Col_2_bool", f.col("Col_2").cast("bool"))

# converting the datatype of the column to string:
df = df.withColumn("Col_3_string", f.col("Col_3").cast("string"))
```

# 13. Creating a Temporary view from a DataFrame:

```python
# creating the temporaty view:
df.createOrReplaceTempView("table_name")

# using spark sql to query the temporary view:
queried_df = spark.sql("SELECT * FROM table_name") 
```

# 14. Stopping/Ending a Spark Session:

```python
spark.stop() # ends/destroys the spark session object.
```

🕵🏽 Thank you for reading this document. 
If you have any feedback, you can email me at [amandeepsinghkhanna@gmail.com](mailto:amandeepsinghkhanna@gmail.com).