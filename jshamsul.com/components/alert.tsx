import Container from "./container";

/**
 * Can use this for adding announcement.
 * May want to have announcement text at props...
 */
const Alert: React.FC = () => {
  return (
    <div className="border-b bg-accent-1 border-accent-2">
      <Container>
        <div className="py-2 text-center text-sm"></div>
      </Container>
    </div>
  );
};

export default Alert;
