
# @muum/react-video-player

`@muum/react-video-player` 是一个基于 [`video.js`](https://www.npmjs.com/package/video.js) 封装的在 `react` 项目中使用的支持播放 `m3u8` 格式的视频播放器.

![](https://img.shields.io/badge/dependencies-2-brightgreen)
![](https://img.shields.io/badge/license-MIT-brightgreen)
![](https://img.shields.io/badge/version-1.1.7-brightgreen)

# 使用方法

1. 安装

    ```js
    npm install @muum/react-video-player --save
    ```

2. 使用

    ```js
    import VideoPlayer from '@muum/react-video-player';

    <VideoPlayer {...{vid, url}} />
    ```

# 注意事项

`vid` 不能是纯数字

