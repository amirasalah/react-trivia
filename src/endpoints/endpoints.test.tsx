import { server } from "mocks/server";
import { getAllQuestions } from "endpoints";
import { rest } from "msw";

describe("Endpoints", () => {
  describe("getAllQuestions Function", () => {
    it("should return a function", () => {
      expect(typeof getAllQuestions).toBe("function");
    });
    it("should return expected JSON", async () => {
      const data = await getAllQuestions(10, "hard", "boolean");
      const response = data.data.results[0];

      expect(data.status).toEqual(200);
      expect(response).toHaveProperty("category");
      expect(response).toHaveProperty("type");
      expect(response).toHaveProperty("difficulty");
      expect(response).toHaveProperty("question");
      expect(response).toHaveProperty("incorrect_answers");
      expect(response).toHaveProperty("correct_answer");
    });
  });
  it("Should return 500 when internal server error happens", async () => {
    server.use(
      rest.get("https://opentdb.com/api.php", (request, response, context) => {
        return response(context.status(500));
      })
    );
    const data = await getAllQuestions(10, "hard", "boolean");
    expect(data.status).toEqual(500);
    expect(data.statusText).toEqual("Internal Server Error");
  });
});
