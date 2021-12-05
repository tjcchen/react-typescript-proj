const log = (...msgs: any[]) => {
  console.log(msgs);
};

const exportedObject = {
  log
};

export default exportedObject;