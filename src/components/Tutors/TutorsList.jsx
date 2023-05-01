import TutorItem from './TutorItem';
import PropTypes from 'prop-types';

const TutorsList = ({ tutors, deleteTutor }) => {
  return tutors.map(tutor => (
    <TutorItem key={tutor.phone} {...tutor} deleteTutor={deleteTutor} />
  ));
};
TutorsList.propTypes = {
  tutors: PropTypes.arrayOf(
    PropTypes.shape({ phone: PropTypes.string.isRequired })
  ),
};
export default TutorsList;
