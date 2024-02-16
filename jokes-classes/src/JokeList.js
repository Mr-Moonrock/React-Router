import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

function JokeList({ numJokesToGet = 5 }) {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getJokes();
  }, []); 

  async function getJokes() {
    try {
      let fetchedJokes = [];
      let seenJokes = new Set();

      while (fetchedJokes.length < numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" }
        });
        let { ...joke } = res.data;

        if (!seenJokes.has(joke.id)) {
          seenJokes.add(joke.id);
          fetchedJokes.push({ ...joke, votes: 0 });
        } else {
          console.log("Duplicate joke found!");
        }
      }

      setJokes(fetchedJokes);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  function vote(id, delta) {
    setJokes(jokes => {
      return jokes.map(joke =>
        joke.id === id ? { ...joke, votes: joke.votes + delta } : joke
      );
    });
  }

  function generateNewJokes() {
    setIsLoading(true);
    getJokes();
  }

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  }

  let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);

  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      {sortedJokes.map(joke => (
        <Joke
          key={joke.id}
          id={joke.id}
          text={joke.joke}
          votes={joke.votes}
          vote={vote}
        />
      ))}
    </div>
  );
}

export default JokeList;
