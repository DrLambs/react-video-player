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
    videojs(vid);
  }

  public render() {
    const { vid, url, style } = this.props;
    return (
      <div className="video-player">
        <video
          id={vid}
          controls
          preload="auto"
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
