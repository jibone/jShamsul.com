export default function LinkBox({
  url,
  label,
  text,
}: {
  url: string;
  label: string;
  text: string;
}) {
  return (
    <div className="mt-8 bg-slate-50 p-2 border border-slate-200 rounded-lg hover:border-slate-400">
      <div>
        <a href={url}>{label}</a>
      </div>
      <div>{text}</div>
    </div>
  );
}
