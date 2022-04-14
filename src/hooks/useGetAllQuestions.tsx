import { getAllQuestions } from "../endpoints";
import { useQuery } from "react-query";

const useGetAllQuestions = () =>
  useQuery("questions", () => getAllQuestions(10, "hard", "boolean"), {
    refetchOnWindowFocus: false,
  });

export default useGetAllQuestions;
