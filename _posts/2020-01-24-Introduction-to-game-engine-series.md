---
layout: post
title: 🎮게임 엔진 개발기(0) - 시리즈 소개
date:   2020-01-24 18:45:46
description: 
img: GameEngine/Post0/BackGround.jpg # Add image post (optional)
tags: [game engine, c++]
author: Junyoung Kim # Add name author (optional)
---

# 개요
항상 언젠가 나만의 엔진이 만들고 싶었다. 지난 2019년 9월 기회가 생겼고, 3개월간 기초적인 형태의 게임 엔진을 개발하게 되였다. 그 뒤, 두 번의 구조 개선이 이루어졌다. 화면에 보이는 GUI 요소라곤 하나도 없는 정적 라이브러리 엔진이지만, 필요한 부분은 모두 구현 되었고, 나 혼자 뼈대부터 만들었다는 사실이 만족스럽다. 그 뒤 

개발하는 동안 가장 힘들었던 부분은 자료를 찾는 것이었다. 온라인, 오프라인 가리지 않고 도움이 될만한 자료들은 죄다 찾아봤다. 그 중 가장 많이 도움이 되었던 것은 '***Game Coding Complete 4/E***'과 '***Game Engine Architecture 3/E***' 라는 두 서적이었다. 당연하게도, 한국어로 작성된 자료들은 그리 많지 않았다. 해외에서 학부 공부를 하는 덕에 불편함은 없었다. 하지만, 추후 나와 같은 상황에 놓이게 된다면 불편을 겪는 사람들이 생길 것이다.  

그래서 이곳에 '게임 엔진 개발기' 시리즈를 연재하며, 엔진을 조금씩 소개하면서 배웠던 내용과 느꼈던 점을 공유하려 한다. 아직 고쳐야 할 점과 추가해야한 점이 많지만, 많은 사람들에게 도움이 되길 바란다.  


# Whale Engine
내가 만든 게임 엔진의 이름은 '**Beluga Engine**' 이다. 알아보니 *LGM Games* 라는 게임사에서 이미 사용중인 이름이다😒. 이름은 추후 변경하는 걸로 하고, 이 부분에선 **Beluga Engine**의 핵심 부분들을 간력하게 나열한다.

## **사용된 라이브러리**
**Beluga Engine**은 현재까지 아래의 라이브러리를 사용하여 개발 되었다.
1. SDL2 v2.0.7
2. SDL_Image v2.0.2
3. SDL_Mixer v2.0.2
4. zlib v1.2.11
5. Box2D
6. Lua 5.3
7. Tinyxml2
8. Visual Leak Detector v2.5.1

## **코어 기능**
다음은 **Beluga Engine**이 현재(2020.06.01)까지 지원하는 핵심 기능들이다.
- Engine Configuration
- Graphics
    - SDL2.0
- Input 
    - Keyboard 
- Music / Sound
- Actor-Component Model
- Process
- Event
- Pool Memory Allocator
- Resource Compression & decompression
  - *.bin*
- Resource Cache
- Scripting
  - *Lua*
- Collision Detection
- Level Editing 
  - *Tiled*