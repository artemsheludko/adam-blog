---
layout: post
title: All Hail GPT-3
date: 2020-06-16 13:32:20 +0300
description: Is it a Memory Bank or an NLP Ultimatum?
<!-- img: post-6.jpg # Add image post (optional) -->
tags: [Blog, NLP, Few Shot]
author: Priyanshu Sinha
---

So last week OpenAI told the world about this gigantic model which was trained on 174,600 million parameters and released a 74-page research paper titled Language Models are Few-Shot Learners. If you don’t get the depth of this number then see the parameters used in the past models. Huge Right? If you are still not overwhelmed then have a look at the training dataset numbers. Anyway, the title itself is quite interesting and gives a new way of thinking that language models can be used to produce good results on zero-shot, one-shot, or few-shot learning. These three terms are used in every test set they tested and from the results, it seems that we have achieved the ultimatum but let us start from the beginning and analyse some test data and results.
With the introduction of transformers, this decade has become magical for NLP and with the birth of GPT-3, everything seems so easy because in the 74-page Research Paper they have shown the model’s results in three ways.

1. Zero-shot — You have a task description(you write what you want to do) and a prompt(for this case write the word/sentence which you need to translate). With these two things the model would understand what we want to do and do the task. Why is this so difficult? Because this model was not explicitly trained on translating tasks and is relying on the humongous training dataset.

2. One-shot — In this learning you give a single example for the model to have some insights.

3. Few-shot — The above two learnings are a good parameter to test how your model is performing but few-shot learning can give you some real insights as you are teaching your machine to do a particular task in a few examples as possible(What we know as Meta-Learning). The number of examples shown to the machines varies from task to task wherein some tasks 20 examples were shown while in other 60.


Isn’t it amazing that you write what you want to do, show some examples and in some cases none and you have an answer without training your machine particularly for that task? But don’t you think these models are just becoming a memory replacement device for humans which when given a certain task would take a peek in their quasi-static lookup table and tadaa you have an answer. See this example of theirs where they promise to solve 2digit addition with 100% accuracy.

Even if I am getting correct answers that is only because the model saw the same pattern in the train data and if not then the model learnt these things from our world. converting strings to numbers. adding numbers with carrying on base-10


Let me explain some conclusion, terminologies and logical deductions of this highly commendable research published by OpenAI.

As you must know that GPT is a language model which means it understands sequences and outputs a probability for the next word for eg: I love tulips. My favourite flowers are _____.

This whole language modelling fuss started with BERT which had approximately 109 million parameters and then GPT’s came which had 13 million parameters(GPT-2 had 1.5 billion params) and the latest one which we had was of Microsoft's which had 13 billion params but now we have GPT-3 with 175 billion parameters which is approximately 12.5 times more than the model which was too dangerous to release in the open world as it could have been misused for fake news generation. In this article, I would talk about two tasks and their results which I found interesting and thought of shedding some light through my conclusions and logical deductions.

Check out complete story at [Medium](https://medium.com/swlh/all-hail-gpt-3-389c7f1fcb3b)

