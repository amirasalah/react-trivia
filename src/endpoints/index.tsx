import axios from "axios";

const BASE_URL = "https://opentdb.com";

export const getAllQuestions = async (
  amount: number,
  difficulty: string,
  type: string
) =>
  await axios
    .get(
      `${BASE_URL}/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`
    )
    .catch((error) => {
      return error.response;
    });
