type CardProps = {
  children: React.ReactNode;
};

type CardComponent = React.FC<CardProps> & {
  Media: typeof CardMedia;
  Title: typeof CardTitle;
  Content: typeof CardContent;
};
function CardMedia({ children }: CardProps) {
  return <div className="overflow-hidden">{children}</div>;
}

function CardTitle({ children }: CardProps) {
  return <div className="font-bold">{children}</div>;
}

function CardContent({ children }: CardProps) {
  return <div className="p-5 flex flex-col">{children}</div>;
}

const Card = (({ children }: CardProps) => {
  return (
    <article className="w-full max-w-xs lg:max-w-md overflow-hidden flex flex-col bg-white rounded-xl">
      {children}
    </article>
  );
}) as CardComponent;



Card.Media = CardMedia;
Card.Title = CardTitle;
Card.Content = CardContent;


export default Card;