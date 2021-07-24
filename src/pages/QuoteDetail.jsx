import React, { Fragment, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { DUMMY_QUOTES } from "./AllQuotes";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

function QuoteDetail() {
  const params = useParams();
  const match = useRouteMatch();

  const { quoteId } = params;

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuotes.text) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      {/* <p>{params.quoteId}</p> */}
      <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
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
