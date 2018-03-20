// load all of the files under the specs folder which will have .spec string in their name
const testsContext = require.context('./specs', true, /\.spec$/)

testsContext.keys().forEach(testsContext);
