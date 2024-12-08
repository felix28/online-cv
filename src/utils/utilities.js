 /**
 * Calculates path of resource depending on project path.
 * @param {String} path path of resource
 */
function getResourcePath(config, path='') {
  var configPath = config.repositoryName;
  var noPrefix = (configPath === '' || configPath === '/' 
    || (path.length > 0 && !path.includes('/static/')));
  var prefix = (noPrefix) ? '' : '/' + configPath;
  path = prefix + path;
  return path;
}

/**
 * Retrieves JSON file.
 * Used to avoid including JSON in bundle.
 * @param {String} path path of resource.
 */
function getJsonConfig() {
  var loc = getConfigPath();
  return fetch(loc)
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(rej => {
      loc = getConfigPath(true);
      return fetch(loc)
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(json => {
        return json;
      })
      .catch(rej => {
        console.log(rej);
      });
    });
}

/**
 * Caculates config path depending on repository type.
 * @param {Boolean} isPersonalSite type of repository.
 */
function getConfigPath(isPersonalSite=false){
  var s_0 = window.location.origin + '/'; 
  var s_1 = '';
  var s_2 = 'config.json'; 
  var result = '';
  if (isPersonalSite){
    result = s_0 + s_2;
  } else {
    var arr = window.location.pathname.split('/');
    for (var i=0;i<arr.length;i++){
      if (arr[i].length>0){
        s_1 = arr[i] + '/';
        break;
      }
    }
    result = s_0 + s_1 + s_2;
  }
  return result;
}
  
export {getResourcePath, getJsonConfig};