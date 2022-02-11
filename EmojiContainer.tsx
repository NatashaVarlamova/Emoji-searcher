import emojies from "./emojiList.json";
import { useState } from "react";
import { EmojiRow } from "../EmojiRow/EmojiRow";
import { Form } from "../Form/Form";

export const EmojiContainer = () => {
  const [emojiesList, setEmojiesList] = useState(emojies);

  const onChangeText = (value: string) => {
    const filteredEmojies = emojies.filter((item) => {
      if (item.title.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }

      if (item.keywords.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }

      return false;
    });

    setEmojiesList(filteredEmojies);
  };

  return (
    <>
      <Form onChangeText={onChangeText} />
      <EmojiRow items={emojiesList} />
    </>
  );
};
