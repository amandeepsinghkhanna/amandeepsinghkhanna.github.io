---
layout: post
title: "My Notes from learning TensorFlow 2.0"
author: "Amandeep Singh Khanna"
---

#### Installing TensorFlow:

To install the CPU version of TensorFlow:

```
pip install tensorflow
```

To install the CUDA enabled GPU version of TensorFlow:

```
pip install tensorflow-gpu
```

#### Importing TensorFlow:

```python
%tensorflow_version 2.x # Only required while running on a Ipython notebook.
import tensorflow as tf
print(tf.version) # Checking the version of TensorFlow.
```

#### Tensors

<div style="text-align: justify">
Tensors are a multi-dimensional arrays with a uniform type (called a **dtype**). A tensor is a generalization of vectors and matrices to potentially higher dimensions. Tensors are a fundamental aspect of TensorFlow. They are the main objects that are passed around manipulated throughout the program. Tensorflow programs work by building a graph of Tensor objects that details how tensors are related. Each tensor has a data-type and a shape associated to it. Just like vectors and matrices, tensors can also have operations like addition, subtraction, dot-product, cross-product and others.
</div>

#### Creating Tensors using TensorFlow:

To create a tensor, you defined the value of the tensor and the data-type.
```python
string=tf.Variable("this is a string",tf.string)
number=tf.Variable(324,tf.int16)
floating=tf.Variable(3.567,tf.float64)
```

<br/>

#### Data-types for Tensors Supported by TensorFlow:

<ul>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#float16"><code translate="no" dir="ltr">tf.float16</code></a>: 16-bit half-precision floating-point.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#float32"><code translate="no" dir="ltr">tf.float32</code></a>: 32-bit single-precision floating-point.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#float64"><code translate="no" dir="ltr">tf.float64</code></a>: 64-bit double-precision floating-point.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#bfloat16"><code translate="no" dir="ltr">tf.bfloat16</code></a>: 16-bit truncated floating-point.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#complex64"><code translate="no" dir="ltr">tf.complex64</code></a>: 64-bit single-precision complex.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#complex128"><code translate="no" dir="ltr">tf.complex128</code></a>: 128-bit double-precision complex.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#int8"><code translate="no" dir="ltr">tf.int8</code></a>: 8-bit signed integer.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#uint8"><code translate="no" dir="ltr">tf.uint8</code></a>: 8-bit unsigned integer.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#uint16"><code translate="no" dir="ltr">tf.uint16</code></a>: 16-bit unsigned integer.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#uint32"><code translate="no" dir="ltr">tf.uint32</code></a>: 32-bit unsigned integer.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#uint64"><code translate="no" dir="ltr">tf.uint64</code></a>: 64-bit unsigned integer.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#int16"><code translate="no" dir="ltr">tf.int16</code></a>: 16-bit signed integer.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#int32"><code translate="no" dir="ltr">tf.int32</code></a>: 32-bit signed integer.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#int64"><code translate="no" dir="ltr">tf.int64</code></a>: 64-bit signed integer.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#bool"><code translate="no" dir="ltr">tf.bool</code></a>: Boolean.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#string"><code translate="no" dir="ltr">tf.string</code></a>: String.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#qint8"><code translate="no" dir="ltr">tf.qint8</code></a>: Quantized 8-bit signed integer.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#quint8"><code translate="no" dir="ltr">tf.quint8</code></a>: Quantized 8-bit unsigned integer.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#qint16"><code translate="no" dir="ltr">tf.qint16</code></a>: Quantized 16-bit signed integer.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#quint16"><code translate="no" dir="ltr">tf.quint16</code></a>: Quantized 16-bit unsigned integer.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#qint32"><code translate="no" dir="ltr">tf.qint32</code></a>: Quantized 32-bit signed integer.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#resource"><code translate="no" dir="ltr">tf.resource</code></a>: Handle to a mutable resource.</li>
<li><a href="https://www.tensorflow.org/api_docs/python/tf#variant"><code translate="no" dir="ltr">tf.variant</code></a>: Values of arbitrary types.</li>
</ul>

#### Rank / Degree of Tensors:
<div style="text-align: justify">
Rank or the degree of tensors is the number of dimensions involved in the tensor. The above created tensor is of rank 0, which is also known as a scalar. Defining a tensor of higher dimensions.
</div>

```python
rank1_tensor = tf.Variable(["Test"], tf.string)
rank2_tensor = tf.Variable([["test", "ok"], ["test", "yes"]], tf.string)
print(tf.rank(rank2_tensor)) # Checking the rank of a tensor.
```
<div style="text-align: justify">
The rank of a tensor is directly related to the level of nested lists. The rank of the variable rank1_tensor is 1 as the deepest level of nesting is 1 and rank2_tensor is 2 as the deepest level of nesting 2.
</div>


