interface IEmoji {
  title: string;
  symbol: string;
  keywords: string;
}

interface IListProps {
  items: IEmoji[];
}

export const EmojiRow = ({ items }: IListProps) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div className="emoji-row">
            {item.symbol} {item.title}
          </div>
        );
      })}
    </>
  );
};
