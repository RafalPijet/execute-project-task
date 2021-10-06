import React, { useState, useEffect } from 'react';
import { useStyles, Props } from './MainStyle';
import image from '../../../images/background.jpg';

const Main: React.FC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles();
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = useState<string>(
    'translate3d(0,' + windowScrollTop + 'px,0)'
  );

  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform);
    }
    return () => {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform);
      }
    };
  });

  const resetTransform = (): void => {
    let windowScrollTop = window.pageYOffset / 3;
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)');
  };

  return (
    <div
      className={classes.root}
      style={{
        transform: transform,
        backgroundImage: `url(${image})`,
      }}
    >
      {children}
    </div>
  );
};

export default Main;
