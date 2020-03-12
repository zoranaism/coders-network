import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Developer from "../../components/Developer";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevelopersThunk } from "../../store/developers/actions";
import { selectDevelopers } from "../../store/developers/selectors";

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
        return <Developer key={developer.id} name={developer.name} intro={developer.intro} email={developer.email} github_username={developer.github_username} website={developer.website} />;
      })}
    </Container>
  );
}