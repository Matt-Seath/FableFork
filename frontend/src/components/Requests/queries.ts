import { StoryParams } from "../../common/types";

const Queries = ({plot, genre, perspective}: StoryParams) => {

    return `in 300 words or less, write a ${genre} story based on ${plot},
      in ${perspective} perspective`;

}

export default Queries;