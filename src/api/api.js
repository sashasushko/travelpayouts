import { delay } from "../utils/delay";
import { header } from "./mock-data";
import { bonuses } from "./mock-data";

class Api {
    async getAccountState() {
        return delay(header);
    }

    async getBonuses() {
        return delay(bonuses);
    }
}

export { Api as default };
  