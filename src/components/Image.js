import React from 'react';

const Image = (props) => (
  <li>
  <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_z.jpg`} alt={props.alt} />
</li>
);

export default Image;
