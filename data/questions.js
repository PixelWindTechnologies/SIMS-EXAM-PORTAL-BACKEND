const questions = [

{
    id: 1,
    topic: "Machine Learning",
    question: "A Decision Tree achieves 100% training accuracy but only 61% testing accuracy. Which modification is MOST likely to improve generalization while preserving interpretability?",
    options: [
        "Increase tree depth",
        "Decrease minimum samples per leaf",
        "Apply Cost Complexity Pruning (CCP)",
        "Duplicate minority samples in the training data"
    ],
    correct: 2
},

{
    id: 2,
    topic: "Python",
    question: `Predict the output.

x = [[1],[2],[3]]
y = x.copy()
y[0].append(100)

print(x)
`,
    options: [
        "[[1],[2],[3]]",
        "[[1,100],[2],[3]]",
        "[[100],[2],[3]]",
        "Runtime Error"
    ],
    correct: 1
},

{
    id: 3,
    topic: "Data Analytics",
    question: "A retail company reports an overall increase in average revenue after a pricing change. However, every individual region shows decreased revenue. Which statistical phenomenon best explains this observation?",
    options: [
        "Curse of Dimensionality",
        "Simpson's Paradox",
        "Central Limit Theorem",
        "Bayesian Inference"
    ],
    correct: 1
},

{
    id: 4,
    topic: "SQL",
    question: "Which window function assigns identical ranks to tied values while leaving gaps in subsequent rankings?",
    options: [
        "ROW_NUMBER()",
        "DENSE_RANK()",
        "RANK()",
        "NTILE()"
    ],
    correct: 2
},

{
    id: 5,
    topic: "Python",
    question: `Predict the output.

def func(x=[]):
    x.append(len(x))
    return x

print(func())
print(func())
`,
    options: [
        "[0] [0]",
        "[0] [0,1]",
        "[1] [2]",
        "TypeError"
    ],
    correct: 1
},

{
    id: 6,
    topic: "Machine Learning",
    question: "Which evaluation metric should be prioritized when detecting fraudulent banking transactions where false negatives are significantly more costly than false positives?",
    options: [
        "Accuracy",
        "Precision",
        "Recall",
        "Adjusted R²"
    ],
    correct: 2
},

{
    id: 7,
    topic: "Python",
    question: `Predict the output.

a = [1,2,3]
b = a
a += [4]

print(b)
`,
    options: [
        "[1,2,3]",
        "[1,2,3,4]",
        "[4]",
        "Runtime Error"
    ],
    correct: 1
},

{
    id: 8,
    topic: "Statistics",
    question: "Increasing the sample size from 100 observations to 400 observations (keeping variance constant) has what effect on the standard error of the mean?",
    options: [
        "Doubles the standard error",
        "Halves the standard error",
        "Quadruples the standard error",
        "Leaves it unchanged"
    ],
    correct: 1
},

{
    id: 9,
    topic: "Python",
    question: `Predict the output.

nums = [1,2,3,4]

result = list(map(lambda x: x*x if x%2==0 else x, nums))

print(result)
`,
    options: [
        "[1,2,3,4]",
        "[1,4,3,16]",
        "[1,4,9,16]",
        "[2,4,6,8]"
    ],
    correct: 1
},

{
    id: 10,
    topic: "Generative AI",
    question: "In a Retrieval-Augmented Generation (RAG) pipeline, the retrieved documents are consistently relevant, but the model still produces hallucinated answers. Which component should be investigated FIRST?",
    options: [
        "Chunk overlap configuration",
        "Prompt template and context injection strategy",
        "Embedding dimensionality",
        "Vector database indexing algorithm"
    ],
    correct: 1
},
  {
    id: 11,
    topic: "Python",
    question: `Predict the output.

x = (i*i for i in range(5))
print(next(x))
print(next(x))
print(sum(x))
`,
    options: [
        "0 1 29",
        "0 1 25",
        "1 4 25",
        "Runtime Error"
    ],
    correct: 0
},

{
    id: 12,
    topic: "Machine Learning",
    question: "Which algorithm is MOST sensitive to the scale of input features?",
    options: [
        "Decision Tree",
        "Random Forest",
        "K-Nearest Neighbors (KNN)",
        "XGBoost"
    ],
    correct: 2
},

{
    id: 13,
    topic: "Python",
    question: `Predict the output.

a = [1,2,3]
b = a[:]
a.append(4)
print(b)
`,
    options: [
        "[1,2,3]",
        "[1,2,3,4]",
        "[4]",
        "Runtime Error"
    ],
    correct: 0
},

{
    id: 14,
    topic: "SQL",
    question: "Which SQL clause is evaluated AFTER GROUP BY but BEFORE ORDER BY during logical query processing?",
    options: [
        "WHERE",
        "HAVING",
        "SELECT",
        "LIMIT"
    ],
    correct: 1
},

{
    id: 15,
    topic: "Statistics",
    question: "Which probability distribution is commonly used to model the number of occurrences of an event within a fixed interval of time or space?",
    options: [
        "Poisson Distribution",
        "Uniform Distribution",
        "Normal Distribution",
        "Exponential Distribution"
    ],
    correct: 0
},

{
    id: 16,
    topic: "Python",
    question: `Predict the output.

def f():
    try:
        return 10
    finally:
        return 20

print(f())
`,
    options: [
        "10",
        "20",
        "None",
        "Runtime Error"
    ],
    correct: 1
},

{
    id: 17,
    topic: "Data Analytics",
    question: "Which visualization is MOST suitable for identifying outliers and the spread of a numerical dataset?",
    options: [
        "Pie Chart",
        "Histogram",
        "Box Plot",
        "Radar Chart"
    ],
    correct: 2
},

{
    id: 18,
    topic: "Python",
    question: `Predict the output.

x = {1,2,3}
y = {3,4,5}
print(x ^ y)
`,
    options: [
        "{3}",
        "{1,2,4,5}",
        "{1,2,3,4,5}",
        "Runtime Error"
    ],
    correct: 1
},

{
    id: 19,
    topic: "Machine Learning",
    question: "Which ensemble algorithm builds trees sequentially, where each tree attempts to correct the residual errors made by the previous trees?",
    options: [
        "Random Forest",
        "Bagging",
        "Gradient Boosting",
        "Extra Trees"
    ],
    correct: 2
},

{
    id: 20,
    topic: "Python",
    question: `Predict the output.

nums = [1,2,3,4,5]
print(nums[1:4:2])
`,
    options: [
        "[2,4]",
        "[2,3]",
        "[1,3,5]",
        "[3,5]"
    ],
    correct: 0
},
  {
    id: 21,
    topic: "Python",
    question: `Predict the output.

x = [1, 2, 3]
print(x is x[:])
`,
    options: [
        "True",
        "False",
        "None",
        "Runtime Error"
    ],
    correct: 1
},

{
    id: 22,
    topic: "Machine Learning",
    question: "Which hyperparameter in XGBoost directly controls the minimum reduction in loss required to make a further partition on a leaf node?",
    options: [
        "max_depth",
        "gamma",
        "subsample",
        "eta"
    ],
    correct: 1
},

{
    id: 23,
    topic: "Python",
    question: `Predict the output.

a = [1,2]
b = a
a = a + [3]
print(b)
`,
    options: [
        "[1,2]",
        "[1,2,3]",
        "[3]",
        "Runtime Error"
    ],
    correct: 0
},

{
    id: 24,
    topic: "SQL",
    question: "Which SQL window function returns the value from the previous row without using a self-join?",
    options: [
        "FIRST_VALUE()",
        "LEAD()",
        "LAG()",
        "RANK()"
    ],
    correct: 2
},

{
    id: 25,
    topic: "Data Analytics",
    question: "A feature has a Pearson correlation coefficient of -0.96 with the target variable. What does this indicate?",
    options: [
        "Strong positive linear relationship",
        "Strong negative linear relationship",
        "No linear relationship",
        "Non-linear relationship only"
    ],
    correct: 1
},

{
    id: 26,
    topic: "Python",
    question: `Predict the output.

def test():
    for i in range(3):
        yield i

g = test()
print(list(g))
print(list(g))
`,
    options: [
        "[0,1,2] []",
        "[0,1,2] [0,1,2]",
        "[] []",
        "Runtime Error"
    ],
    correct: 0
},

{
    id: 27,
    topic: "Deep Learning",
    question: "Which optimizer combines momentum with adaptive learning rates by maintaining estimates of both first and second moments of the gradients?",
    options: [
        "SGD",
        "Adam",
        "RMSProp",
        "AdaGrad"
    ],
    correct: 1
},

{
    id: 28,
    topic: "Python",
    question: `Predict the output.

x = {1:'A',2:'B'}
print(x.setdefault(2,'C'))
print(x.setdefault(3,'D'))
`,
    options: [
        "B D",
        "C D",
        "B C",
        "Runtime Error"
    ],
    correct: 0
},

{
    id: 29,
    topic: "Machine Learning",
    question: "Which dimensionality reduction technique finds orthogonal directions that maximize the variance of the projected data?",
    options: [
        "t-SNE",
        "UMAP",
        "Principal Component Analysis (PCA)",
        "Linear Discriminant Analysis (LDA)"
    ],
    correct: 2
},

{
    id: 30,
    topic: "Python",
    question: `Predict the output.

print(any([0, False, '', [], 5]))
`,
    options: [
        "False",
        "True",
        "None",
        "ValueError"
    ],
    correct: 1
}, 
  {
    id: 31,
    topic: "Python",
    question: `Predict the output.

x = [[1,2],[3,4]]
y = x[:]
y[0][1] = 100
print(x)
`,
    options: [
        "[[1,2],[3,4]]",
        "[[1,100],[3,4]]",
        "[[100,2],[3,4]]",
        "Runtime Error"
    ],
    correct: 1
},

{
    id: 32,
    topic: "Machine Learning",
    question: "Which technique is specifically designed to handle class imbalance by synthetically generating new minority class samples?",
    options: [
        "PCA",
        "Bagging",
        "SMOTE",
        "Gradient Boosting"
    ],
    correct: 2
},

{
    id: 33,
    topic: "Python",
    question: `Predict the output.

a = (1,2,3)
print(a*2)
`,
    options: [
        "(1,2,3,1,2,3)",
        "[1,2,3,1,2,3]",
        "(2,4,6)",
        "TypeError"
    ],
    correct: 0
},

{
    id: 34,
    topic: "SQL",
    question: "Which SQL operator returns rows from the first query that are not present in the second query?",
    options: [
        "UNION",
        "INTERSECT",
        "EXCEPT",
        "JOIN"
    ],
    correct: 2
},

{
    id: 35,
    topic: "Generative AI",
    question: "In a Retrieval-Augmented Generation (RAG) pipeline, what is the primary purpose of the embedding model?",
    options: [
        "Generate the final response",
        "Convert text into dense vector representations for semantic retrieval",
        "Compress documents to reduce storage",
        "Fine-tune the LLM"
    ],
    correct: 1
},

{
    id: 36,
    topic: "Python",
    question: `Predict the output.

print({x:x*x for x in range(3)})
`,
    options: [
        "{0:0,1:1,2:4}",
        "[0,1,4]",
        "{1:1,2:4}",
        "Runtime Error"
    ],
    correct: 0
},

{
    id: 37,
    topic: "Deep Learning",
    question: "Which activation function is typically used in the output layer of a multi-class classification neural network?",
    options: [
        "ReLU",
        "Sigmoid",
        "Softmax",
        "Leaky ReLU"
    ],
    correct: 2
},

{
    id: 38,
    topic: "Python",
    question: `Predict the output.

s = "MachineLearning"
print(s[7:15])
`,
    options: [
        "Learning",
        "Learnin",
        "Learningg",
        "earning"
    ],
    correct: 1
},

{
    id: 39,
    topic: "Data Analytics",
    question: "Which measure of central tendency is least affected by extreme outliers?",
    options: [
        "Mean",
        "Median",
        "Weighted Mean",
        "Geometric Mean"
    ],
    correct: 1
},

{
    id: 40,
    topic: "Python",
    question: `Predict the output.

print(all([1,2,3,0]))
`,
    options: [
        "True",
        "False",
        "None",
        "ValueError"
    ],
    correct: 1
},
  
{
    id: 41,
    topic: "Python",
    question: `Predict the output.

x = [1, 2, 3]
print(x[::-1])
`,
    options: [
        "[3,2,1]",
        "[1,2,3]",
        "[1,3,2]",
        "Runtime Error"
    ],
    correct: 0
},

{
    id: 42,
    topic: "Machine Learning",
    question: "Which ensemble learning technique trains multiple weak learners sequentially, giving higher weight to previously misclassified samples?",
    options: [
        "Random Forest",
        "Bagging",
        "AdaBoost",
        "Stacking"
    ],
    correct: 2
},

{
    id: 43,
    topic: "Python",
    question: `Predict the output.

x = {1,2,3}
y = {3,4}
print(x | y)
`,
    options: [
        "{3}",
        "{1,2,3,4}",
        "{1,2}",
        "Runtime Error"
    ],
    correct: 1
},

{
    id: 44,
    topic: "SQL",
    question: "Which SQL clause is used to filter groups created by GROUP BY?",
    options: [
        "WHERE",
        "ORDER BY",
        "HAVING",
        "LIMIT"
    ],
    correct: 2
},

{
    id: 45,
    topic: "Statistics",
    question: "Which statistical measure represents the square root of variance?",
    options: [
        "Covariance",
        "Standard Deviation",
        "Mean Absolute Error",
        "Median"
    ],
    correct: 1
},

{
    id: 46,
    topic: "Python",
    question: `Predict the output.

def add(a, b=5, c=10):
    return a + b + c

print(add(5, c=20))
`,
    options: [
        "20",
        "25",
        "30",
        "35"
    ],
    correct: 2
},

{
    id: 47,
    topic: "Deep Learning",
    question: "What is the primary purpose of Dropout during neural network training?",
    options: [
        "Increase learning rate",
        "Reduce overfitting by randomly deactivating neurons",
        "Normalize feature values",
        "Reduce dataset size"
    ],
    correct: 1
},

{
    id: 48,
    topic: "Python",
    question: `Predict the output.

a = [10,20,30]
print(a.pop())
print(a)
`,
    options: [
        "30 [10,20]",
        "20 [10,30]",
        "30 [10,20,30]",
        "Runtime Error"
    ],
    correct: 0
},

{
    id: 49,
    topic: "Transformers",
    question: "Which Transformer component enables the model to attend to different representation subspaces simultaneously?",
    options: [
        "Layer Normalization",
        "Multi-Head Attention",
        "Positional Encoding",
        "Feed Forward Network"
    ],
    correct: 1
},

{
    id: 50,
    topic: "Python",
    question: `Predict the output.

x = [1,2,3]
print(len(x * 3))
`,
    options: [
        "3",
        "6",
        "9",
        "12"
    ],
    correct: 2
},
  {
    id: 51,
    topic: "Python",
    question: `Predict the output.

def outer():
    x = 10
    def inner():
        nonlocal x
        x += 1
        return x
    return inner

f = outer()
print(f(), f(), f())
`,
    options: [
        "10 10 10",
        "11 12 13",
        "11 11 11",
        "10 11 12"
    ],
    correct: 1
},

{
    id: 52,
    topic: "Pandas",
    question: "Which Pandas function is primarily used to combine two DataFrames based on one or more common columns, similar to an SQL INNER JOIN?",
    options: [
        "concat()",
        "append()",
        "merge()",
        "join_axes()"
    ],
    correct: 2
},

{
    id: 53,
    topic: "Python",
    question: `Predict the output.

nums = [1,2,3,4]
result = [x**2 for x in nums if x%2==0]
print(result)
`,
    options: [
        "[1,4,9,16]",
        "[2,4]",
        "[4,16]",
        "[1,9]"
    ],
    correct: 2
},

{
    id: 54,
    topic: "Machine Learning",
    question: "Which technique helps reduce overfitting by randomly selecting subsets of training samples with replacement while training multiple models?",
    options: [
        "Gradient Boosting",
        "Bagging",
        "Dropout",
        "Early Stopping"
    ],
    correct: 1
},

{
    id: 55,
    topic: "Python",
    question: `Predict the output.

x = [1,2,3]
print(x == x[:], x is x[:])
`,
    options: [
        "True False",
        "False True",
        "True True",
        "False False"
    ],
    correct: 0
},

{
    id: 56,
    topic: "NumPy",
    question: `What will be the shape of the following array?
import numpy as np
a = np.arange(24).reshape(2,3,4)
`,
    options: [
        "(24,)",
        "(2,12)",
        "(2,3,4)",
        "(3,2,4)"
    ],
    correct: 2
},

{
    id: 57,
    topic: "Python",
    question: `Predict the output.

x = "OpenAI"
print(x[-4:-1])
`,
    options: [
        "pen",
        "enA",
        "nAI",
        "AI"
    ],
    correct: 1
},

{
    id: 58,
    topic: "Deep Learning",
    question: "Which layer is typically placed immediately before the Softmax layer in a classification neural network?",
    options: [
        "Pooling Layer",
        "Fully Connected (Dense) Layer",
        "Embedding Layer",
        "Batch Normalization Layer"
    ],
    correct: 1
},

{
    id: 59,
    topic: "Python",
    question: `Predict the output.

a = [1,2]
b = [3,4]
print(a + b)
`,
    options: [
        "[1,2,3,4]",
        "[4,6]",
        "[[1,2],[3,4]]",
        "TypeError"
    ],
    correct: 0
},

{
    id: 60,
    topic: "Transformers",
    question: "In scaled dot-product attention, why are attention scores divided by √dₖ before applying Softmax?",
    options: [
        "To reduce memory usage",
        "To stabilize gradients by preventing extremely large dot-product values",
        "To improve tokenization",
        "To increase embedding dimensions"
    ],
    correct: 1
},
  {
    id: 61,
    topic: "Python",
    question: `Predict the output.

def square(x):
    return x*x

print(list(map(square, [1,2,3])))
`,
    options: [
        "[1,4,9]",
        "(1,4,9)",
        "[2,4,6]",
        "Runtime Error"
    ],
    correct: 0
},

{
    id: 62,
    topic: "Pandas",
    question: "Which Pandas function is used to calculate cumulative sums of values in a DataFrame column?",
    options: [
        "sum()",
        "rolling()",
        "expanding()",
        "cumsum()"
    ],
    correct: 3
},

{
    id: 63,
    topic: "Python",
    question: `Predict the output.

x = {1,2,3}
x.add(4)
print(len(x))
`,
    options: [
        "3",
        "4",
        "5",
        "Runtime Error"
    ],
    correct: 1
},

{
    id: 64,
    topic: "Machine Learning",
    question: "Which algorithm attempts to maximize the margin between different classes?",
    options: [
        "K-Means",
        "Decision Tree",
        "Support Vector Machine (SVM)",
        "Naive Bayes"
    ],
    correct: 2
},

{
    id: 65,
    topic: "Python",
    question: `Predict the output.

x = tuple(i for i in range(4))
print(x)
`,
    options: [
        "(0,1,2,3)",
        "[0,1,2,3]",
        "{0,1,2,3}",
        "Runtime Error"
    ],
    correct: 0
},

{
    id: 66,
    topic: "NumPy",
    question: "Which NumPy operation allows arrays with different but compatible shapes to participate in arithmetic operations without explicitly copying data?",
    options: [
        "Vectorization",
        "Broadcasting",
        "Flattening",
        "Reshaping"
    ],
    correct: 1
},

{
    id: 67,
    topic: "Python",
    question: `Predict the output.

print(bool([]), bool([0]), bool(""))
`,
    options: [
        "False False False",
        "False True False",
        "True True False",
        "False True True"
    ],
    correct: 1
},

{
    id: 68,
    topic: "Generative AI",
    question: "Which embedding similarity metric is most commonly used when comparing normalized embedding vectors in vector databases?",
    options: [
        "Euclidean Distance",
        "Cosine Similarity",
        "Manhattan Distance",
        "Jaccard Similarity"
    ],
    correct: 1
},

{
    id: 69,
    topic: "Python",
    question: `Predict the output.

def f(a,b,*c):
    print(len(c))

f(1,2,3,4,5)
`,
    options: [
        "2",
        "3",
        "5",
        "Runtime Error"
    ],
    correct: 1
},

{
    id: 70,
    topic: "Transformers",
    question: "Which component is responsible for injecting sequence-order information into Transformer models that otherwise process tokens in parallel?",
    options: [
        "Feed Forward Network",
        "Layer Normalization",
        "Positional Encoding",
        "Residual Connection"
    ],
    correct: 2
},
  {
    id: 71,
    topic: "Python",
    question: `Predict the output.

def decorator(func):
    def wrapper():
        return func() + " World"
    return wrapper

@decorator
def greet():
    return "Hello"

print(greet())
`,
    options: [
        "Hello",
        "Hello World",
        "World Hello",
        "TypeError"
    ],
    correct: 1
},

{
    id: 72,
    topic: "Pandas",
    question: "Which Pandas function is primarily used to reshape a DataFrame by converting rows into columns based on unique values?",
    options: [
        "pivot()",
        "merge()",
        "explode()",
        "concat()"
    ],
    correct: 0
},

{
    id: 73,
    topic: "Python",
    question: `Predict the output.

a = [1,2,3]
b = a
del a
print(b)
`,
    options: [
        "NameError",
        "[1,2,3]",
        "[]",
        "Runtime Error"
    ],
    correct: 1
},

{
    id: 74,
    topic: "Machine Learning",
    question: "Which algorithm builds multiple decision trees independently using bootstrap samples and random feature selection?",
    options: [
        "AdaBoost",
        "Gradient Boosting",
        "Random Forest",
        "XGBoost"
    ],
    correct: 2
},

{
    id: 75,
    topic: "Python",
    question: `Predict the output.

print(list(zip([1,2,3], ['A','B'])))
`,
    options: [
        "[(1,'A'),(2,'B')]",
        "[(1,'A'),(2,'B'),(3,None)]",
        "[(1,'A'),(2,'B'),(3,'')]",
        "ValueError"
    ],
    correct: 0
},

{
    id: 76,
    topic: "RAG",
    question: "Which chunking strategy generally provides the highest retrieval quality for enterprise documentation containing sections, tables, and code snippets?",
    options: [
        "Fixed character chunking",
        "Random chunking",
        "Semantic chunking based on document structure",
        "Sentence reversal chunking"
    ],
    correct: 2
},

{
    id: 77,
    topic: "Python",
    question: `Predict the output.

x = [1,2,3]
print(x.pop(1))
print(x)
`,
    options: [
        "2 [1,3]",
        "1 [2,3]",
        "3 [1,2]",
        "IndexError"
    ],
    correct: 0
},

{
    id: 78,
    topic: "NumPy",
    question: "Which NumPy function returns the index of the maximum element in an array?",
    options: [
        "max()",
        "argmax()",
        "amax()",
        "where()"
    ],
    correct: 1
},

{
    id: 79,
    topic: "Python",
    question: `Predict the output.

print("AI" > "AH")
`,
    options: [
        "True",
        "False",
        "TypeError",
        "ValueError"
    ],
    correct: 0
},

{
    id: 80,
    topic: "LLM",
    question: "Why is temperature set close to 0 during deterministic inference in Large Language Models?",
    options: [
        "To increase randomness",
        "To make outputs more consistent and reproducible",
        "To reduce vocabulary size",
        "To increase embedding dimensions"
    ],
    correct: 1
},
  {
    id: 81,
    topic: "Python",
    question: `Predict the output.

def func():
    return [lambda: i for i in range(3)]

result = func()
print([f() for f in result])
`,
    options: [
        "[0,1,2]",
        "[2,2,2]",
        "[3,3,3]",
        "Runtime Error"
    ],
    correct: 1
},

{
    id: 82,
    topic: "LLM",
    question: "What is the primary purpose of the KV (Key-Value) Cache during autoregressive inference in Transformer-based LLMs?",
    options: [
        "Reduce model parameters",
        "Avoid recomputing attention for previously generated tokens",
        "Store model checkpoints",
        "Compress the embedding matrix"
    ],
    correct: 1
},

{
    id: 83,
    topic: "Python",
    question: `Predict the output.

a = [[1],[2]]
b = a * 2
b[0].append(100)
print(b)
`,
    options: [
        "[[1],[2],[1],[2]]",
        "[[1,100],[2],[1,100],[2]]",
        "[[100],[2],[100],[2]]",
        "Runtime Error"
    ],
    correct: 1
},

{
    id: 84,
    topic: "Vector Database",
    question: "Which FAISS index provides the highest recall but generally requires the most memory for billion-scale vector search?",
    options: [
        "IndexIVFPQ",
        "IndexFlatL2",
        "IndexHNSWFlat",
        "IndexIVFFlat"
    ],
    correct: 1
},

{
    id: 85,
    topic: "Python",
    question: `Predict the output.

class A:
    x = 10

a = A()
b = A()

a.x = 20

print(A.x, a.x, b.x)
`,
    options: [
        "20 20 20",
        "10 20 10",
        "10 20 20",
        "20 10 10"
    ],
    correct: 1
},

{
    id: 86,
    topic: "RAG",
    question: "A RAG system retrieves highly relevant documents, but the LLM frequently ignores the retrieved context and hallucinates. What is the MOST likely cause?",
    options: [
        "Embedding dimension is too large",
        "Prompt template fails to instruct the model to ground its answers in retrieved context",
        "Vector database contains duplicate embeddings",
        "Chunk overlap is greater than 20%"
    ],
    correct: 1
},

{
    id: 87,
    topic: "Python",
    question: `Predict the output.

from collections import Counter

c = Counter("banana")
print(c.most_common(1))
`,
    options: [
        "[('a', 3)]",
        "[('n', 3)]",
        "[('b', 2)]",
        "[('a', 2)]"
    ],
    correct: 0
},

{
    id: 88,
    topic: "Transformers",
    question: "What is the primary motivation behind Rotary Positional Embeddings (RoPE) in modern LLMs such as LLaMA?",
    options: [
        "Reduce vocabulary size",
        "Improve extrapolation to longer context lengths while encoding relative positional information",
        "Compress attention matrices",
        "Replace token embeddings entirely"
    ],
    correct: 1
},

{
    id: 89,
    topic: "Python",
    question: `Predict the output.

x = {i:i*i for i in range(5)}
print(sum(x.values()))
`,
    options: [
        "25",
        "30",
        "55",
        "20"
    ],
    correct: 1
},

{
    id: 90,
    topic: "Generative AI",
    question: "Which fine-tuning technique trains only a small number of low-rank matrices while keeping the original LLM weights frozen?",
    options: [
        "RLHF",
        "Knowledge Distillation",
        "LoRA",
        "Prompt Chaining"
    ],
    correct: 2
},
  {
    id: 91,
    topic: "Generative AI",
    question: "Which quantization technique is specifically designed to fine-tune large language models using 4-bit quantized weights while preserving model quality?",
    options: [
        "Knowledge Distillation",
        "QLoRA",
        "Pruning",
        "Weight Sharing"
    ],
    correct: 1
},

{
    id: 92,
    topic: "LLM",
    question: "What is the primary objective of Reinforcement Learning from Human Feedback (RLHF) during LLM alignment?",
    options: [
        "Reduce the number of model parameters",
        "Optimize the model to generate responses preferred by humans",
        "Improve tokenizer efficiency",
        "Compress embeddings"
    ],
    correct: 1
},

{
    id: 93,
    topic: "Python",
    question: `Predict the output.

async def f():
    return 10

print(type(f()))
`,
    options: [
        "<class 'int'>",
        "<class 'coroutine'>",
        "<class 'generator'>",
        "Runtime Error"
    ],
    correct: 1
},

{
    id: 94,
    topic: "AI Agents",
    question: "Which capability fundamentally distinguishes an AI Agent from a traditional prompt-response chatbot?",
    options: [
        "Supports multiple languages",
        "Can autonomously plan, use tools, maintain state, and execute multi-step tasks",
        "Uses Transformer architecture",
        "Has a larger context window"
    ],
    correct: 1
},

{
    id: 95,
    topic: "MCP",
    question: "What is the primary purpose of the Model Context Protocol (MCP)?",
    options: [
        "Compress LLM parameters",
        "Standardize communication between AI models and external tools, data sources, and applications",
        "Train Transformer models faster",
        "Optimize GPU utilization"
    ],
    correct: 1
},

{
    id: 96,
    topic: "Vector Database",
    question: "Which Approximate Nearest Neighbor (ANN) algorithm builds a hierarchical graph structure to achieve fast similarity search with high recall?",
    options: [
        "K-Means",
        "HNSW",
        "DBSCAN",
        "Apriori"
    ],
    correct: 1
},

{
    id: 97,
    topic: "Python",
    question: `Predict the output.

class Test:
    count = 0

    def __init__(self):
        Test.count += 1

a = Test()
b = Test()

print(Test.count)
`,
    options: [
        "0",
        "1",
        "2",
        "Runtime Error"
    ],
    correct: 2
},

{
    id: 98,
    topic: "LangGraph",
    question: "What is the primary advantage of LangGraph over simple sequential LLM chains?",
    options: [
        "It replaces vector databases",
        "It enables stateful, cyclic, and conditional workflows for AI agents",
        "It automatically fine-tunes LLMs",
        "It compresses prompts"
    ],
    correct: 1
},

{
    id: 99,
    topic: "Mixture of Experts (MoE)",
    question: "What is the primary benefit of a Mixture of Experts (MoE) architecture compared to a dense Transformer of similar total parameter count?",
    options: [
        "Every expert processes every token",
        "Only a subset of experts is activated for each token, improving computational efficiency while increasing model capacity",
        "It eliminates the need for attention",
        "It removes positional encoding"
    ],
    correct: 1
},

{
    id: 100,
    topic: "Enterprise GenAI",
    question: "An enterprise RAG application retrieves highly relevant documents, but the generated answers occasionally include fabricated facts that are not present in the retrieved context. Which architectural improvement is MOST effective in reducing these grounded hallucinations?",
    options: [
        "Increase the LLM temperature to improve diversity",
        "Add a grounded answer verification step that validates generated claims against retrieved evidence before returning the response",
        "Increase the embedding vector dimension",
        "Replace semantic search with keyword search only"
    ],
    correct: 1
}
];

module.exports = questions;
