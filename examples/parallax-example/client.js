import React from 'react';
import ReactDOM from 'react-dom';
import { ParallaxExample } from 'components';
import { ParallaxScroller } from 'react-scroll-parallax';

ParallaxScroller.init();

const root = document.getElementById('root');

ReactDOM.render(<ParallaxExample />, root);