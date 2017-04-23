switch (process.env.NODE_ENV) {
    case 'production-jit':
        console.log('************************************');
        console.log('******  PRODUCTION JIT BUILD  ******');
        console.log('************************************\n');
        module.exports = require('./config/webpack.prod.jit');
        break;
    case 'production-aot':
        console.log('************************************');
        console.log('******  PRODUCTION AOT BUILD  ******');
        console.log('************************************\n');
        module.exports = require('./config/webpack.prod.aot');
        break;
    case 'test':
    case 'testing':
        console.log('********************************');
        console.log('******     TEST BUILD     ******');
        console.log('********************************\n');
        module.exports = require('./config/webpack.test');
        break;
    case 'dev':
    case 'development':
    default:
        console.log('*********************************');
        console.log('******  DEVELOPMENT BUILD  ******');
        console.log('*********************************\n');
        module.exports = require('./config/webpack.dev');
}
