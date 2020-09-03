class CoffeeBean {
  constructor(region, process, profile, description, img) {
    this.region = region;
    this.process = process;
    this.profile = profile;
    this.description = description;
    this.img = img;
  }

  get region() { return this._region; }

  get process() { return this._process; }

  get profile() { return this._profile; }

  get description() { return this._description; }

  get img() { return this._img; }

  set region(value) {
    this._region = value;
  }

  set process(value) {
    this._process = value;
  }

  set profile(value) {
    this._profile = value;
  }

  set description(value) {
    this._description = value;
  }

  set img(value) {
    this._img = value;
  }
}

export default CoffeeBean;