#### Shape of a Tensor:
<div style="text-align: justify">
Shape of the tensor is the number of elements that exist in each dimension of the tensor.

```python
rank2_tensor.shape
```
</div>

#### Changing the shape of a Tensor:
<div style="text-align: justify">
The number of elements of a tensor is the product of the sizes of all its shapes.
</div>

```python
tensor1=tf.ones([1,2,3]) # tf.ones() creates a shape [1,2,3] tensor full of ones
tensor2=tf.reshape(tensor1,[2,3,1]) # reshape existing data to shape [2,3,1]
tensor3=tf.reshape(tensor2,[3, -1]) # -1 tells the tensor to calculate the size of the dimension in that place
# this will reshape the tensor to [3,3]
# The number of elements in the reshaped tensor MUST match the number in the original
```

#### Slicing Tensors:
<div style="text-align: justify">
The slice operator can be used on tensors to select specific axes or elements. When we slice or select elements from a tensor, we can use comma separated values inside a set of square brackets. Each subsequent value references a different dimension of the tensor. <br/>
<b>Example:</b> tensor[dimension-1, dimension-2, ..., dimension-n]
</div>

```python
# Creating a 2D tensor
matrix = [[1,2,3,4,5],
          [6,7,8,9,10],
          [11,12,13,14,15],
          [16,17,18,19,20]]

tensor = tf.Variable(matrix, dtype=tf.int32)  
print(tf.rank(tensor)) # Rank of tensor
print(tensor.shape) # Shape of tensor

three = tensor[0,2]  # selects the 3rd element from the 1st row
print(three)  # -> 3

row1 = tensor[0]  # selects the first row
print(row1)

column1 = tensor[:, 0]  # selects the first column
print(column1)

row_2_and_4 = tensor[1::2]  # selects second and fourth row
print(row2and4)

column_1_in_row_2_and_3 = tensor[1:3, 0]
print(column_1_in_row_2_and_3)

```

#### Types of Tensors:
The types of tensors in TensorFlow are:
<ul>
	<li>Variable</li>
	<li>Constant</li>
	<li>Placeholder</li>
	<li>Sparse</li>
</ul>

#### Implementing a Neural Network similar to Logistic Regression using TensorFlow:

To implement Logistic Regression in TensorFlow we start of by importing the require modules.

```python
# Importing the required modules:
import pandas as pd # For interfacing with pandas DataFrame objects.
import tensorflow as tf # For tensor operations.
```

In the next step we will be reading the training and test data. We're using the Titanic dateset that can be found
<a href="https://www.kaggle.com/c/titanic">here</a>

```python
train = pd.read_csv("train.csv") # Reading the training dataset.
test = pd.read_csv("test.csv") # Reading the test dataset.
target = train["Survived"] # Creating a pandas series object with the contents of the target variable.
```

In our dataset, we have both categorical as well as continuous variables. For encoding the categorical data and identifying the numerical columns, TensorFlow has a built-in method. To be able to use any kind of data with TensorFlow we will need to convert them into tensors.

```python
# Creating a set of columns in their relevant form for TensorFlow:
CATEGORICAL_COLUMNS = [
    "sex",
    "n_siblings_spouses",
    "parch",
    "class",
    "deck",
    "embark_town",
    "alone",
]  # Names of categorical columns
NUMERIC_COLUMNS = ["age", "fare"]  # Names of continous columns
feature_columns = []
for feature_name in CATEGORICAL_COLUMNS:
    vocabulary = train[
        feature_name
    ].unique()  # gets a list of all unique values from given feature column
    # encoding the categorical variables and converting them to tensors:
    feature_columns.append(
        tf.feature_column.categorical_column_with_vocabulary_list(
            feature_name, vocabulary
        )
    )
# converting numerical columns to tensors:
for feature_name in NUMERIC_COLUMNS:
    feature_columns.append(
        tf.feature_column.numeric_column(feature_name, dtype=tf.float32)
    )
```

<div style="text-align: justify">
At this point we need to perform one more step to get our data prepared for training the model. The dataset is fed into the model as a stream of small batches. The most common batch size is 32. We will feed these batches into our model multiple times according to the number of <b>epochs</b>. An epoch is the collection of batches that make up the entire dataset. For example, if we set the number of epochs as 50, we will have the entire dataset passing through the neural network 50 times, with the dataset being broken down into smaller batches of 32 row at a time.
</div>
