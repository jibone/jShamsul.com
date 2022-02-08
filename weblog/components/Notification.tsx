const Notification: React.FC<{ message?: string | undefined }> = ({ message }) => {
  return (
    <div className="border-b bg-accent-1 border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-2 text-center text-sm">{message}</div>
      </div>
    </div>
  );
};

export default Notification;
