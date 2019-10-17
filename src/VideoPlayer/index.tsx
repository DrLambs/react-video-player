import React from 'react';
import videojs from 'video.js';
import './index.less';

export interface VideoPlayerProps {
  vid: string;
  url: string;
  style: any;
}

class VideoPlayer extends React.Component<VideoPlayerProps> {
  props: { vid: any; url: any; style: any; };

  public componentDidMount() {
    const { vid } = this.props;
    try {
      document.querySelector(vid);
    } catch (e) {
      console.log(e);
    }
    // 组件挂载, 实例化播放器
    videojs(vid, {
      controls: true,
      autoplay: true,
      preload: 'auto',
    });
  }

  public componentWillUnmount() {
    const { vid } = this.props;
    // 组件卸载, 销毁播放器
    videojs(vid).dispose();
  }

  public render() {
    const { vid, url, style } = this.props;
    return (
      <div className="video-player">
        <video
          id={vid}
          className="video-js vjs-default-skin"
          {...{
            style,
          }}
        >
          <source src={url} type='application/x-mpegURL' />
          <track kind="captions" />
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
