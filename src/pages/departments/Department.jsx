import { Section, PartialList, Button, PartialForm } from 'components';
import FORMS from 'constants/forms';

const Departments = ({
  toggleModal,
  modalState,
  listData,
  handleDeleteCard,
  onEditCard,
  showForm,
  onSubmit,
  handleShowForm,
}) => {
  return (
    <Section title="Departments">
      <PartialList
        toggleModal={toggleModal}
        modalState={modalState}
        listData={listData}
        handleDeleteCard={handleDeleteCard}
        onEditCard={onEditCard}
      />
      {showForm === FORMS.DEPARTMENT_FORM && (
        <PartialForm title="adding department" onSubmit={onSubmit} />
      )}
      <Button
        isIcon
        text={'Add department'}
        action={() => handleShowForm(FORMS.DEPARTMENT_FORM)}
      />
    </Section>
  );
};
export default Departments;
