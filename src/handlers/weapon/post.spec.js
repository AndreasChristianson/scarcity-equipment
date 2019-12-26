import { handler } from "./post";
import Chance from "chance";

describe("post", () => {
  let weaponId, event;
  const chance = new Chance();

  beforeEach(() => {
    process.env.GIT_COMMIT_LONG = chance.hash();
    weaponId = chance.guid();
    event = {
      body: JSON.stringify({
        id: weaponId,
        itemLevel: chance.d100()
      })
    };
  });

  it("should return 200", async () => {
    const response = await handler(event);
    expect(response.statusCode).toBe(200);
  });

  it("should set the version header", async () => {
    const response = await handler(event);
    expect(response.headers.version).toBe(process.env.GIT_COMMIT_LONG);
  });

  it("should return a weapon with the specified id", async () => {
    const response = await handler(event);
    expect(JSON.parse(response.body).id).toBe(weaponId);
  });
  it("should return a the same item for the same id", async () => {
    const response1 = await handler(event);
    const response2 = await handler(event);
    expect(JSON.parse(response1.body)).toEqual(JSON.parse(response2.body));
  });
});
