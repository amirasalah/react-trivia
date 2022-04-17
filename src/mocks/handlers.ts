import { rest } from "msw";

export const getAllQuestionsHandler = rest.get(
  `https://opentdb.com/api.php`,
  async (request, response, context) => {
    return response(
      context.status(200),
      context.json({
        response_code: 0,
        results: [
          {
            category: "Vehicles",
            type: "boolean",
            difficulty: "hard",
            question:
              "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
            correct_answer: "True",
            incorrect_answers: ["False"],
          },
          {
            category: "Entertainment: Video Games",
            type: "boolean",
            difficulty: "hard",
            question: "Unturned originally started as a Roblox game.",
            correct_answer: "True",
            incorrect_answers: ["False"],
          },
        ],
      })
    );
  }
);

export const handlers = [getAllQuestionsHandler];
