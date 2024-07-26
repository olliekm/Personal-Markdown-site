Gradient Descent is used to train some of the most advanced deep learning models.
The goal of Gradient Descent:
$$
\frac{min}{w,b}J(w,b)
$$
Gradient Descent is an algorithm used to minimize any function. 
Usually, you would start with some value of w and b (set w=0, b=0)
You keep changing w, b to reduce $J(w,b)$ until we settle at or near a minimum (there may be multiple minima)
 
The first step is choosing which direction to take your first step. The goal is to take the steepest step towards the minimum. 

Your starting values will influence your ending point drastically.
*This is our gradient descent algorithm:*
$$
w = w-\alpha \frac{d}{dw}J(w,b)
$$
This is an assignment of w not an assertion! 
Alpha is the [[Learning Rate]]
We want to take the derivative of the cost function in order to decide the direction
Notice how we did this for w, but we must do this for b as well
$$
b = b-\alpha \frac{d}{db}J(w,b)
$$
We repeat this until convergence!
*We update these two parameters simultaneously*
$$
temp_w = w-\alpha \frac{d}{dw}J(w,b)
$$
$$
temp_b = b-\alpha \frac{d}{db}J(w,b)
$$
$$
w = temp_w
$$
$$
b = temp_b
$$
We need to make sure our values of w or b do not change  when trying to compute our new values. If we did this, our gradient descent would not function as intended, as whenever we update w or b, the following update of w or b would be altered.

### The squared error cost function has **1** global/local minimum
This is due to its *convex* shape, looking like a bowl
![[Pasted image 20240630152844.png |500]]
## Implementation of [[Gradient Descent]] for linear regression
This is *Batch* gradient descent, meaning that we use **all training examples**
### Gradient descent steps:
$$
\frac{d}{dw}j(w,b) = \frac{1}{m}\sum^m_{i=1} (wx^i - y^i)x^i
$$
$$
\frac{d}{db}j(w,b) = \frac{1}{m}\sum^m_{i=1} (wx^i - y^i)
$$
```python
## Do both simultaneously
dw_term = 0
db_term = 0
for i in range(m):
	f_wb = w*x[i]+b
	temp_dw_term = (f_wb-y[i])*x[i]
	temp_db_term = (f_wb-y[i])
	dw_term += temp_dw_term
	db_term += temp_db_term
dw_term = dw_term/m
db_term = db_term/m
```

### Computing cost step:
$$
j(w,b) = \frac{1}{2m}\sum^m_{i=1} (f_{w,b}(x^i) - y^i)^2
$$
```python
cost = 0
for i in range(m):
	f_wb = w*x[i]+b
	cost += (f_wb-y[i])**2
cost = 1/(2*m)*cost
```

### Gradient descent
```python
b = b_initial
w = w_initial

for i in range(iters):
	dw_term, db_term = gradient_function(x,y,w,b) # Find the gradients
	
	b = b - alpha * db_term # step the b param
	w = w - alpha * dw_term # step the w param
	
return w, b
```

### How do we know if [[Gradient Descent]] is working correctly
We can always visualize the cost vs iterations graph but there is another way. 
We can use an [[Automatic convergence test]]

## Implementation of [[Gradient Descent]] for [[Logistic regression]]

Here is [[Cost Function#the implementation of this cost function|The implementation of this cost function]] 
$$
J(\vec{w},b) = -\frac{1}{m}\sum^m_{i=1} y^i(\log(f_{\vec{w}, b}(\vec{x}^i)) + (1-y^i)\log(1-f_{\vec{w}, b}(\vec{x}^i))
$$
We want to find $\vec{w}, b$, given a new $\vec{x}$, output $\frac{1}{1+e^{-(\vec{w}\cdot\vec{x} +b)}}$, we can then make a prediction/estimate the probability.

We want to minimize $J(\vec{w},b)$, we can just do the normal gradient descent formula.
$w_j= w_j -\alpha\frac{d}{dx}J(\vec{w},b)$ and $b= b -\alpha\frac{d}{dx}J(\vec{w},b)$, so technically we end up with a similar looking formula:
$$
w_j= w_j -\alpha \frac{1}{m}\sum^m_{i=1} (f_{\vec{w},b}({\vec{x}}^i) - y^i)
$$
It is still very different due to the different function within the summation. We can also always perform [[Feature scaling]] to speed up this process of [[Gradient Descent]]
