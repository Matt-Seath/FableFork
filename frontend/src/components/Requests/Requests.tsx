import React from "react";
import axios from "axios";

interface RequestProps {
  query: string;
}

const Requests = ({ query }: RequestProps) => {
  const orgId: string = import.meta.env.VITE_ORG_ID;
  const apiKey: string = import.meta.env.VITE_API_KEY;

  const fetchData = async (input: string) => {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: { input },
        model: "gpt-3.5-turbo-0301",
        max_tokens: 50,
        n: 1,
        stop: ".",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    console.log(response.data)
    return response.data.choices[0].text;
  };

  return <></>;
};

export default Requests;
