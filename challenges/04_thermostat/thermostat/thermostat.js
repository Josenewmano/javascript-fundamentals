class Thermostat {

  constructor() {
    this.temp = 20;
    this.psm = true;
  };

  getTemperature() {
    return this.temp;
  };

  up() {
    if(this.psm === true && this.temp < 25) this.temp += 1;
    if(this.psm === false && this.temp < 32) this.temp += 1;
  };

  down() {
    if(this.temp > 10) this.temp -= 1;
  };

  setPowerSavingMode(setting) {
    this.psm = setting;
  };

  reset() {
    this.temp = 20;
  };
};

module.exports = Thermostat;