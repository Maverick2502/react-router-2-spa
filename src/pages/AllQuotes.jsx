import React from "react";
import QuoteList from "../components/quotes/QuoteList";

export const DUMMY_QUOTES = [
  { id: "q1", author: "John Wick", text: "I'll will be coming after you" },
  {
    id: "q2",
    author: "Robert 'Bob' McCall",
    text: "Progress. Not Perfection.",
  },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
