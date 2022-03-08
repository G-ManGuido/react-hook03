import React from 'react';
import Collapsible from 'react-collapsible';
import './collaps.css';

const Collabs = () => {
  return (
    <div>
      <Collapsible trigger="Start here1">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>
      <Collapsible trigger="Start here2">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>
    </div>
  );
};

export default Collabs;