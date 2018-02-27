---
layout: post
title: CloudFront Invalidation with TravisCI
author: Patrick McDavid
img: cloudyMountain.jpg
tags: [AWS, CloudFront, TravisCI]
---

_This is reblogged from [my post on the BombBomb Developer Blog](https://developer.bombbomb.com/blog/2018/02/27/TravisCI-Cloudfront-Cache-Invalidation/)_

I wrote here a few months ago about [Easy Cloudfront cache-busting with Travis-CI](https://developer.bombbomb.com/blog/2017/10/16/CacheExpiration/). I'd not really liked the solution I offered in that post and am back to share the far better solution I found this week, which is just about as easy!<!--more-->

CloudFront achieves high speed global delivery of content by caching content at edge locations all over the world. BombBomb uses CloudFront to serve video, images and web application to end users at speed.

Web apps in particular need to update CDN-hosted HTML/JS/CSS regularly. CloudFront offers an invalidation function where you can inform CDN edge locations that they need to fetch the assets again as there's new content there.

For our NodeJS/TravisCI projects we've begun using Alex Patow's  [travis-ci-cloudfront-invalidation](https://github.com/alexpatow/travis-ci-cloudfront-invalidation) to handle this with only a couple of added lines of `.travis.yml` configuration.

To accomplish this in your project, first you'll need to install the package in your travis runtime:

```yaml
install:
- npm install -g travis-ci-cloudfront-invalidation
- npm install
```

At the tail of your configuration, you'll add an `after_deploy` clause:

```yaml
after_deploy:
  - travis-ci-cloudfront-invalidation -a $AWS_ACCESS_KEY -s $AWS_SECRET_KEY -c $AWS_CLOUDFRONT_DIST_ID -i '/*' -b $TRAVIS_BRANCH -p $TRAVIS_PULL_REQUEST
```

You'll need to grant an AWS IAM user rights to Write Cache Invalidations to CloudFront, and then you'll need to give TravisCI a few environment variables pertaining to that IAM user and the CloudFront distribution you'd like to invalidate:

 - AWS_ACCESS_KEY
 - AWS_SECRET_KEY
 - AWS_CLOUDFRONT_DIST_ID
 
Running this will reward you with a JSON blob representing the CloudFront invalidation Travis has kicked off on your behalf:

```json
{
  "Location": "https://cloudfront.amazonaws.com/2017-03-25/distribution/xxxxxxx/invalidation/xxxxxx",
  "Invalidation": {
    "Id": "xxxxxx",
    "Status": "InProgress",
    "CreateTime": "2018-02-27T18:03:04.847Z",
    "InvalidationBatch": {
      "Paths": {
        "Quantity": 1,
        "Items": [
          "/*"
        ]
      },
      "CallerReference": "2018-02-27T18:03:04.733Z"
    }
  }
}
```

This package does not automatically do a per-file invalidation, instead leaving it up to you to tell it which files are changed. Their suggestion out of the gate is simply to invalidate `/*`, representing everything. In our use case that's not too big of a deal.