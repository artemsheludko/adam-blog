---
layout: post
title: Hotdog detection with Serverless Computer Vision
description: Feeling jazzed to hear some CTOs and VPEs drop knowledge next week.
img: hotdogcollage.jpg
tags: [Presentation, Talk, Serverless, Machine Learning, Javascript, AWS, Rekognition]
---

_Photo credit to [Umai Hotdogs](http://umaihotdogs.com/) of Sacremento for their scrumptious looking dogs._

Last night I [gave a talk at coloradoSprings.js](https://www.meetup.com/coloradospringsjs/events/xwwhglywnbhc/) about the [serverless framework](https://serverless.com/). 

I wish I'd went to the trouble of recording the presentation, and will try that the next time I give one, but for now I can offer you the [slide deck](https://docs.google.com/presentation/d/1dD4L0T2ms08jJcvriuyi0J6vaKQjI-1E6JLXYoLvtgM), and this quick write-up.

## Hotdog Cloud?
<img src="/assets/img/dogClip.gif" style="float:right;padding-left:20px;">
The hottest space in tech in 2017 is inarguably hotdog detection and non-detection. Everybody's trying to get a piece of the action. So I spent a couple nights building <https://hotdog.cloud> a mobile-friendly hotdog detection app. Give it a shot right now. [Hotdog cloud is open sourced on github](https://github.com/ehippy/hotdog), so feel free to play with it.

Hotdog Cloud ties together about half a dozen AWS services to offer an encrypted, zero-cost-at-rest web application.

## Takeaways

 - Serverless enables a very simple infrastructure-as-code workflow from a single YML file, in many languages
 - Free managed SSL is a snap with [Amazon Certificate Manager](https://aws.amazon.com/certificate-manager/)
 - Neat, easy machine learning tools are a line or two of code with [AWS Rekognition](https://aws.amazon.com/rekognition/), etc

I really enjoy the serverless framework's blend of control and automation. I've used minimalist tools like [Chalice](https://github.com/aws/chalice), and have found that I start bumping into the edges of what they can do pretty quickly. Serverless Framework exposes the full power of Terraform, allowing the management of most of kinds of cloud resources automatically.

In the future I'd like to try pointing serverless at Google Cloud or Azure and see what the appreciable differences are there.

Hotdog cloud was a great little project that's still fun to pull out on my phone whenever the bratwurst guy at home depot tempts me by.