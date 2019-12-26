import Shillelagh from "./shillelagh";

class LoadedStick extends Shillelagh {
  name = "loaded stick";
  flavor = "smachtín ceann luaidhe";
  description =
    ' a shillelaghs with the heavy "hitting" end hollowed out and filled with molten lead to increase the weight';
  damagePerSwing = this.damagePerSwing * 2.5;
}

export default LoadedStick;
