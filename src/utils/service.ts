import axios from "axios";

export const addQuizApi = async (auth, values) => {
  try {
    const header = {
      "Content-Type": "application/json",
      token: auth.token,
    };
    const resp = await axios.post("/api/quiz", values, { headers: header });
    return resp;
  } catch (error) {
    let e = error;
    if (error.response) {
      e = error.response.data; // data, status, headers
      if (error.response.data && error.response.data.error) {
        e = error.response.data.error; // my app specific keys override
      }
    } else if (error.message) {
      e = error.message;
    } else {
      e = "Unknown error occured";
    }
    return e;
  }
};

export const addAnswerApi = async (auth, quizId, values) => {
  try {
    const header = {
      "Content-Type": "application/json",
      token: auth.token,
    };
    const resp = await axios.post(
      `/api/quiz/${quizId}/answer`,
      {
        questions: values,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { headers: header }
    );
    return resp;
  } catch (error) {
    throw error;
  }
};
