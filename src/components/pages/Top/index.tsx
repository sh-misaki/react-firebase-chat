import React, { FunctionComponent } from 'react';

import MainLayout from 'components/layouts/main';
import Typography from 'components/atoms/Typography';

type Props = {

}

const Top: FunctionComponent<Props> = () => {
  return (
    <MainLayout>
      <Typography variant="h1">
        Top
      </Typography>
    </MainLayout>
  )
}

export default Top;
