import ConceptCard from "./ConceptCard";
import './ConceptSection.css'

function ConceptSection(props) {
  const data = props.data;

  const listConcepts = data.map((concept, index) => 
    
    <ConceptCard key={index} image={concept.image} title={concept.title} description={concept.description}></ConceptCard>
  );
  

  return (
    <ul id="concepts">
      {listConcepts}
    </ul>
  );
}

export default ConceptSection;
