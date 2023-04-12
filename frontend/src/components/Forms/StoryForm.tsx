import React, { useEffect, useState } from "react";
import { z } from "zod";
import { StoryParams } from "../../common/types";
import axios from "axios";

const StoryForm = ({ fork }: StoryParams) => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data[0].name));
  });

  console.log(fork);
  return (
    <form>
      <div>
        <h3>Storyline</h3>
        <label htmlFor="fork">Fork Existing Story</label>
        <input
          id="forkExisting"
          name="forkRadio"
          type="radio"
          value="forkExisting"
        />
        <label htmlFor="fork">Create a New Story</label>
        <input id="createNew" name="forkRadio" type="radio" value="createNew" />
      </div>
      <h3>Genre</h3>
      <div>
        <label htmlFor="genre">Adventure</label>
        <input
          id="adventure"
          name="genreRadio"
          type="radio"
          value="adventure"
        />
        <label htmlFor="genre">Horror</label>
        <input id="horror" name="genreRadio" type="radio" value="horror" />
        <label htmlFor="fork">Romance</label>
        <input id="romance" name="genreRadio" type="radio" value="romance" />
        <label htmlFor="genre">comedy</label>
        <input id="comedy" name="genreRadio" type="radio" value="comedy" />
      </div>
      <h3>Perspective</h3>
      <label htmlFor="perspective">1st Person</label>
      <input
        id="1stPerson"
        name="perspectionRadio"
        type="radio"
        value="1stPerson"
      />
      <label htmlFor="perspective">3rd Person</label>
      <input
        id="3rdPerson"
        name="perspectionRadio"
        type="radio"
        value="3rdPerson"
      />

      <button disabled={false} type="submit">
        Submit
      </button>
    </form>
  );
};

export default StoryForm;
