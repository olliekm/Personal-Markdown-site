$$
\vec{w} = [w_1, w_2, w_3]
$$
$$
\vec{x} = [x_1, x_2, x_3]
$$
Notice that we use 1 indexing in linear algebra vs 0 indexing in programming
```python
w = np.array([1.0,2.5,-3.3])
b = 4
x = np.array([10,20,30])
```

So without vectorization:
$$
f_{w,b}(x) = w_1x_1 + w_2x_2 + w_3x_3 + w_4x_4 + b
$$
```python
f = w[0] * x[0] + w[1] * x[1] + w[2] * x[2] + b
```
Consider n = 100000, this would be inefficient to code and to compute, vectorization solves this.
$$
f_{\vec{w},b}(\vec{x})\sum^n_{j=1} w_jx_j +b
$$
```python
f = 0
for j in range(n):
	f = f + w[j] * x[j]
f = f + b
```
This still is not efficient
### Vectorization
$$
f_{\vec{w},b}(x) = \vec{w}\cdot\vec{x}+b
$$
```python
f = np.dot(w,x) + b
```
So much cleaner and so much faster (due to parallelization of operations)

### Breaking down why it is so much faster

Without vectorization
```python
for j in range(16):
	f = f + w[j] * x[j]
# t=0 -> f + w[0] * x[0]
# t=1 -> f + w[1] * x[1]
# ...
# t=15 -> f + w[15] * x[15]
```
These calculations are sequential, they happen one after the other even thought they are not dependent on each other, this is where we are able to parallelize to increase efficiency.

```python
np.dot(w,x)
# t=0 -> all values of w and x are multiplied at the same time
# t=1 -> specialized hardware to efficiently add up all numbers
```
This increased efficiency allows us to scale up language models

In gradient descent, we can vectorize the derivative term and the w term (w/alpha /[[Learning Rate]])
$$
w = w-\alpha \frac{d}{dw}J(w,b)
$$
We compute
$$
w_j = w_j - 0.1d_j
$$
Where $$ \vec{w}=[w_1,w_2 ... w_{16}] $$and $$ \vec{d}=[d_1,d_2 ... d_{16}] $$ 
**Recall** that without vectorization we would sequentially perform these operations.
$$ w_1 = w_1 -0.1d_1 $$
```python
for j in range(16):
	w[j] = w[] - 0.1 * d[j]
```

**But with vectorization**
$$ \vec{w} = \vec{w} -0.1\vec{d} $$
```python
w = w-0.1*d
```

### With the power of vectorization we can now achieve [[Gradient Descent]] for [[Multiple linear regression]]

## We can also apply [[Vectorization]] to [[Neural networks]]
Lets look at a vectorized implementation of [[Forward propagation]]
*Non-vectorized implementation*
```python
x = np.array([200, 17])
W = np.array([[1, -3, 5], [-2, 4, 6]])

b = np.array([-1, 1, 2])

def dense(a_in, W, b):
	units = W.shape[1]
	a_out = np.zeros(units)
	for j in range(units):
		 w = W[:, j]
		 z = np.dot(w,a_in)+b[j]
		 a_out[j] = g(z)
	return a_out
```

*vectorized version*
```python
x = np.array([[200, 17]]) # this changes to matrix
W = np.array([[1, -3, 5], [-2, 4, 6]]) # this stays the same

b = np.array([[-1, 1, 2]]) # this changes to matrix

def dense(A_in, W, B):
	Z = np.matmul(A_in, W) + B
	A_out = g(Z)
	return A_out
```
This is much faster! This uses [[Matrix multiplication]]