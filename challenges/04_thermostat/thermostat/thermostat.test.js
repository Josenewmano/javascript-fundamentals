const Thermostat = require('./thermostat');

describe(Thermostat, () => {
  const stat = new Thermostat();

 it("returns the temperature with getTemperature()", () => {
    expect(stat.getTemperature()).toBe(20);
  });

  it("raises the temperature by 1 with up()", () => {
    stat.up();
    expect(stat.getTemperature()).toBe(21);
  });

  it("drops the temperature by 1 with down()", () => {
    stat.down();
    expect(stat.getTemperature()).toBe(20);
  });

  it("will not drop the temperature below 10", () => {
    for(i = 0; i < 20; i ++) {
      stat.down();
    };
    expect(stat.getTemperature()).toBe(10);
  });

  it("will not raise the temperature above 25 if power saving mode is on", () => {
    for(i = 0; i < 20; i ++) {
      stat.up();
    };
    expect(stat.getTemperature()).toBe(25);
  });

  it("will not raise the temperature above 32 if power saving mode is off", () => {
    stat.setPowerSavingMode(false);
    console.log(stat.psm)
    for(i = 0; i < 20; i ++) {
      stat.up();
    };
    expect(stat.getTemperature()).toBe(32);
  });

  it("resets the temperature to 20 with reset()", () => {
    stat.reset();
    expect(stat.getTemperature()).toBe(20);
  });
});