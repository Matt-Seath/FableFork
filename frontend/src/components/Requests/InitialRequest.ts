import axios from "axios";

  const InitialRequest = async (input: string) => {
    const orgId: string = import.meta.env.VITE_ORG_ID;
    const apiKey: string = import.meta.env.VITE_API_KEY;
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: `${input}`,
        model: "text-davinci-003",
        max_tokens: 300,
        temperature: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    console.log(response.data);
    return response.data.choices[0].text;
  };

export default InitialRequest;