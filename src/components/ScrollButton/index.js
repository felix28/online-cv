import React from 'react';
import {useEffect} from 'react';
import {createScripts, loadScriptsSequential, removeScripts} from '../../utils/script_loader';

const ScrollButton = (props) => {
  var config = props.config;
  useEffect(() => {
      const scriptUrls = [
        '/static/js/scroll_to_top_button.js',
      ];
      var scripts = createScripts(config, scriptUrls, 'scroll-button');
      loadScriptsSequential(scripts, '#app-2');
      return function () {return removeScripts(scripts)};
    }, []);

  return (
      <button type="button" className="btn btn-dark btn-floating btn-lg" id="btn-back-to-top">
          <i className="bi-arrow-up"></i>
      </button>
  );
};

export default ScrollButton;