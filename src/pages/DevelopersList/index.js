import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Developer from "../../components/Developer";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevelopersThunk } from "../../store/developers/actions";
import { selectDevelopers } from "../../store/developers/selectors";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";

export default function DevelopersList() {
  const dispatch = useDispatch();
  const developers = useSelector(selectDevelopers);
  useEffect(
    function() {
      dispatch(fetchDevelopersThunk());
    },
    [dispatch]
  );

  return (
    <Container>
      {developers.map(developer => {
        return (
          <Developer
            key={developer.id}
            name={developer.name}
            intro={developer.intro}
            email={developer.email}
            github_username={developer.github_username}
            website={developer.website}
          />
        );
      })}
      <Pagination>
      <Pagination.Prev />
      <Pagination.Item active="1">
          1
        </Pagination.Item>
        <Pagination.Item>
          2
        </Pagination.Item>
        <Pagination.Item>
          3
        </Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </Container>
  );
}
