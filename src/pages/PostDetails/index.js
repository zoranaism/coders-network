import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../store/posts/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectPostDetails } from "../../store/postDetails/selectors";
import ReactMarkdown from "react-markdown";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";

export default function PostDetails() {
  const params = useParams();
  // console.log(params.id);
  const dispatch = useDispatch();
  const postDetails = useSelector(selectPostDetails);
  // console.log(postDetails);

  useEffect(() => {
    dispatch(fetchPostById(params.id));
  }, [dispatch, params.id]);

  if (!postDetails.title) return <Spinner />;
  return (
    <Container>
      <Jumbotron>
        <h1>{postDetails.title}</h1>
        <h3>Author: {postDetails.developer.name}</h3>
      </Jumbotron>
      <ReactMarkdown source={postDetails.content} />
      {postDetails.comments.map(comment => {
        console.log(comment);
        return (
          <Card key={comment.id}>
            <h5>{comment.developer.name} says:</h5>
            <p>{comment.text}</p>
          </Card>
        );
      })}
    </Container>
  );
}