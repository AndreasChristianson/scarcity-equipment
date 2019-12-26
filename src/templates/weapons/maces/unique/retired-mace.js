import OneHander from "../../one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Wooden from "../../wooden-mixin";

class RetiredMace extends Wooden(OneHander(AbstractMace)) {
  name = "retired mace";
  damagePerSwing = this.damagePerSwing * 1.5;
  rarity = "rare";
  fabrication = "unique";
  flavor =
    "The current mace has been in use since December 1, 1842. It was created by New York silversmith William Adams, at a cost of $400 (equivalent to $10,000 in 2018), to replace the first one that was destroyed when the Capitol Building was burned on August 24, 1814, during the War of 1812. A simple wooden mace was used in the interim.";
  description = "A simple wooden mace.";
}

export default RetiredMace;
