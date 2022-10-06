import "../stylesheets/Testimonial.css";

function Testimonial(props) {
  return (
    <div className="testimonial-container">
      <img className="testimonial-img" src={props.img} alt="Emma picture" />
      <div className="testimonial-text-container">
        <p className="testimonial-name">
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className="testimonial-work">
          {props.work} at <strong> {props.company} </strong>
        </p>
        <p className="testimonial-text">"{props.testimonial}"</p>
      </div>
    </div>
  );
}

export default Testimonial;
