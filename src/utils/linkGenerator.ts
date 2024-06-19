const LinkGenerator = (name: string) => {
  const [id, tag] = name.split("#");
  return `https://www.op.gg/summoners/kr/${id}-${tag}`;
};

export default LinkGenerator;
