import loadMap from "../../loadMap.js";

describe("Load map", () => {
  it("should load portland", () => {
    expect(loadMap("portland")).toBe("portland.jpg");
  });

  it("should default if no city", () => {
    expect(loadMap(null)).toBe("default.jpg");
  });
});
