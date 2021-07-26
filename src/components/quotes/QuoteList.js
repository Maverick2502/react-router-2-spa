import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> f400b9aa6693ebdd8e16adfd9848985e7d5e2533
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

function sortQuotes(quotes, ascending) {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteA.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
}
<<<<<<< HEAD
=======

>>>>>>> f400b9aa6693ebdd8e16adfd9848985e7d5e2533
const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

<<<<<<< HEAD
  const isSortingAscending = queryParams.get("sortAll") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const sortingHandler = () => {
    history.push("/quotes?sortAll=" + (isSortingAscending ? "asc" : "desc"));
=======
  const isSortingIsAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingIsAscending);

  const sortingHandler = () => {
    // Option - 1
    // history.push("/quotes?sort=" + (isSortingIsAscending ? "desc" : "asc"));
    // Option - 2
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingIsAscending ? "desc" : "asc"}`,
    });
    // Option - 3
    // history.push(
    //   `${location.pathname}?sort=${isSortingIsAscending ? "desc" : "asc"}`
    // );
>>>>>>> f400b9aa6693ebdd8e16adfd9848985e7d5e2533
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>
<<<<<<< HEAD
          Sort {isSortingAscending ? "Ascending" : "Descending"}
=======
          Sort {isSortingIsAscending ? "Ascending" : "Descending"}
>>>>>>> f400b9aa6693ebdd8e16adfd9848985e7d5e2533
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
