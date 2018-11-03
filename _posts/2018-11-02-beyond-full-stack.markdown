---
layout: post
title: "Beyond full stack"
author: Patrick McDavid
image: 
  feature: bombbomb-team.jpg
tags: [KanBan, Teams, Leadership]
---

_This is reblogged from [my interview on BuiltIn Colorado](https://www.builtincolorado.com/2018/06/29/inside-bombbomb-dev-team-colorado-springs)_

BombBomb’s video messaging app helps businesses drive sales and convert leads by building trust and engaging customers face to face — even when they can’t be physically present with a client. It’s a smooth, simple user experience that makes capturing, encoding and sending videos in real time seem easy.

The technology that makes all that possible, though, is far from simple.

Behind the scenes, BombBomb’s engineering team must go beyond full-stack development to create complex systems that work in the cloud, in bad connectivity and within single-digit seconds. We asked VP of Technology Patrick McDavid to dive into the details of BombBomb’s robust tech stack and explain both the opportunities and challenges he and his team face.

### Tell us a little bit about BombBomb's tech stack and why you chose those technologies.

BombBomb makes it easy to build relationships with simple videos. This seemingly straightforward endeavor requires a lot of investment on all sides of just-in-time video delivery. We work very hard to make sure no time is wasted in our users' workflows. We're both transferring and transcoding video in the cloud as people are filming — not after. This allows videos to be ready for delivery within single-digit seconds of the user pressing stop.

To accomplish this, we end up having to go further than using pre-built video SDKs in the browser and mobile platforms. BombBomb has to reliably and quickly capture video streams from laptops and cell phones in sketchy network environments. This involves choosing between WebRTC solutions and lower-level H.264 byte buffers, depending on the software and network environment.

On the cloud side, we employ a serverless NodeJS and FFmpeg pairing to enable parallelized same-job encoding work. This frees us from having to maintain a standing fleet of cost-heavy encoding servers. All encoding work is treated as burst work which scales seamlessly when we hit load peaks.

Outside of video delivery, we have a PHP7 monolith from which we've been extracting services as needed, usually to NodeJS. We blend serverless and containerized deployment as the case requires. New major efforts are usually deployed with Node and DynamoDB and Redis in small, independent services. After a brief Angular period in 2015, we've standardized on ReactJS for our front-end.

### What are some of the challenges of working with such a robust and complex stack? How have you overcome those challenges?

We've had mixed success leveraging write-once-run-everywhere tools like Xamarin and hybrid mobile applications. Speed is always a major goal for us, and often we've struggled to get what we need out of web views on phones.

In the last couple years, we've gone all-in on native mobile development. This has meant some duplication of effort between our Android and iOS projects. We've mitigated some of this by finding useful cross-platform libraries that allow us to re-use knowledge and patterns between the platforms.

We rely heavily on our CI/CD pipelines, linting and a well-loved code review process. We also invest strongly in one another. We try to over-communicate every time; we work to level-up one another's abilities; we host regular lunch-and-learns on patterns and technologies and book clubs on best practices to make sure everyone is well equipped for tomorrow.

### What soft skills does someone need to be successful on your team?

Curiosity, humility, perseverance and excitement.

 
### What is the most rewarding aspect of working on BombBomb's product?

BombBomb's been a very rewarding environment to work in, primarily because our software can have such a profound, positive effect on people’s lives and businesses. Despite our highly connected world, there's an epidemic of facelessness in our online connections. Human beings have deep biological needs to be seen and heard, and to look into the eyes of another to help build trust.

Too often people are left trying to convey enthusiasm, opportunity and possibility with the written word when there's no reason today to limit oneself that way.

 

### Is there anything special about the processes this team uses?

BombBomb was early to the CI/CD revolution, which has always enabled us to move very quickly. One sticking point of this has been that agile sprints have felt slow to us. We're very proud that we can deliver value to customers in very short order. We've successfully and enthusiastically matched our process to our continuous delivery ethos with a Kanban development methodology.

Primarily, Kanban enables BombBomb to pivot quickly without having to alter or abandon sprints. No work is promised until it is undertaken, and stakeholders can re-prioritize the backlog at any time. Team members work together to share knowledge and not over-specialize, so work becomes less coupled to particular team members.

### How do you encourage developers  — at any level — to innovate or think creatively about the problems you solve?

I often ask, “What are three ways we could do this?” It's crucial to bat the challenge around a few times before taking a crack at it. I encourage my team to whiteboard, talk, take the problem to lunch, search and read, or go for a walk. Then we need to ask ourselves, “What about this can be thrown away? Is this really the problem to solve?”