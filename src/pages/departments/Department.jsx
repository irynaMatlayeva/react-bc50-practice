import { Section, PartialList, Button, PartialForm } from 'components';
import FORMS from 'constants/forms';
import {useDispatch, useSelector} from 'react-redux';
import {addDepartmentOperation, getDeparmentsOperation} from 'store/departments/departmentsOperations';
import { useEffect } from 'react';
import { allDepartmentsSelector } from 'store/departments/departmentsSelectors';


const Departments = ({
  toggleModal,
  modalState,
  showForm,
  handleShowForm,
}) => {
  const dispatch = useDispatch();
  const departments = useSelector(allDepartmentsSelector);
  useEffect(() => {
 dispatch(getDeparmentsOperation())
  }, [dispatch])
  return (
    <Section title="Departments">
      <PartialList
        toggleModal={toggleModal}
        modalState={modalState}
        listData={departments}
      />
      {showForm === FORMS.DEPARTMENT_FORM && (
        <PartialForm title="adding department" onSubmit={addDepartmentOperation} />
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
