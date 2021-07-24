import React, { Fragment } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { DUMMY_QUOTES } from "./AllQuotes";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

function QuoteDetail() {
  const params = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      {/* <p>{params.quoteId}</p> */}
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
      <Route path={`${match.path}`} exact>
        <div className="centered">
          {/* <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}> */}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuoteDetail;
