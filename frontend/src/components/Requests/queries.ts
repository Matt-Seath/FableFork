import { StoryParams } from "../../common/types";
import { RandomItem } from "../../common/utils";
import Plots from "../../assets/data/Plots.json"

const Queries = ({plot, genre, perspective}: StoryParams) => {
  let plotSegment: string = "";
  let genreSegment: string = "";
  let perspectiveSegment: string = "";

  switch (plot) {
    case ("Surprise Me"):
      let randomPlot = RandomItem(Plots)
      plotSegment = `based on this scene: ${randomPlot}`
      break;
    default:
      plotSegment = `based on the following: ${plot}`
      break;
  }

  switch (genre) {
    case ("Horror"):
      genreSegment = "as a horror story in the style of a Steven King novel"
      break;
    case ("Romance"):
      genreSegment = "as a romance story in the style of a Nora Roberts novel"
      break;
    case ("Comedy"):
      genreSegment = "as a funny story where silly things happen like in the Naked Gun movies"
      break;
    default:
      genreSegment = `as a ${genre} story in the style of a ${genre} novel`
      break;
  }

  switch (perspective) {
    case ("1st Person"):
      perspectiveSegment = "where it is written as if the reader is the protagonist (addressed as 'you')"
      break;
    case ("3rd Person"):
      perspectiveSegment = "in 3rd person perspective"
      break;
    case ("Default"):
      perspectiveSegment = ""
      break;
  }

  const outlineGenerationPrompt: string = `
"ChatGPT will generate a book ${plotSegment} ${genreSegment}, ${perspectiveSegment} with 2000-7000 words, consisting of chapters that are 3,000 words each. The outline should include a list of all chapters with a list of actions happening in each chapter. You would like twists included in the chapter outlines, but you want the story to be generated from scratch by ChatGPT. The book is for your personal reading only and should be a surprise to you, similar to purchasing a random book from Amazon.

Down below is an example of how the chapters shall be generated. Do not generate a title. Come up with a different story, as this example only chowcases the format:

Chapter 1: The Arrival

- The protagonist arrives in a small town to start a new job

- They meet their eccentric landlord and settle into their new apartment

- The protagonist takes a walk around town and discovers a mysterious abandoned building

Chapter 2: The Invitation

- The protagonist receives an invitation to a party from their co-worker

- They attend the party and meet a group of intriguing strangers

- One of the strangers reveals a secret about the abandoned building the protagonist discovered earlier

Chapter 3: The Investigation

- The protagonist decides to investigate the abandoned building with the help of their new friends

- They discover a hidden room filled with strange artifacts

- One of the artifacts appears to be cursed and causes the group to experience vivid nightmares"

Here you may to replace the chapter titles and action to adjust the theme of the book. I noticed that the book I generated had a different story, but still had an "artifact" as the main plot. `   
;

  const shortExample: string = `
  Generate a short story ${plotSegment} ${genreSegment}, ${perspectiveSegment}
  `

  return shortExample
}

export default Queries;