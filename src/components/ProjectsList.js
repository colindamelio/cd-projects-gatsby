import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { projectItems } from "../data";

const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px auto 0;
  padding: 0 20px;
`;

const Item = styled.li`
  position: relative;
  max-width: 400px;
  margin-bottom: 25px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const Overlay = styled.a`
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
`;

const Tag = styled.h3`
  font-size: 13px;
  margin-top: 0;
`;

const Title = styled.h2``;
const Description = styled.p``;

const Projects = () => (
  <Container>
    {projectItems.map((project, i) => {
      return (
        <Item key={i}>
          <img
            src={project.src}
            alt={project.alt}
            // onLoad={this.renderImage}
            loading="lazy"
          />
          <Overlay href={project.href} target="_blank">
            <Title>{project.title}</Title>
            {project.company && <Tag>{`Built at ${project.company}`}</Tag>}
            <Description>{project.desc}</Description>
          </Overlay>
        </Item>
      );
    })}
  </Container>
);

Projects.propTypes = {
  items: PropTypes.array,
};

export default Projects;
