import React, { useId } from "react";
import Button from "./Button";
import usePost from "@/hooks/usePost";

const PostModal = ({ hideModal }: { hideModal: () => void }) => {
  const titleID = useId();
  const contentID = useId();
  const { createPost } = usePost();
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const title = (document.getElementById(titleID) as HTMLInputElement)?.value;
    const content = (document.getElementById(contentID) as HTMLTextAreaElement)
      ?.value;

    createPost!({ title, content });
    hideModal();
  };

  return (
    <div className="bg-black/10 grid fixed left-0 right-0 top-0 bottom-0">
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-xl px-4 py-8 w-11/12 h-fit absolute top-1/2 left-1/2 -translate-1/2 max-w-2xl"
      >
        <button
          role="button"
          type="button"
          className="bg-black/20 w-8 h-8 rounded-full absolute right-4 top-4"
          onClick={hideModal}
        >
          X
        </button>
        <div className="flex flex-col">
          <label htmlFor={titleID}>Title</label>
          <input
            type="text"
            id={titleID}
            name="title"
            className="border"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={contentID}>Content</label>
          <textarea id={contentID} className="border" name="content" required />
        </div>
        <Button className="mt-6" size="small">
          Add Post
        </Button>
      </form>
    </div>
  );
};

export default PostModal;
