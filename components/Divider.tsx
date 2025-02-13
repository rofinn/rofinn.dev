interface DividerProps {
  title: string;
}

export function Divider(props: DividerProps) {
  return (
    <div className="relative my-4">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-zinc-600 dard:boarder-zinc-400"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="px-3 text-base font-semibold text-zinc-600 bg-zinc-100 dark:text-zinc-400 dark:bg-zinc-900">
          {props.title}
        </span>
      </div>
    </div>
  );
}
