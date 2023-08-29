import ConceptWrapper from "./ConceptWrapper";


function ConceptCard({image, title, description}) {

  return (
    <ConceptWrapper>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </ConceptWrapper>
  );
}

export default ConceptCard;
