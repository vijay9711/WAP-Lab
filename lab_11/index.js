const dns = require('node:dns');

getIp = () => {
  dns.lookup('www.miu.edu', (err, address) => {
    console.log(address);
  });
}
getIp();