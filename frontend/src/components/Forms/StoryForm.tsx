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
    <>
      <div>
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          Storyline
        </h3>
        <ul className="grid w-full gap-6 md:grid-cols-2">
          <li>
            <input
              className="hidden peer"
              id="forkExisting"
              name="forkRadio"
              type="radio"
              value="forkExisting"
            />
            <label
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              htmlFor="fork"
            >
              Fork Existing Story
            </label>
          </li>
          <li>
            <label htmlFor="fork">Create a New Story</label>
            <input
              id="createNew"
              name="forkRadio"
              type="radio"
              value="createNew"
            />
          </li>
        </ul>
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
    </>
  );
};

export default StoryForm;
