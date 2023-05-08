import { Section, Button } from 'components';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

const DepartmentDetails = ({ departments }) => {
  const { departmentId } = useParams();
  const navigate = useNavigate();
  const department = useMemo(() =>
    departments.find(item => item.id === departmentId)
  );

  return (
    department && (
      <>
        <Section title={department.text}>
          <Button text="description" action={() => navigate('description')} />
          <Button text="history" action={() => navigate('history')} />
        </Section>
        <Outlet />
      </>
    )
  );
};

export default DepartmentDetails;
