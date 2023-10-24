import { Link } from "@mui/material";
import React from "react";

const Bio = ({ bio }: { bio: string }) => {
  const renderBio = () => {
    const bioSplit = bio.split(/(@\w+|#\w+)/g);
    const formattedBio = bioSplit.map((word, idx) => {
      if (word.startsWith("@")) {
        return (
          <Link
            href={`/at?name=${word}`}
            key={word + idx}
            className="text-blue-400 no-underline font-bold text-sm"
          >
            {word}
          </Link>
        );
      } else if (word.startsWith("#")) {
        return (
          <Link
            href={`/hashtag?name=${word}`}
            key={word + idx}
            className="text-red-400 no-underline font-bold text-sm"
          >
            {word}
          </Link>
        );
      } else {
        return word;
      }
    });
    return formattedBio;
  };
  return (
    <p className="whitespace-pre-wrap">{renderBio().map((word) => word)}</p>
  );
};

export default Bio;
