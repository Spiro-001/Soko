import React from "react";

const Bio = ({ bio }: { bio: string }) => {
  const renderBio = () => {
    const bioSplit = bio.split(/(@\w+|#\w+)/g);
    const formattedBio = bioSplit.map((word, idx) => {
      if (word.startsWith("@")) {
        return (
          <b key={word + idx} className="text-blue-400">
            {word}
          </b>
        );
      } else if (word.startsWith("#")) {
        return (
          <b key={word + idx} className="text-red-400">
            {word}
          </b>
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
