import PropTypes from "prop-types";

export const SearchAlert = ({ classStyle, message, boldMessage }) => {
  return (
    <div className={`text-capitalize alert alert-${classStyle || "primary"}`}>
      {message || "alert"}
      {boldMessage && <span className="fw-bold"> {boldMessage}</span>}
    </div>
  );
};

SearchAlert.propTypes = {
  classStyle: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  boldMessage: PropTypes.string.isRequired,
};
