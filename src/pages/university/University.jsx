import {
  Section,
  Card,
  Paper,
  TutorsList,
  Button,
  PartialList,
  PartialForm,
  TutorForm,
} from 'components';
import universityData from '../../constants/universityData.json';
import tutorsIcon from '../../assets/images/teachers-emoji.png';
import FORMS from 'constants/forms';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCitiesOperation,
  postCitiesOperation,
} from 'store/cities/citiesOperations';

const University = ({
  onDelete,
  onEdit,
  showForm,
  handleShowForm,
  toggleModal,
  modalState,
  handleDeleteCard,
  onEditCard,
}) => {
  const dispatch = useDispatch();
  const cities = useSelector(state => state.cities.items);

  useEffect(() => {
    dispatch(getCitiesOperation());
  }, [dispatch]);

  return (
    <>
      <Section isRow isRightPosition title="Information about university">
        <Card onDelete={onDelete} onEdit={onEdit} name={universityData.name} />
        <Paper>{universityData.description}</Paper>
      </Section>
      <Section title="Tutors" image={tutorsIcon}>
        <TutorsList />
        {showForm === FORMS.TUTOR_FORM && <TutorForm />}
        <Button
          isIcon
          text={'Add tutor'}
          action={() => handleShowForm(FORMS.TUTOR_FORM)}
        />
      </Section>
      <Section title="Cities">
        <PartialList
          toggleModal={toggleModal}
          modalState={modalState}
          listData={cities}
          handleDeleteCard={handleDeleteCard}
          onEditCard={onEditCard}
        />
        {showForm === FORMS.CITY_FORM && (
          <PartialForm title="adding city" onSubmit={postCitiesOperation} />
        )}
        <Button
          isIcon
          text={'Add city'}
          action={() => handleShowForm(FORMS.CITY_FORM)}
        />
      </Section>
    </>
  );
};
export default University;
