interface Props {
  firstName: string;
  lastName: string;
  onDelete: () => void;
}

export default function KoderItem(props: Props) {
  const name = `${props.firstName} ${props.lastName}`;
  const img = `https://api.dicebear.com/6.x/notionists/svg?seed= ${name}`;

  return (
    <div className="container flex flex-row relative gap-4  bg-white w-full max-w-md mx-auto items-center justify-between  p-4 rounded-[1.5rem] shadow-2xl shadow-lime-500/90">
      <div className="flex flex-col gap-4 items-center p-2">
        <img src={img} alt="avatar" className="h-[6.5rem] align-middle" />
        <span className="font-display font-semibold text-[22px] tracking-[0.2rem] p-1  ">
          {name}
        </span>
      </div>
      <button
        onClick={props.onDelete}
        className="bg-[rgb(143,83,247)] p-[5px] h-[1.9rem] w-[4.5rem] border-[1px] border-gray-900 flex justify-center items-center rounded-[15px] font-semibold font-display text-[12px]  hover:bg-[rgb(20,18,19,0.9)] hover:text-[rgb(227,171,241)] tracking-[1px]"
      >
        {" "}
        Delete
      </button>
    </div>
  );
}
