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

const University = ({
  onDelete,
  onEdit,
  showForm,
  handleShowForm,
  toggleModal,
  modalState,
  listData,
  handleDeleteCard,
  onEditCard,
  addCity,
}) => {
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
          listData={listData}
          handleDeleteCard={handleDeleteCard}
          onEditCard={onEditCard}
        />
        {showForm === FORMS.CITY_FORM && (
          <PartialForm title="adding city" onSubmit={addCity} />
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
