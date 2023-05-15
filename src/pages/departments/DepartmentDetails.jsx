import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonMui from '@mui/material/Button';
import { Section, Button } from 'components';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { allDepartmentsSelector } from 'store/departments/departmentsSelectors';

const DepartmentDetails = () => {
  const departments = useSelector(allDepartmentsSelector);
  const { departmentId } = useParams();
  const navigate = useNavigate();
  const department = useMemo(
    () => departments.find(item => item.id === departmentId),
    [departmentId, departments]
  );

  return (
    department && (
      <>
        <Section title={department.text}>
          <Stack
            direction={{ xs: 'column', sm: 'row', md: 'column' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Typography variant="h5" component="h2">
              Hello, boddy!
            </Typography>
            <ButtonMui
              variant="contained"
              sx={{
                width: { xs: '100px', sm: '250px', md: '400px' },
                backgroundColor: {
                  xs: 'info.main',
                  sm: 'primary.main',
                  md: 'secondary.main',
                },
                color: 'primary.light',
              }}
              // fullWidth
              onClick={() => navigate('description')}
              size="large"
            >
              description
            </ButtonMui>
            <ButtonMui
              variant="contained"
              sx={{ width: { xs: '100px', sm: '250px', md: '400px' } }}
              // fullWidth
              onClick={() => navigate('history')}
              size="large"
            >
              history
            </ButtonMui>
            {/* <Button text="description" action={() => navigate('description')} />
            <Button text="history" action={() => navigate('history')} /> */}
          </Stack>
        </Section>
        <Outlet />
      </>
    )
  );
};

export default DepartmentDetails;
