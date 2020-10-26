
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey({}, driver, key) {
  const driverc = Object.assign({}, driver);
  delete driverc.key;
  return driverc;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;

}

