import { Alert, Button, Space } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Alert message="Success Tips" type="success" showIcon action={<a>Detail</a>} />
    <Alert message="Informational Notes" type="info" showIcon action={<a>Detail</a>} />
    <Alert message="Warning" type="warning" showIcon action={<a>Detail</a>} />
    <Alert message="Error" type="error" showIcon action={<a>Detail</a>} />
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
      closable
      action={<Button size="small">Detail</Button>}
    />
    <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
      closable
      action={<Button size="small">Detail</Button>}
    />
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
      action={<Button size="small">Detail</Button>}
    />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
      closable
      action={
        <Button size="small" danger>
          Detail
        </Button>
      }
    />
  </Space>
);

export default App;
