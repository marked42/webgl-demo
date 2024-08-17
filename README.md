# Notes

1. [MDN WebGL Tutorial](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Tutorial)
1. [WebGL Fundamentals](https://webglfundamentals.org/)
1. [An intro to modern OpenGL](https://duriansoftware.com/joe/an-intro-to-modern-opengl.-table-of-contents)

1. https://learnwebgl.brown37.net/
1. https://github.com/Mindsblend/3D-Web-Roadmap/blob/master/02-graphics-and-3d-concepts/Introduction%20to%203D%20Graphics/main.md#what-is-3d-graphics
1. [从头开始学习 GLSL 着色器 Learn GLSL Shaders from Scratch](https://www.bilibili.com/video/BV1kP4y1Y7MT/?spm_id_from=333.999.0.0&vd_source=192c54645a419374c428d6a7836b2ab0)
1. [【Shader 入门】创建你的第一个 Shader.p1](https://www.bilibili.com/video/BV17a411W79p/?vd_source=192c54645a419374c428d6a7836b2ab0)

1. [GAMES101-现代计算机图形学入门-闫令琪](https://www.bilibili.com/video/BV1X7411F744/?spm_id_from=333.337.search-card.all.click&vd_source=192c54645a419374c428d6a7836b2ab0)
1. [GAMES102:几何建模与处理](https://www.bilibili.com/video/BV1NA411E7Yr/?spm_id_from=333.337.search-card.all.click&vd_source=192c54645a419374c428d6a7836b2ab0)
1. https://threejs-journey.com/#highlights
1. https://threejs.org/manual/

1. https://thebookofshaders.com/?lan=ch
1. https://www.shadertoy.com/

## GLSG

1. Storage qualifier (attribute / uniform / varying / const)

1. is a state machine, clear/drawArray/drawElements
1. drawArray
1. drawElements

mode:

1. POINTS 一个点一组
1. 两个点一组
   1. LINES 每两个组成一组，点不重复使用
   1. LINE_LOOP 每个点与后边的点组成一组，共 n 个线段，形成闭环。
   1. LINE_STRIP 每个点与后边的点组成一组，共 n - 1 个线段
1. 三个点一组
   1. TRIANGLE 不重复使用
   1. TRIANGLE_STRIP 重复使用
   1. TRIANGLE_FAN 第一个点重复使用
1. [Introduction to Computer Graphics](https://www.youtube.com/playlist?list=PLplnkTzzqsZTfYh4UbhLGpI5kGd5oW_Hh)
