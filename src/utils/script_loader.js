import {getResourcePath} from "./utilities";

/**
 * File dedicated to offering utility functions
 * for importing external scripts to React project.
 */

/**
 * Creates script tags.
 * @param {Array} scripts paths to scripts.
 * @param {String} idPrefix prefix for each tag id.
 */
function createScripts(config, scripts, idPrefix){
  var result = [];
  for (var i in scripts){
    var script = document.createElement("script");
    script.src = getResourcePath(config, scripts[i]);
    script.async = true;
    script.id = idPrefix+'-'+i;
    script.onload = function () {
      this.setAttribute('data-loaded', true);
    }.bind(script);
    result.push(script);
  }
  return result;
}

/**
 * Loads scripts sequentially.
 * @param {Array} scripts script tags.
 * @param {String} selector selector after which 
 *  the scripts should be loaded.
 */
function loadScriptsSequential(scripts, selector=undefined){
  var refeshRate = 25;
  var maxDelay = 5000;
  var i = 0;
  if (selector === undefined){
    document.body.appendChild(scripts[0]);
    selector = '#' + scripts[0].id;
    i = 1;
  }
  while (i < scripts.length){
    waitForScriptToLoad(selector, function (){
      document.body.appendChild(this);
    }.bind(scripts[i]), refeshRate, maxDelay);
    selector = '#' + scripts[i].id;
    i++;
  }
}

/**
 * Removes scripts from DOM.
 * @param {Array} scripts script tags.
 */
function removeScripts(scripts){
  for (var i in scripts){
    document.body.removeChild(scripts[i]);
  }
}

/**
 * Waits for script to load before executing callback.
 * @param {String} selector selector of previous script in sequence.
 * @param {Function} callback 
 * @param {Integer} checkFrequencyInMs checking frequency in milliseconds.
 * @param {Integer} timeoutInMs timout duration in milliseconds.
 */
function waitForScriptToLoad(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    var script = document.querySelector(selector);
    if (script != null && script.getAttribute('data-loaded') === 'true') {
        callback();
        return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}

export {createScripts, loadScriptsSequential, removeScripts};