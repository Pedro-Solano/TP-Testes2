// Arquivo principal
const web = require('./adapters/webAdapter.js');

const userRepo = require('./adapters/userRepository.js');
const billRepo = require('./adapters/billRepository.js');
const notificationRepo = require('./adapters/notificationRepository.js');
const notificationDomain = require('./domain/Notification/notificationDomain.js');
const userDomain = require('./domain/User/userDomain.js');
const billDomain = require('./domain/Bill/billDomain.js');

userDomain.configRepo(userRepo);
billDomain.configRepo(billRepo);
notificationDomain.configRepo(notificationRepo);

web.start();