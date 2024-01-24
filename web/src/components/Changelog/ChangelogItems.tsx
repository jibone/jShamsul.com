import { format } from "date-fns";

// Move this to components
export type ChangelogItemsProps = {
  entry: React.ReactNode;
  frontmatter: {
    date: string;
  };
};

export default function ChangelogItems({
  entry,
  frontmatter,
}: ChangelogItemsProps) {
  const changelogDateString = format(
    new Date(`${frontmatter.date}`),
    "eee, do MMMM Y",
  );

  return (
    <li key="20240117" className="relative flex gap-x-4">
      <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
        <div className="w-px bg-gray-300"></div>
      </div>
      <div className="relative flex h-7 w-6 flex-none items-center justify-center">
        <div className="h-1.5 w-1.5 rounded-full bg-gray-300 ring-1 ring-gray-300"></div>
      </div>
      <div className="flex-auto rounded-md py-1 -px-3">
        <div className="justify-between gap-x-4">
          <div className="py-0.5 text-sm leading-5 text-gray-500">
            <span className="font-bold text-gray-900">
              {changelogDateString}
            </span>
          </div>
        </div>
        <div className="prose md:prose-lg">{entry}</div>
      </div>
    </li>
  );
}
