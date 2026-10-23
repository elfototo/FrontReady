type CardProps = {
  children: React.ReactNode;
};

type CardCardComponent = React.FC<CardProps> & {
  Media: React.FC<CardProps>;
  Title: React.FC<CardProps>;
  Content: React.FC<CardProps>;
  Action: React.FC<CardProps>;
};

function Media({ children }: CardProps) {
  return <div className="w-full overflow-hidden h-full object-cover">{children}</div>;
}

function Title({ children }: CardProps) {
  return <div className="font-bold text-2xl">{children}</div>;
}

function Content({ children }: CardProps) {
  return <div className="px-2 flex flex-col gap-5 mb-2 my-5">{children}</div>;
}

function Action({ children }: CardProps) {
  return (
    <div>
      <button className="bg-blue-500 text-white w-full rounded-xl p-2">{children}</button>
    </div>
  );
}

export const CardCard: CardCardComponent = ({ children }: CardProps) => {
  return (
    <div className="rounded-2xl shadow-2xl bg-gray-50 border border-gray-200 w-[350px] max-w-[300px], overflow-hidden">
      {children}
    </div>
  );
};

CardCard.Media = Media;
CardCard.Title = Title;
CardCard.Content = Content;
CardCard.Action = Action;