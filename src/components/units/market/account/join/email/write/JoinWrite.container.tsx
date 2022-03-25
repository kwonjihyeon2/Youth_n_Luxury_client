import { useState } from 'react';
import JoinWriteUI from './JoinWrite.presenter';

export default function JoinWrite() {
  const [isSend, setIsSend] = useState(false);

  return <JoinWriteUI isSend={isSend} />;
}
