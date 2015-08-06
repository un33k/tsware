System.config({
  baseURL: '/',
  paths: {
    'angular2/*': 'lib/*.js',
    'common/*': 'common/*.js',
    'component/*': 'component/*.js',
    '*': '*.js',
  }
});

System.import('app')
  .catch(e => console.error(e, 'Error'));
