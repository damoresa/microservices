switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        console.log('********************************');
        console.log('******  PRODUCTION BUILD  ******');
        console.log('********************************\n');
        module.exports = require('./config/webpack.prod');
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
