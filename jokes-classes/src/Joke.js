// Joke.js
import React from "react";
import "./Joke.css";

function Joke({ id, vote, votes, text }) {
  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={() => vote(id, +1)}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={() => vote(id, -1)}>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes}
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  );
}

export default Joke;




// const [votes, setVotes] = useState(initialVotes || 0)
  // const [clickCount, setClickCount]= useState(0);

  // const handleUpVote = () => {
  //   setVotes(prevVotes => prevVotes + 1);
  //   setClickCount(prevCount => prevCount + 1);
  //   vote(id, votes + 1)
  // }

  // const handleDownVote = () => {
  //   setVotes(prevVotes => prevVotes - 1);
  //   setClickCount(prevCount => prevCount - 1);
  //   vote(id, votes - 1)
  // };


 //   <div className="Joke">
  //     <div className="Joke-votearea">
  //       <button onClick={handleUpVote}>
  //         <i className="fas fa-thumbs-up" />
  //       </button>
  //       <button onClick={handleDownVote}>
  //         <i className="fas fa-thumbs-down" />
  //       </button>
  //       <span> {votes} </span>
  //       <div className="Joke-text">{text}</div>
  //     </div>
  //   </div>
  // );