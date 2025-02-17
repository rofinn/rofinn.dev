interface DividerProps {
  title: string;
}

export function Divider(props: DividerProps) {
  return (
    <div className="relative my-4">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-base"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="px-3 font-semibold bg-crust">{props.title}</span>
      </div>
    </div>
  );
}
