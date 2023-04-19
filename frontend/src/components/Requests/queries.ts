import { StoryParams } from "../../common/types";

const Queries = ({storyline, genre, perspective}: StoryParams) => {

    return `in 300 words or less, write a ${genre} story based on ${storyline},
      in ${perspective} perspective`;

}

export default Queries;